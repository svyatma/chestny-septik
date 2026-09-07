import './CatalogCard.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import Button from '../Button/Button.jsx';
import useReveal from '../../hooks/useReveal';
import ModalConnect from '../ModalConnect/ModalConnect.jsx';

const specsLabels = {
  quantity: 'Пользователей',
  power: 'Производительность',
  drain: 'Залповый сброс',
  size: 'ДШВ, см',
  price: 'Цена',
  priceWithInstall: 'С установкой',
};

function formatSpecValue(key, value) {
  if (value === null) return null;
  
  switch (key) {
    case 'quantity':
      return `До ${value} человек`;
    case 'power':
      return `${parseFloat(value) * 1000} л/сут`;
    case 'drain':
      return `${value} л`;
    case 'size':
      return value;
    case 'price':
      return `${value} ₽`;
    case 'priceWithInstall':
      return `${value} ₽`;
    default:
      return value;
  }
}

function CatalogCard({ product, index, goalPrefix = '' }) {
  const navigate = useNavigate();
  
  if (!product) {
    return <div className="catalog__card">Нет данных</div>;
  }
  
  const slug = product.image.split('/').pop().replace(/\.(webp|png|jpg|jpeg)$/i, '')
  
  const specsEntries = [
    ...Object.entries(product.specs).filter(
      ([key, value]) => value !== null && specsLabels[key]
    ),
    ...(product.price ? [['price', product.price]] : []),
    ...(product.priceWithInstall ? [['priceWithInstall', product.priceWithInstall]] : []),
  ];
  
  const { ref, style } = useReveal({
    delay: index * 80,
    threshold: 0.2,
    duration: 500,
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  
  const modalHead = (
    <>
      Заказать с установкой{' '}
      <span>{product.name.replace(/ /g, '\u00A0')}</span>
    </>
  );
  
  const formContext = `Заказать с установкой ${product.name}`;
  
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
    <>
      <div
        ref={ref}
        className="catalog__card"
        style={style}
      >
        
        
        <div className="catalog__card-label">{product.brand}</div>
        
        <h3 className="catalog__card-name">{product.name}</h3>
        
        <div className="catalog__card-visual">
          <img
            className="catalog__card-visual-img"
            src={product.image}
            alt={product.name}
            width={180}
            height={180}
          />
        </div>
        
        <div className="catalog__card-values">
          {specsEntries.map(([key, value]) => (
            <dl key={key} className="catalog__card-values-value">
              <dt className="catalog__card-values-value-head">
                {specsLabels[key]}
              </dt>
              <dd className="catalog__card-values-value-info">
                {formatSpecValue(key, value)}
              </dd>
            </dl>
          ))}
        </div>
        
        <div className="catalog__card-actions">
          <Button
            onClick={() => setIsModalOpen(true)}
            ymGoal="Stations_Card_FindPrice"
          >
            Заказать с установкой
          </Button>
          {/*<Button*/}
          {/*  variant="tertiary"*/}
          {/*  onClick={() => goToSection('calculator')}*/}
          {/*  ymGoal="Stations_Card_Podbor"*/}
          {/*>*/}
          {/*  Вызвать инженера*/}
          {/*</Button>*/}
          {/*<Button*/}
          {/*  variant="tertiary"*/}
          {/*  onClick={() => goToSection('calculator')}*/}
          {/*  ymGoal="Stations_Card_Podbor"*/}
          {/*>*/}
          {/*  Подобрать станцию*/}
          {/*</Button>*/}
        </div>
        <Link
          to={`/${slug}`}
          className="catalog__card-link"
          aria-label={`Перейти на страницу ${product.name}`}
          title={`Перейти на страницу ${product.name}`}
        />
      </div>
      
      <ModalConnect
        isOpen={isModalOpen}
        onClose={closeModal}
        head={modalHead}
        formContext={formContext}
        goalPrefix={goalPrefix}
      />
    </>
  );
}

export default CatalogCard;