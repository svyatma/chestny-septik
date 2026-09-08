import './Catalog.scss';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useMemo, useState } from 'react';
import stations from '../../data/stationsData.json';
import CatalogFilter from '../CatalogFilter/CatalogFilter.jsx';
import CatalogCard from '../CatalogCard/CatalogCard.jsx';
import CatalogPagination from '../CatalogPagination/CatalogPagination.jsx';
import useCatalogLayout from '../../hooks/useCatalogLayout';
import Section from "../Section/Section.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";

function Catalog({
                   goalPrefix = '',
                   initialQuantityValues = null,
                   initialBrands = null,
                   sectionName = 'Станции биологической очистки',
                   sectionSubName,
                 }) {
  const isBrandsLocked = Array.isArray(initialBrands) && initialBrands.length > 0;
  const isQuantitiesLocked = Array.isArray(initialQuantityValues) && initialQuantityValues.length > 0;
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [userInteracted, setUserInteracted] = useState(false);
  
  const { cardsPerRow, rowsPerPage } = useCatalogLayout();
  const ITEMS_PER_PAGE = cardsPerRow * rowsPerPage;
  
  const brandParam = searchParams.get('brand') || '';
  const usersParam = searchParams.get('users') || '';
  
  
  
  const selectedBrands = useMemo(() => {
    // Если бренды зафиксированы, всегда возвращаем initialBrands
    if (isBrandsLocked) return initialBrands;
    
    if (brandParam) {
      return brandParam.split(',');
    }
    if (!userInteracted && initialBrands && initialBrands.length > 0) {
      return initialBrands;
    }
    return [];
  }, [brandParam, initialBrands, userInteracted, isBrandsLocked]);
  
  const selectedQuantityValues = useMemo(() => {
    // Если количества заблокированы, всегда возвращаем initialQuantityValues
    if (isQuantitiesLocked) return initialQuantityValues;
    
    if (userInteracted) {
      return usersParam ? usersParam.split(',').map(Number) : [];
    }
    if (usersParam) {
      return usersParam.split(',').map(Number);
    }
    return initialQuantityValues || [];
  }, [usersParam, initialQuantityValues, userInteracted, isQuantitiesLocked]);
  
  const mappedQuantityValues = selectedQuantityValues.map((value) => {
    return value === 2 ? 3 : value;
  });
  
  const pageFromUrl = parseInt(searchParams.get('page'), 10);
  const currentPage = Number.isNaN(pageFromUrl) || pageFromUrl < 1 ? 1 : pageFromUrl;
  
  const filteredStations = useMemo(() => {
    let result = stations;
    if (selectedBrands.length > 0) {
      result = result.filter((station) => selectedBrands.includes(station.brand));
    }
    if (mappedQuantityValues.length > 0) {
      result = result.filter((station) => {
        const quantityNumber = parseInt(station.specs.quantity, 10);
        return mappedQuantityValues.includes(quantityNumber);
      });
    }
    return result;
  }, [selectedBrands, mappedQuantityValues]);
  
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
      // Если бренды зафиксированы, не удаляем параметр brand,
      // чтобы при перезагрузке они сохранились (не обязательно, но чисто)
      if (!isBrandsLocked) {
        newParams.delete('brand');
      }
      newParams.delete('users');
      updateParams(newParams, 1);
      return newParams;
    });
    scrollToCatalog();
  };
  
  return (
    <Section id="catalog" isMax>
      <div className="container">
        <SectionTitle>
          <span>{sectionName}</span> {sectionSubName}
        </SectionTitle>
      </div>
      <div className="catalog" id="catalogList">
        <CatalogFilter
          selectedBrands={selectedBrands}
          selectedQuantities={selectedQuantityValues}
          onFilterChange={handleFilterChange}
          onReset={resetFilters}
          hideBrands={isBrandsLocked}
          hideQuantities={isQuantitiesLocked}
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
    </Section>
  );
}

export default Catalog;