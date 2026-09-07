import './StationPageHero.scss';
import MapPoint from "../../../components/MapPoint/MapPoint.jsx";
import Callout from "../../../components/Callout/Callout.jsx";
import Button from "../../../components/Button/Button.jsx";
import {useGoToSection} from "../../../hooks/useGoToSection.js";
import Logo from "../../../components/Logo/Logo.jsx";
import Hero from "../../../components/Hero/Hero.jsx";

function StationPageHero({ stationName, stationImage }) {
  
  const goToSection = useGoToSection();
  
  return (
    <>
      <Hero>
        <div className="hero-station-page">
          <h1 className="hero-station-page__title">
            Автономный септик <span>{stationName}</span>
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
            info={<>
                На этой странице вы узнаете информацию о станции биологической очистки <b>{stationName}</b>
              </>}
          />
          <div className="hero__actions">
            <Button
              variant="primary"
              ymGoal="HeroStation_{stationNameYmGoal}"
              scrollTo="station-page-info"
            >
              Смотреть характеристики
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
          <div className="hero-station-page__visual">
            <img
              className="hero-station-page__visual-img"
              src={stationImage}
              alt={stationName}
              width={455}
              height={455}
            />
          </div>
        </div>
      </Hero>
    </>
  )
}

export default StationPageHero;