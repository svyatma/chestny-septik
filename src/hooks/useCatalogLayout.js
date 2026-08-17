import { useState, useEffect } from 'react';

const breakpoints = [
  { query: '(max-width: 1050px)', cardsPerRow: 1, rowsPerPage: 3 },
  { query: '(max-width: 1370px)', cardsPerRow: 2, rowsPerPage: 3 },
  { query: '(max-width: 1750px)', cardsPerRow: 3, rowsPerPage: 3 },
  { query: '(min-width: 1751px)', cardsPerRow: 4, rowsPerPage: 3 },
];

function getLayout() {
  for (const bp of breakpoints) {
    if (window.matchMedia(bp.query).matches) {
      return { cardsPerRow: bp.cardsPerRow, rowsPerPage: bp.rowsPerPage };
    }
  }
  return { cardsPerRow: 4, rowsPerPage: 4 };
}

function useCatalogLayout() {
  const [layout, setLayout] = useState(getLayout);
  
  useEffect(() => {
    const handler = () => setLayout(getLayout());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  
  return layout;
}

export default useCatalogLayout;