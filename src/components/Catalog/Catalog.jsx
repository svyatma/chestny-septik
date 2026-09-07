import './Catalog.scss';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useMemo, useState } from 'react';
import stations from '../../data/stationsData.json';
import CatalogFilter from '../CatalogFilter/CatalogFilter.jsx';
import CatalogCard from '../CatalogCard/CatalogCard.jsx';
import CatalogPagination from '../CatalogPagination/CatalogPagination.jsx';
import useCatalogLayout from '../../hooks/useCatalogLayout';

function Catalog({ goalPrefix = '', initialQuantityValues = null, initialBrands = null }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userInteracted, setUserInteracted] = useState(false);
  
  const { cardsPerRow, rowsPerPage } = useCatalogLayout();
  const ITEMS_PER_PAGE = cardsPerRow * rowsPerPage;
  
  const brandParam = searchParams.get('brand') || '';
  const usersParam = searchParams.get('users') || '';
  
  // Выбранные бренды: приоритет URL, затем initialBrands (до первого взаимодействия)
  const selectedBrands = useMemo(() => {
    if (brandParam) {
      return brandParam.split(',');
    }
    if (!userInteracted && initialBrands && initialBrands.length > 0) {
      return initialBrands;
    }
    return [];
  }, [brandParam, initialBrands, userInteracted]);
  
  // Выбранные числа количества человек (массив чисел)
  const selectedQuantityValues = useMemo(() => {
    if (userInteracted) {
      return usersParam ? usersParam.split(',').map(Number) : [];
    }
    if (usersParam) {
      return usersParam.split(',').map(Number);
    }
    return initialQuantityValues || [];
  }, [usersParam, initialQuantityValues, userInteracted]);
  
  const pageFromUrl = parseInt(searchParams.get('page'), 10);
  const currentPage = Number.isNaN(pageFromUrl) || pageFromUrl < 1 ? 1 : pageFromUrl;
  
  const filteredStations = useMemo(() => {
    let result = stations;
    if (selectedBrands.length > 0) {
      result = result.filter((station) => selectedBrands.includes(station.brand));
    }
    if (selectedQuantityValues.length > 0) {
      result = result.filter((station) => {
        const quantityNumber = parseInt(station.specs.quantity, 10);
        return selectedQuantityValues.includes(quantityNumber);
      });
    }
    return result;
  }, [selectedBrands, selectedQuantityValues]);
  
  const totalPages = Math.ceil(filteredStations.length / ITEMS_PER_PAGE);
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const currentStations = filteredStations.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  const scrollToCatalog = () => {
    const el = document.getElementById('catalogList');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    if (brandParam || usersParam || safeCurrentPage > 1) {
      scrollToCatalog();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  const prevPageRef = useRef(safeCurrentPage);
  useEffect(() => {
    if (prevPageRef.current !== safeCurrentPage) {
      scrollToCatalog();
      prevPageRef.current = safeCurrentPage;
    }
  }, [safeCurrentPage]);
  
  const updateParams = (newParams, page) => {
    if (page > 1) {
      newParams.set('page', page.toString());
    } else {
      newParams.delete('page');
    }
    return newParams;
  };
  
  const handlePageChange = (pageNumber) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      updateParams(newParams, pageNumber);
      return newParams;
    });
    scrollToCatalog();
  };
  
  const handleFilterChange = (filterType, newValues) => {
    setUserInteracted(true);
    
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      
      if (filterType === 'brands') {
        if (newValues.length > 0) {
          newParams.set('brand', newValues.join(','));
        } else {
          newParams.delete('brand');
        }
      } else if (filterType === 'quantities') {
        if (newValues.length > 0) {
          newParams.set('users', newValues.join(','));
        } else {
          newParams.delete('users');
        }
      }
      
      updateParams(newParams, 1);
      return newParams;
    });
    scrollToCatalog();
  };
  
  const resetFilters = () => {
    setUserInteracted(true);
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.delete('brand');
      newParams.delete('users');
      updateParams(newParams, 1);
      return newParams;
    });
    scrollToCatalog();
  };
  
  return (
    <div className="catalog" id="catalogList">
      <CatalogFilter
        selectedBrands={selectedBrands}
        selectedQuantities={selectedQuantityValues}
        onFilterChange={handleFilterChange}
        onReset={resetFilters}
      />
      <div className="catalog__body">
        {currentStations.map((station, index) => (
          <CatalogCard
            key={station.id}
            product={station}
            index={index}
            goalPrefix={goalPrefix}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <CatalogPagination
          currentPage={safeCurrentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default Catalog;