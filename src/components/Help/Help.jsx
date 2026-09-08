import './Help.scss';
import Section from "../Section/Section.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import Logo from "../Logo/Logo.jsx";
import Callout from "../Callout/Callout.jsx";
import {useGoToSection} from "../../hooks/useGoToSection.js";

function Help() {
  
  const goToSection = useGoToSection();
  
  return (
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
  )
}

export default Help;