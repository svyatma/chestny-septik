import { Helmet } from 'react-helmet-async';
import Catalog from '../../components/Catalog/Catalog.jsx';

function CatalogPage() {
  
  return (
    <>
      <Helmet>
        <title>Каталог автономных септиков — станций биологической очистки для частного дома | Честный септик</title>
        <meta name="description" content="+7 (812) 920-46-60 ✔ Выбирайте свой автономный септик для дома, а мы установим по цене производителя! Звоните!" />
      </Helmet>
      
      <Catalog
        sectionName="Станции биологической очистки"
        goalPrefix="catalog_"
      />
    </>
  );
}

export default CatalogPage;