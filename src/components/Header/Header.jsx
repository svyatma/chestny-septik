import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import './Header.scss';
import Logo from '../Logo/Logo.jsx';
import Button from '../Button/Button.jsx';
import Container from '../Container/Container.jsx';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const headerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setIsMenuOpen(false);
        setOpenSubmenu(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setOpenSubmenu(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);
  
  const scrollToSectionInstant = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };
  
  const goToSection = (id) => {
    closeMenu();
    if (location.pathname === '/') {
      scrollToSectionInstant(id);
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };
  
  const handleBrandClick = (brandValue) => {
    closeMenu();
    if (location.pathname === '/catalog') {
      const newParams = new URLSearchParams();
      newParams.set('brand', brandValue);
      setSearchParams(newParams);
      scrollToSectionInstant('catalogList');
    } else {
      navigate(`/catalog?brand=${encodeURIComponent(brandValue)}`, {
        state: { scrollTo: 'catalogList' },
      });
    }
  };
  
  const handleAllStationsClick = () => {
    closeMenu();
    navigate('/catalog');
  };
  
  const handleBurgerClick = () => {
    setIsMenuOpen((prev) => !prev);
    if (isMenuOpen) setOpenSubmenu(null);
    if (typeof window.ym === 'function') {
      window.ym(110089865, 'reachGoal', 'Header_OpenMenu');
    }
  };
  
  const closeMenu = () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setIsMenuOpen(false);
      setOpenSubmenu(null);
    }
  };
  
  const handleSubmenuToggle = (menuKey) => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setOpenSubmenu((prev) => (prev === menuKey ? null : menuKey));
    }
  };
  
  const handleLogoClick = (event) => {
    event.preventDefault();
    closeMenu();
    
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      navigate('/');
    }
  };
  
  const isCatalogPage = location.pathname === '/catalog';
  
  return (
    <header
      ref={headerRef}
      className={`header ${isMenuOpen ? 'is-open' : ''}`}
    >
      <div className="header__body">
        <Container variant="max">
          <div className="header__body-inner">
            <Link
              className="header__logo logo"
              to="/"
              aria-label="На главную"
              onClick={handleLogoClick}
            >
              <Logo
                className="header__logo"
                alt="Логотип в шапке сайта"
              />
            </Link>
            <nav className={`header__menu ${isMenuOpen ? 'is-open' : ''}`}>
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <Button
                    variant="header-link"
                    to="/"
                    onClick={handleLogoClick}
                  >
                    Главная
                  </Button>
                </li>
                <li
                  className={`header__menu-item has-submenu ${
                    openSubmenu === 'stations' ? 'is-submenu-open' : ''
                  }`}
                >
                  <Button
                    variant="header-link"
                    onClick={() => handleSubmenuToggle('stations')}
                    aria-haspopup="true"
                    aria-expanded={openSubmenu === 'stations'}
                  >
                    Станции
                  </Button>
                  <ul className="header__submenu">
                    <li className="header__submenu-item">
                      <Button
                        variant={isCatalogPage ? 'header-sublink-icon-active' : 'header-sublink-icon'}
                        onClick={isCatalogPage ? undefined : handleAllStationsClick}
                        ymGoal={isCatalogPage ? undefined : 'Header_Submenu_AllStations'}
                      >
                        Полный каталог
                      </Button>
                    </li>
                    <li className="header__submenu-item">
                      <Button
                        variant="header-sublink"
                        onClick={() => handleBrandClick('ЕВРОБИОН')}
                        ymGoal="Header_Submenu_Evrobion"
                      >
                        Евробион
                      </Button>
                    </li>
                    <li className="header__submenu-item">
                      <Button
                        variant="header-sublink"
                        onClick={() => handleBrandClick('ТОПАС')}
                        ymGoal="Header_Submenu_Topas"
                      >
                        Топас
                      </Button>
                    </li>
                    <li className="header__submenu-item">
                      <Button
                        variant="header-sublink"
                        onClick={() => handleBrandClick('АСТРА')}
                        ymGoal="Header_Submenu_Astra"
                      >
                        Астра
                      </Button>
                    </li>
                    <li className="header__submenu-item">
                      <Button
                        variant="header-sublink"
                        onClick={() => handleBrandClick('ЕВРОЛОС')}
                        ymGoal="Header_Submenu_Evrolos"
                      >
                        Евролос
                      </Button>
                    </li>
                    <li className="header__submenu-item">
                      <Button
                        variant="header-sublink"
                        onClick={() => handleBrandClick('ЗОРДЕ')}
                        ymGoal="Header_Submenu_Zorde"
                      >
                        Зорде
                      </Button>
                    </li>
                  </ul>
                </li>
                <li
                  className={`header__menu-item has-submenu ${
                    openSubmenu === 'services' ? 'is-submenu-open' : ''
                  }`}
                >
                  <Button
                    variant="header-link"
                    onClick={() => handleSubmenuToggle('services')}
                    aria-haspopup="true"
                    aria-expanded={openSubmenu === 'services'}
                  >
                    Услуги
                  </Button>
                  <ul className="header__submenu">
                    <li className="header__submenu-item">
                      <Button
                        variant="header-sublink"
                        onClick={() => goToSection('calculator')}
                        ymGoal="Header_Submenu_Raschet"
                      >
                        Расчет стоимости
                      </Button>
                    </li>
                    <li className="header__submenu-item">
                      <Button
                        variant="header-sublink"
                        onClick={() => goToSection('engineer-request')}
                        ymGoal="Header_Submenu_BesplatnyZamer"
                      >
                        Бесплатный замер
                      </Button>
                    </li>
                  </ul>
                </li>
                <li
                  className={`header__menu-item has-submenu ${
                    openSubmenu === 'about' ? 'is-submenu-open' : ''
                  }`}
                >
                  <Button
                    variant="header-link"
                    onClick={() => handleSubmenuToggle('about')}
                    aria-haspopup="true"
                    aria-expanded={openSubmenu === 'about'}
                  >
                    О компании
                  </Button>
                  <ul className="header__submenu">
                    <li className="header__submenu-item">
                      <Button
                        variant="header-sublink"
                        onClick={() => goToSection('footer')}
                        ymGoal="Header_Submenu_Kontakty"
                      >
                        Контакты
                      </Button>
                    </li>
                  </ul>
                </li>
                <li className="header__menu-item">
                  <Button
                    variant="header-link"
                    onClick={() => goToSection('faq')}
                    ymGoal="Header_Menu_FAQ"
                  >
                    FAQ
                  </Button>
                </li>
                <li className="header__menu-item visible-mobile">
                  <a href="tel: +7 812 920-46-60" className="header__phone-mobile">
                    +7 812 920-46-60
                  </a>
                </li>
                <li className="header__menu-item visible-mobile">
                  <Button
                    variant="header-cta"
                    onClick={() => goToSection('calculator')}
                    ymGoal="Header_Podbor"
                  >
                    Подобрать станцию
                  </Button>
                </li>
                <li className="header__menu-item visible-mobile">
                  <Button
                    variant="header-cta"
                    onClick={() => goToSection('engineer-request')}
                    ymGoal="Header_Podbor"
                  >
                    Вызвать инженера
                  </Button>
                </li>
              </ul>
            </nav>
            <div className="header__actions">
              <a href="tel: +7 812 920-46-60" className="header__phone">
                +7 812 920-46-60
              </a>
              <Button
                variant="header-cta"
                onClick={() => goToSection('calculator')}
                ymGoal="Header_Podbor"
              >
                Подобрать станцию
              </Button>
              <Button
                variant="header-cta"
                onClick={() => goToSection('engineer-request')}
                ymGoal="Header_EngineerRequest"
              >
                Вызвать инженера
              </Button>
            </div>
            <div className="header__mobile visible-mobile">
              <a
                href="tel: +7 812 920-46-60"
                className="header__mobile-phone"
                aria-label="Позвонить Честному септику"
                onClick={() => ym(110089865, 'reachGoal', 'Header_Mobile_Phone')}
              />
              <button
                className="header__mobile-menu"
                aria-label="Открыть боковое меню"
                aria-expanded={isMenuOpen}
                onClick={handleBurgerClick}
              />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Header;