import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import './Header.scss';
import Logo from '../Logo/Logo.jsx';
import Button from '../Button/Button.jsx';
import Container from '../Container/Container.jsx';
import SeptikDlyaChastnogoDoma from "../../pages/SeptikDlyaChastnogoDoma/SeptikDlyaChastnogoDoma.jsx";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openSubSubmenu, setOpenSubSubmenu] = useState(null); // ← третий уровень
  const headerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Закрытие меню при ресайзе на десктоп
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setIsMenuOpen(false);
        setOpenSubmenu(null);
        setOpenSubSubmenu(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Закрытие по клику вне хедера
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setOpenSubmenu(null);
        setOpenSubSubmenu(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);
  
  // Мгновенная прокрутка к секции
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
  
  // Переход в каталог с фильтром по бренду
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
  
  const handleUsersClick = (usersValue) => {
    closeMenu();
    if (location.pathname === '/septik-na-3-cheloveka') {
      const newParams = new URLSearchParams();
      newParams.set('users', usersValue);
      setSearchParams(newParams);
    } else {
      navigate(`/septik-na-3-cheloveka?users=${encodeURIComponent(usersValue)}`, { });
    }
  };
  
  const handleAllStationsClick = () => {
    closeMenu();
    navigate('/catalog');
  };
  
  const handleSeptikFor2PeopleClick = () => {
    closeMenu();
    navigate('/septik-na-2-cheloveka');
  };
  
  const handleSeptikFor3PeopleClick = () => {
    closeMenu();
    navigate('/septik-na-3-cheloveka');
  };
  
  const handleSeptikDlyaDachiClick = () => {
    closeMenu();
    navigate('/septik-dlya-dachi');
  };
  
  const handleSeptikDlyaChastnogoDomaClick = () => {
    closeMenu();
    navigate('/septik-dlya-chastnogo-doma');
  };
  
  const handleSeptikFor4PeopleClick = () => {
    closeMenu();
    navigate('/septik-na-4-cheloveka');
  };
  
  const handleBurgerClick = () => {
    setIsMenuOpen((prev) => !prev);
    if (isMenuOpen) {
      setOpenSubmenu(null);
      setOpenSubSubmenu(null);
    }
    if (typeof window.ym === 'function') {
      window.ym(110089865, 'reachGoal', 'Header_OpenMenu');
    }
  };
  
  const closeMenu = () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setIsMenuOpen(false);
      setOpenSubmenu(null);
      setOpenSubSubmenu(null);
    }
  };
  
  const handleSubmenuToggle = (menuKey) => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setOpenSubmenu((prev) => (prev === menuKey ? null : menuKey));
      setOpenSubSubmenu(null);
    }
  };
  
  const handleSubSubmenuToggle = (subKey) => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setOpenSubSubmenu((prev) => (prev === subKey ? null : subKey));
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
  const isSeptikFor2People = location.pathname === '/septik-na-2-cheloveka';
  const isSeptikFor3People = location.pathname === '/septik-na-3-cheloveka';
  const isSeptikFor4People = location.pathname === '/septik-na-4-cheloveka';
  
  const isSeptikDlyaDachi = location.pathname === '/septik-dlya-dachi';
  const isSeptikDlyaChastnogoDoma = location.pathname === '/septik-dlya-chastnogo-doma';
  
  const isSeptikiEvrobion = location.pathname === '/septiki-evrobion';
  const isSeptikiTopas = location.pathname === '/septiki-topas';
  
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
              <Logo className="header__logo" alt="Логотип в шапке сайта" />
            </Link>
            <nav className={`header__menu ${isMenuOpen ? 'is-open' : ''}`}>
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <Button
                    variant="header-link"
                    to="/"
                    onClick={handleLogoClick}
                    ymGoal="Header_Menu_Home"
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
                    ymGoal="Header_Menu_Stations"
                  >
                    Станции
                  </Button>
                  <ul className="header__submenu">
                    <li className="header__submenu-item">
                      <Button
                        variant={isCatalogPage ? 'header-sublink-icon-active' : 'header-sublink-icon'}
                        to={isCatalogPage ? undefined : "/catalog"}
                        onClick={isCatalogPage ? undefined : closeMenu}
                        ymGoal={isCatalogPage ? undefined : 'Header_Submenu_AllStations'}
                      >
                        Полный каталог
                      </Button>
                    </li>
                    <li
                      className={`header__submenu-item has-subsubmenu ${
                        openSubSubmenu === 'manufacturers' ? 'is-subsubmenu-open' : ''
                      }`}
                    >
                      <Button
                        variant="header-sublink"
                        onClick={() => handleSubSubmenuToggle('manufacturers')}
                        aria-haspopup="true"
                        ymGoal="Header_Submenu_Brands"
                      >
                        Производители
                      </Button>
                      <ul className="header__subsubmenu">
                        <li className="header__subsubmenu-item">
                          <Button
                            variant={isSeptikiEvrobion ? 'header-sublink-icon-active' : 'header-sublink-icon'}
                            to={isSeptikiEvrobion ? undefined : "/septiki-evrobion"}
                            onClick={isSeptikiEvrobion ? undefined : closeMenu}
                            ymGoal={isSeptikiEvrobion ? undefined : 'Header_Subsubmenu_Evrobion'}
                          >
                            Евробион
                          </Button>
                        </li>
                        <li className="header__subsubmenu-item">
                          <Button
                            variant={isSeptikiTopas ? 'header-sublink-icon-active' : 'header-sublink-icon'}
                            to={isSeptikiTopas ? undefined : "/septiki-topas"}
                            onClick={isSeptikiTopas ? undefined : closeMenu}
                            ymGoal={isSeptikiTopas ? undefined : 'Header_Subsubmenu_Topas'}
                          >
                            Топас
                          </Button>
                        </li>
                        <li className="header__subsubmenu-item">
                          <Button
                            variant="header-sublink-icon"
                            onClick={() => handleBrandClick('АСТРА')}
                            ymGoal="Header_Subsubmenu_Astra"
                          >
                            Астра
                          </Button>
                        </li>
                        <li className="header__subsubmenu-item">
                          <Button
                            variant="header-sublink-icon"
                            onClick={() => handleBrandClick('ЕВРОЛОС')}
                            ymGoal="Header_Subsubmenu_Evrolos"
                          >
                            Евролос
                          </Button>
                        </li>
                        <li className="header__subsubmenu-item">
                          <Button
                            variant="header-sublink-icon"
                            onClick={() => handleBrandClick('ЗОРДЕ')}
                            ymGoal="Header_Subsubmenu_Zorde"
                          >
                            Зорде
                          </Button>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={`header__submenu-item has-subsubmenu ${
                        openSubSubmenu === 'users' ? 'is-subsubmenu-open' : ''
                      }`}
                    >
                      <Button
                        variant="header-sublink"
                        onClick={() => handleSubSubmenuToggle('users')}
                        aria-haspopup="true"
                        ymGoal="Header_Submenu_ForUsers"
                      >
                        По пользователям
                      </Button>
                      <ul className="header__subsubmenu">
                        {/*<li className="header__subsubmenu-item">*/}
                        {/*  <Button*/}
                        {/*    variant={isSeptikFor2People ? 'header-sublink-icon-active' : 'header-sublink-icon'}*/}
                        {/*    onClick={isSeptikFor2People ? undefined : handleSeptikFor2PeopleClick}*/}
                        {/*    ymGoal={isSeptikFor2People ? undefined : 'Header_Subsubmenu_ForUsers_3People'}*/}
                        {/*  >*/}
                        {/*    На 2 человека*/}
                        {/*  </Button>*/}
                        {/*</li>*/}
                        <li className="header__subsubmenu-item">
                          <Button
                            variant={isSeptikFor3People ? 'header-sublink-icon-active' : 'header-sublink-icon'}
                            to={isSeptikFor3People ? undefined : "/septik-na-3-cheloveka"}
                            onClick={isSeptikFor3People ? undefined : closeMenu}
                            ymGoal={isSeptikFor3People ? undefined : 'Header_Subsubmenu_ForUsers_3People'}
                          >
                            На 3 человека
                          </Button>
                        </li>
                        {/*<li className="header__subsubmenu-item">*/}
                        {/*  <Button*/}
                        {/*    variant={isSeptikFor4People ? 'header-sublink-icon-active' : 'header-sublink-icon'}*/}
                        {/*    onClick={isSeptikFor4People ? undefined : handleSeptikFor4PeopleClick}*/}
                        {/*    ymGoal={isSeptikFor4People ? undefined : 'Header_Subsubmenu_ForUsers_4People'}*/}
                        {/*  >*/}
                        {/*    На 4 человека*/}
                        {/*  </Button>*/}
                        {/*</li>*/}
                      </ul>
                    </li>
                    <li
                      className={`header__submenu-item has-subsubmenu ${
                        openSubSubmenu === 'purpose' ? 'is-subsubmenu-open' : ''
                      }`}
                    >
                      <Button
                        variant="header-sublink"
                        onClick={() => handleSubSubmenuToggle('purpose')}
                        aria-haspopup="true"
                        ymGoal="Header_Submenu_Purpose"
                      >
                        По назначению
                      </Button>
                      <ul className="header__subsubmenu">
                        <li className="header__subsubmenu-item">
                          <Button
                            variant={isSeptikDlyaChastnogoDoma ? 'header-sublink-icon-active' : 'header-sublink-icon'}
                            to={isSeptikDlyaChastnogoDoma ? undefined : "/septik-dlya-chastnogo-doma"}
                            onClick={isSeptikDlyaChastnogoDoma ? undefined : closeMenu}
                            ymGoal={isSeptikDlyaChastnogoDoma ? undefined : 'Header_Subsubmenu_Purpose_DlyaChastnogoDoma'}
                          >
                            Для частного дома
                          </Button>
                        </li>
                        <li className="header__subsubmenu-item">
                          <Button
                            variant={isSeptikDlyaDachi ? 'header-sublink-icon-active' : 'header-sublink-icon'}
                            to={isSeptikDlyaDachi ? undefined : "/septik-dlya-dachi"}
                            onClick={isSeptikDlyaDachi ? undefined : closeMenu}
                            ymGoal={isSeptikDlyaDachi ? undefined : 'Header_Subsubmenu_Purpose_DlyaDachi'}
                          >
                            Для дачи
                          </Button>
                        </li>
                      </ul>
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
                    ymGoal="Header_Menu_Services"
                  >
                    Услуги
                  </Button>
                  <ul className="header__submenu">
                    <li className="header__submenu-item">
                      <Button
                        variant="header-sublink"
                        onClick={() => goToSection('calculator')}
                        ymGoal="Header_Submenu_Podbor"
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
                    ymGoal="Header_Menu_About"
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
                <li className="header__menu-item visible-mobile">
                  <a href="tel:+7 812 920-46-60" className="header__phone-mobile">
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
                    ymGoal="Header_EngineerRequest"
                  >
                    Вызвать инженера
                  </Button>
                </li>
              </ul>
            </nav>
            <div className="header__actions">
              <a href="tel:+7 812 920-46-60" className="header__phone">
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
                href="tel:+7 812 920-46-60"
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