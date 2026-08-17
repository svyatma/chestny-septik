import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Section from '../../components/Section/Section.jsx';
import Container from '../../components/Container/Container.jsx';
import './NotFound.scss';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Ошибка 404 | Честный септик</title>
        <meta name="description" content="Страница не найдена. Вернитесь на главную." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Section>
        <Container>
          <div className="error-404__body">
            <h1 className="error-404__head">
              Упс!
            </h1>
            <div className="error-404__text">
              Такой страницы не существует
            </div>
            <Link
              to="/"
              className="button button--primary"
            >
              На главную
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default NotFound;