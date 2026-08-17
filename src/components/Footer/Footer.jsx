import './Footer.scss';
import Container from '../Container/Container.jsx';
import Logo from '../Logo/Logo.jsx';
import Button from '../Button/Button.jsx';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToSectionInstant = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  };
  
  const goToSection = (id) => {
    if (location.pathname === '/') {
      scrollToSectionInstant(id);
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };
  
  return (
    <footer className="footer" id="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__main">
            <Link
              className="footer__logo logo"
              to="/"
              aria-label="На главную"
            >
              <Logo
                className="footer__logo"
                alt="Логотип в подвале сайта"
              />
            </Link>
            
            <nav className="footer__menu">
              <h3 className="footer__menu-head">Меню</h3>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <Button
                    variant="footer-link"
                    to="/catalog"
                    ymGoal="Footer_Menu_Stations"
                  >
                    Станции
                  </Button>
                </li>
                <li className="footer__menu-item">
                  <Button
                    variant="footer-link"
                    onClick={() => goToSection('faq')}
                    ymGoal="Footer_Menu_FAQ"
                  >
                    FAQ
                  </Button>
                </li>
              </ul>
            </nav>
            
            <nav className="footer__menu">
              <h3 className="footer__menu-head">Контакты</h3>
              <ul className="footer__menu-list">
                <li className="footer__menu-item">
                  <Button
                    variant="footer-link"
                    to="tel:+78129204660"
                    ymGoal="Footer_Menu_Phone"
                  >
                    +7 812 920 46 60
                  </Button>
                </li>
                <li className="footer__menu-item">
                  <Button
                    variant="footer-link"
                    to="tg://resolve?domain=ChestnySeptik"
                    ymGoal="Footer_Menu_Telegram"
                  >
                    Телеграм
                  </Button>
                </li>
                <li className="footer__menu-item">
                  <Button
                    variant="footer-link"
                    to="whatsapp://send?phone=79119204660"
                    ymGoal="Footer_Menu_WhatsApp"
                  >
                    WhatsApp
                  </Button>
                </li>
              </ul>
            </nav>
            
            <Button
              variant="tertiary"
              onClick={() => goToSection('calculator')}
              ymGoal="Footer_Podbor"
            >
              Подобрать станцию
            </Button>
          </div>
          
          <div className="footer__extra">
            <div className="footer__oferta">
              Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 (п. 2) Гражданского кодекса Российской Федерации
            </div>
            <div className="footer__policy">
              <Link
                className="footer__policy-link"
                to="/politika-obrabotki-dannyh"
              >
                Политика обработки персональных данных
              </Link>
              <Link
                className="footer__policy-link"
                to="/politika-cookies"
              >
                Политика использования cookies
              </Link>
            </div>
            <div className="footer__copyright">
              © 2026 Честный септик
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;