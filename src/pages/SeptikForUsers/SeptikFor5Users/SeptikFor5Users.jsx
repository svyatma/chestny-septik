import { Helmet } from 'react-helmet-async';
import Logo from "../../../components/Logo/Logo.jsx";
import {useGoToSection} from "../../../hooks/useGoToSection.js";
import Callout from "../../../components/Callout/Callout.jsx";
import Hero from "../../../components/Hero/Hero.jsx";
import MapPoint from "../../../components/MapPoint/MapPoint.jsx";
import Button from "../../../components/Button/Button.jsx";
import PodborHeroImage from "../../../assets/images/PodborHeroImage.png";
import HeroInfo from "../../../components/HeroInfo/HeroInfo.jsx";
import Catalog from "../../../components/Catalog/Catalog.jsx";
import Help from "../../../components/Help/Help.jsx";
import {getServiceSchema} from "../../../seo/schemas.js";

function SeptikFor5Users() {
  const goToSection = useGoToSection();
  
  const serviceSchema = getServiceSchema({
    name: 'Установка септиков на 5 человек',
    serviceType: 'Монтаж автономных септиков',
    description: '+7 (812) 920-46-60 ✔ Выбирайте свой автономный септик для частного дома и дачи на 5 человек, а мы установим по цене производителя! Звоните!',
    url: 'https://chestnyseptik.ru/septik-na-2-cheloveka',
  });
  
  return (
    <>
      <Helmet>
        <title>Автономные септики на 5 человек для частного дома и дачи по цене завода | Честный септик</title>
        <meta name="description" content="+7 (812) 920-46-60 ✔ Выбирайте свой автономный септик на 5 человек для дома, а мы установим по цене производителя! Звоните!" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      
      <Hero>
        <div className="hero__septik-for">
          <h1 className="hero__septik-for-title column">
            <span>Септики на 5 человек</span> автономные и без откачки
          </h1>
          <MapPoint variant="primary">
            Санкт-Петербург и ЛО
          </MapPoint>
          <Callout
            className="hero__callout"
            info="Подбираем и устанавливаем подходящие автономные септики — станции биологической очистки для загородного дома по цене производителя ✔"
          />
          <Callout
            variant="septik-for"
            info="На этой странице Вы сможете выбрать свой автономный септик, который рассчитан до 5-и пользователей"
          />
          <div className="hero__actions">
            <Button
              variant="primary"
              ymGoal="Hero_Choise"
              scrollTo="catalog"
            >
              Выбрать свой септик
            </Button>
            <Button
              variant="secondary"
              onClick={() => goToSection('calculator')}
              ymGoal="Hero_Calculator"
            >
              Рассчитать стоимость для&nbsp;моего дома
            </Button>
          </div>
          <Logo className="hero__logo"/>
          <a href="tel: +7 812 920-46-60" className="hero__phone visible-mobile">
            +7 812 920-46-60
          </a>
          <div className="hero__septik-for-visual">
            <img
              className="hero__septik-for-img"
              src={PodborHeroImage}
              alt="Изображение станции"
              width={455}
              height={275}
            />
          </div>
          <HeroInfo
            items={[
              { head: '1 день', desc: 'Подбор + смета' },
              { head: '24 часа', desc: 'До установки' },
              { head: 'От 117 630 ₽', desc: 'Станция' },
              { head: 'От 150 630 ₽', desc: 'С установкой' },
            ]}
          />
        </div>
      </Hero>
      <Catalog
        sectionName="Каталог автономных септиков на 4 человека"
        initialQuantityValues={[5]}
      />
      <Help />
    </>
  );
}

export default SeptikFor5Users;