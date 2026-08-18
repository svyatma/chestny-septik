import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section/Section.jsx';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import Logo from "../../components/Logo/Logo.jsx";
import {useGoToSection} from "../../hooks/useGoToSection.js";
import Faq from "../../components/Faq/Faq.jsx";
import Callout from "../../components/Callout/Callout.jsx";

function SeptikFor3People() {
  const goToSection = useGoToSection();
  
  return (
    <>
      <Helmet>
        <title>Купить автономный септик на 3 человека для частного дома и дачи по цене завода | Честный септик</title>
        <meta name="description" content="+7 (812) 920-46-60 ✔ Выбирайте свой автономный септик для дома, а мы установим по цене производителя! Звоните!" />
      </Helmet>
      
      <Section id="faq">
        <SectionTitle>
          <span>Часто задаваемые вопросы</span> об автономных септиках на 3 человека
        </SectionTitle>
        <Faq />
      </Section>
    </>
  );
}

export default SeptikFor3People;