import './CatalogPagination.scss';

function CatalogPagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return null;
  }
  
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);
  
  if (totalPages >= 5) {
    if (endPage - startPage + 1 < 5) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + 4);
      }
      else if (endPage === totalPages) {
        startPage = Math.max(1, endPage - 4);
      }
    }
  }
  
  const visiblePages = [];
  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }
  
  const goToPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  
  const goToNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  
  return (
    <div className="catalog__pagination">
      <button
        className="catalog__pagination-button left"
        aria-label="Предыдущая страница"
        onClick={goToPrevious}
        disabled={currentPage === 1}
      />
      
      <div className="catalog__pagination-body">
        {visiblePages.map((number) => (
          <button
            key={number}
            className={`catalog__pagination-page-number ${
              number === currentPage ? 'is-active' : ''
            }`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        ))}
      </div>
      
      <button
        className="catalog__pagination-button right"
        aria-label="Следующая страница"
        onClick={goToNext}
        disabled={currentPage === totalPages}
      />
    </div>
  );
}

export default CatalogPagination;