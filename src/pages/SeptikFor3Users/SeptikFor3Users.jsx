import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section/Section.jsx';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import Logo from "../../components/Logo/Logo.jsx";
import {useGoToSection} from "../../hooks/useGoToSection.js";
import Faq from "../../components/Faq/Faq.jsx";
import Callout from "../../components/Callout/Callout.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import MapPoint from "../../components/MapPoint/MapPoint.jsx";
import Button from "../../components/Button/Button.jsx";
import PodborHeroImage from "../../assets/images/PodborHeroImage.png";
import HeroInfo from "../../components/HeroInfo/HeroInfo.jsx";
import Catalog from "../../components/Catalog/Catalog.jsx";

function SeptikFor3Users() {
  const goToSection = useGoToSection();
  
  return (
    <>
      <Helmet>
        <title>Купить автономный септик на 3 человека для частного дома и дачи по цене завода | Честный септик</title>
        <meta name="description" content="+7 (812) 920-46-60 ✔ Выбирайте свой автономный септик для дома, а мы установим по цене производителя! Звоните!" />
      </Helmet>
      
      <Hero>
        <div className="hero__septik-for">
          <h1 className="hero__septik-for-title">
            <span>Септики на 3 человека</span> автономные и без откачки
          </h1>
          <MapPoint variant="primary">
            Санкт-Петербург и ЛО
          </MapPoint>
          <Callout
            className="hero__callout"
            // info="Подберем подходящую станцию для&nbsp;загородного дома, сделаем смету за&nbsp;1 день, а&nbsp;установим на&nbsp;следующий ✔"
            info="Подбираем и устанавливаем подходящие автономные септики — станции биологической очистки для загородного дома по цене производителя ✔"
          />
          <Callout
            variant="septik-for"
            // info="Подберем подходящую станцию для&nbsp;загородного дома, сделаем смету за&nbsp;1 день, а&nbsp;установим на&nbsp;следующий ✔"
            info="На этой странице Вы сможете выбрать свой автономный септик, который рассчитан до 3-х пользователей"
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
      <Section id="catalog">
        <div className="container">
          <SectionTitle>
            <span>Каталог автономных септиков на 3 человека</span>
          </SectionTitle>
        </div>
        <Catalog
          initialQuantityValues={[3]}
        />
      </Section>
      <Section>
        <SectionTitle variant="column center">
          <span>Сложно?</span> Понимаем, давайте поможем
        </SectionTitle>
        <div className="help">
          <Logo />
          <div className="help__callouts">
            <Callout
              variant="white ai-start"
              info="Расскажите эксперту о Вашем участке и доме, подберем подходящую станцию"
              phone="+7 812 920-46-60"
              onPhoneClick={() => {
                if (typeof window.ym === 'function') {
                  window.ym(110089865, 'reachGoal', 'Help_Callout_Phone');
                }
              }}
              messengers={[
                {
                  icon: 'telegram',
                  url: 'tg://resolve?domain=ChestnySeptik',
                  ymGoal: 'Help_Callout_Telegram'
                },
                {
                  icon: 'whatsapp',
                  url: 'whatsapp://send?phone=79119204660',
                  ymGoal: 'Help_Callout_WhatsApp'
                },
              ]}
            />
            <Callout
              variant="white ai-start"
              info="Или заполните данные в калькуляторе и эксперт сам свяжется с Вами"
              actions={[
                {
                  variant: 'primary',
                  children: 'К калькулятору',
                  onClick: () => goToSection('calculator'),
                  ymGoal: 'Help_Callout_Calculator'
                }
              ]}
            />
          </div>
        </div>
      </Section>
      <Section id="faq">
        <SectionTitle
          variant="column"
        >
          <span>Часто задаваемые вопросы</span> об автономных септиках на 3 человека
        </SectionTitle>
        <Faq />
      </Section>
    </>
  );
}

export default SeptikFor3Users;