import { useNavigate, useLocation } from 'react-router-dom';

export function useGoToSection() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const goToSection = (id) => {
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };
  
  return goToSection;
}