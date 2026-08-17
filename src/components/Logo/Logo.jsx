import { useEffect, useState } from 'react';
import logoImage from '../../assets/images/logo.svg';
import logoImageMobile from '../../assets/images/logo-mobile.svg';
import './Logo.scss';

function Logo({ className = '', alt = 'Логотип', ariaLabel }) {
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia('(max-width: 767px)').matches
  );
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return (
    <img
      className={`logo ${className}`}
      src={isMobile ? logoImageMobile : logoImage}
      width="120"
      height="43"
      alt={alt}
      aria-label={ariaLabel || alt}
    />
  );
}

export default Logo;