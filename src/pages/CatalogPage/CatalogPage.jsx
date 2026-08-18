import { Helmet } from 'react-helmet-async';
import Catalog from '../../components/Catalog/Catalog.jsx';
import Section from '../../components/Section/Section.jsx';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import Logo from "../../components/Logo/Logo.jsx";
import Callout from "../../components/Callout/Callout.jsx";
import {useGoToSection} from "../../hooks/useGoToSection.js";

function CatalogPage() {
  
  const goToSection = useGoToSection();
  
  return (
    <>
      <Helmet>
        <title>Каталог автономных септиков — станций биологической очистки для частного дома | Честный септик</title>
        <meta name="description" content="+7 (812) 920-46-60 ✔ Выбирайте свой автономный септик для дома, а мы установим по цене производителя! Звоните!" />
      </Helmet>
      
      <Section id="catalog">
        <div className="container">
          <SectionTitle>
            <span>Станции биологической очистки</span>
          </SectionTitle>
        </div>
        <Catalog
          goalPrefix="catalog_"
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
    </>
  );
}

export default CatalogPage;