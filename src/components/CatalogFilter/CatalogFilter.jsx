import { useEffect, useMemo, useRef, useState } from 'react';
import './CatalogFilter.scss';
import stations from '../../data/stationsData.json';
import { sendYmGoal } from '../../utils/analytics.js';

// Конкретные значения количества человек
export const quantityOptions = [
  { value: 3, label: '3 человека' },
  { value: 4, label: '4 человека' },
  { value: 5, label: '5 человек' },
  { value: 6, label: '6 человек' },
  { value: 7, label: '7 человек' },
  { value: 8, label: '8 человек' },
  { value: 10, label: '10 человек' },
  { value: 12, label: '12 человек' },
  { value: 15, label: '15 человек' },
  { value: 20, label: '20 человек' },
  { value: 25, label: '25 человек' },
  { value: 30, label: '30 человек' },
];

// Сопоставление числовых значений с целями
const quantityGoals = {
  3: 'Stations_Filter_3People',
  4: 'Stations_Filter_4People',
  5: 'Stations_Filter_5People',
  6: 'Stations_Filter_6People',
  7: 'Stations_Filter_7People',
  8: 'Stations_Filter_8People',
  10: 'Stations_Filter_10People',
  12: 'Stations_Filter_12People',
  15: 'Stations_Filter_15People',
  20: 'Stations_Filter_20People',
  25: 'Stations_Filter_25People',
  30: 'Stations_Filter_30People',
};

function CatalogFilter({ selectedBrands, selectedQuantities, onFilterChange, onReset }) {
  const allBrands = useMemo(() => [...new Set(stations.map((s) => s.brand))], []);
  const selectedValues = selectedQuantities;
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef(null);
  
  const toggleFilter = () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setIsOpen((prev) => !prev);
    }
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        filterRef.current &&
        !filterRef.current.contains(event.target)
      ) {
        filterRef.current.scrollTop = 0;
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);
  
  const handlePeopleChange = (value) => {
    const isSelected = selectedValues.includes(value);
    const newValues = isSelected
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onFilterChange('quantities', newValues);
    const goal = quantityGoals[value];
    if (goal) sendYmGoal(goal);
  };
  
  const handleBrandChange = (brand) => {
    const newSelection = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    onFilterChange('brands', newSelection);
    const goal = brandGoals[brand];
    if (goal) sendYmGoal(goal);
  };
  
  const handleResetClick = () => {
    sendYmGoal('Stations_ClearFilter');
    onReset();
  };
  
  return (
    <div className="catalog__filter-wrapper">
      <div
        ref={filterRef}
        className={`catalog__filter ${isOpen ? 'is-open' : ''}`}
      >
        <div
          className="catalog__filter-head"
          onClick={toggleFilter}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleFilter();
            }
          }}
        >
          Фильтр
        </div>
        
        <div className="catalog__filter-item">
          <div className="catalog__filter-item-head">Производитель</div>
          {allBrands.map((brand) => (
            <label key={brand} className="catalog__filter-option" htmlFor={`brand-${brand}`}>
              <input
                type="checkbox"
                id={`brand-${brand}`}
                name="brand"
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <span className="catalog__filter-option-checkmark"></span>
              <span className="catalog__filter-option-text">{brand}</span>
            </label>
          ))}
        </div>
        
        <div className="catalog__filter-item">
          <div className="catalog__filter-item-head">Пользователей</div>
          {quantityOptions.map((option) => (
            <label key={option.value} className="catalog__filter-option" htmlFor={`quantity-${option.value}`}>
              <input
                type="checkbox"
                id={`quantity-${option.value}`}
                name="quantity"
                value={option.value}
                checked={selectedValues.includes(option.value)}
                onChange={() => handlePeopleChange(option.value)}
              />
              <span className="catalog__filter-option-checkmark"></span>
              <span className="catalog__filter-option-text">{option.label}</span>
            </label>
          ))}
        </div>
        
        <button className="catalog__filter-button" onClick={handleResetClick}>
          Сбросить
        </button>
      </div>
    </div>
  );
}

export default CatalogFilter;