import './Breadcrumbs.scss';
import {Link} from "react-router-dom";

const brandSlugs = {
  'ЕВРОБИОН': '/septiki-evrobion',
  'ТОПАС': '/septiki-topas',
  'АСТРА': '/septiki-astra',
  'ЕВРОЛОС': '/septiki-evrolos',
  'ЗОРДЕ': '/septiki-zorde',
};

function Breadcrumbs({ brand, stationName }) {
  
  const brandSlug = brandSlugs[brand] || '/catalog';
  
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__item-link" to="/">
            Главная
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__item-link" to="/catalog">
            Каталог
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__item-link" to={brandSlug}>
            {brand}
          </Link>
        </li>
        <li className="breadcrumbs__item" aria-current="page">
          <p className="breadcrumbs__item-link">
            {stationName}
          </p>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs;