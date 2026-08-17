import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.scss';

function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [appeared, setAppeared] = useState(false); // появился ли после задержки
  const [closing, setClosing] = useState(false);
  const appearTimerRef = useRef(null);
  const closeTimerRef = useRef(null);
  
  useEffect(() => {
    const isAccepted = localStorage.getItem('cookieAccepted');
    if (!isAccepted) {
      setVisible(true);
      appearTimerRef.current = setTimeout(() => {
        setAppeared(true);
      }, 500);
    }
    
    return () => {
      if (appearTimerRef.current) clearTimeout(appearTimerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    
    setClosing(true);
    
    closeTimerRef.current = setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 200);
  };
  
  if (!visible) return null;
  
  return (
    <div
      className={`popup cookie ${appeared ? 'cookie--appeared' : 'cookie--initial'} ${
        closing ? 'cookie--closing' : ''
      }`}
    >
      <div className="cookie__head">
        Этот сайт использует cookies
      </div>
      <div className="cookie__main">
        <div className="cookie__text">
          С&nbsp;помощью них мы улучшаем работу сайта, анализируем трафик и&nbsp;можем персонализировать предложения, полные условия{' '}
          <Link to="/politika-cookies" target="_blank">здесь</Link>
        </div>
        <button className="cookie__button" onClick={handleAccept}>
          ОК
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;