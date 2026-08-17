import { useEffect, useMemo, useRef, useState } from 'react';
import './CatalogFilter.scss';
import stations from '../../data/stations.json';
import { sendYmGoal } from '../../utils/analytics.js'; // импорт утилиты

export const quantityRanges = [
  {
    code: '1-3',
    label: '1-3 человек',
    values: ['3 человек'],
  },
  {
    code: '4-6',
    label: '4-6 человек',
    values: ['4 человека', '4 человек', '5 человек', '6 человек'],
  },
  {
    code: '7-9',
    label: '7-9 человек',
    values: ['7 человек', '8 человек', '9 человек'],
  },
  {
    code: '10+',
    label: '10+ человек',
    values: [
      '10 человек',
      '12 человек',
      '15 человек',
      '20 человек',
      '25 человек',
      '30 человек',
    ],
  },
];

export const getQuantitiesByCodes = (codes) => {
  return codes.flatMap((code) => {
    const range = quantityRanges.find((r) => r.code === code);
    return range ? range.values : [];
  });
};

// Сопоставление брендов и кодов количества с целями
const brandGoals = {
  'ЕВРОБИОН': 'Stations_Filter_Evrobion',
  'ТОПАС': 'Stations_Filter_Topas',
  'АСТРА': 'Stations_Filter_Astra',
  'ЕВРОЛОС': 'Stations_Filter_Evrolos',
  'ЗОРДЕ': 'Stations_Filter_Zorde',
  'МАКС': 'Stations_Filter_Maks',
};

const quantityGoals = {
  '1-3': 'Stations_Filter_1-3People',
  '4-6': 'Stations_Filter_4-6People',
  '7-9': 'Stations_Filter_7-9People',
  '10+': 'Stations_Filter_10People',
};

function CatalogFilter({ selectedBrands, selectedQuantities, onFilterChange, onReset }) {
  const allBrands = useMemo(() => [...new Set(stations.map((s) => s.brand))], []);
  const selectedCodes = selectedQuantities;
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
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);
  
  const handleRangeChange = (code) => {
    const isSelected = selectedCodes.includes(code);
    const newCodes = isSelected
      ? selectedCodes.filter((c) => c !== code)
      : [...selectedCodes, code];
    onFilterChange('quantities', newCodes);
    // Отправляем цель (не важно, выбор или снятие)
    const goal = quantityGoals[code];
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
          {quantityRanges.map((range) => (
            <label key={range.code} className="catalog__filter-option" htmlFor={`quantity-${range.code}`}>
              <input
                type="checkbox"
                id={`quantity-${range.code}`}
                name="quantity"
                value={range.code}
                checked={selectedCodes.includes(range.code)}
                onChange={() => handleRangeChange(range.code)}
              />
              <span className="catalog__filter-option-checkmark"></span>
              <span className="catalog__filter-option-text">{range.label}</span>
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