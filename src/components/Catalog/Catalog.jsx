import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useMemo } from 'react';
import './Catalog.scss';
import stations from '../../data/stations.json';
import CatalogFilter, { getQuantitiesByCodes } from '../CatalogFilter/CatalogFilter.jsx';
import CatalogCard from '../CatalogCard/CatalogCard.jsx';
import CatalogPagination from '../CatalogPagination/CatalogPagination.jsx';
import useCatalogLayout from '../../hooks/useCatalogLayout';

function Catalog({ goalPrefix = '' }) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const { cardsPerRow, rowsPerPage } = useCatalogLayout();
  const ITEMS_PER_PAGE = cardsPerRow * rowsPerPage;
  
  const brandParam = searchParams.get('brand') || '';
  const selectedBrands = brandParam ? brandParam.split(',') : [];
  
  const usersParam = searchParams.get('users') || '';
  const selectedQuantityCodes = usersParam ? usersParam.split(',') : [];
  
  const selectedQuantities = useMemo(
    () => getQuantitiesByCodes(selectedQuantityCodes),
    [selectedQuantityCodes]
  );
  
  const pageFromUrl = parseInt(searchParams.get('page'), 10);
  const currentPage = Number.isNaN(pageFromUrl) || pageFromUrl < 1 ? 1 : pageFromUrl;
  
  const filteredStations = useMemo(() => {
    let result = stations;
    if (selectedBrands.length > 0) {
      result = result.filter((station) => selectedBrands.includes(station.brand));
    }
    if (selectedQuantities.length > 0) {
      result = result.filter((station) => selectedQuantities.includes(station.specs.quantity));
    }
    return result;
  }, [selectedBrands, selectedQuantities]);
  
  const totalPages = Math.ceil(filteredStations.length / ITEMS_PER_PAGE);
  const safeCurrentPage = Math.min(currentPage, totalPages || 1);
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const currentStations = filteredStations.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  const scrollToCatalog = () => {
    const el = document.getElementById('catalogList');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    if (safeCurrentPage > 1 || selectedBrands.length > 0 || selectedQuantityCodes.length > 0) {
      scrollToCatalog();
    }
  }, []);
  
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
        selectedQuantities={selectedQuantityCodes}
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