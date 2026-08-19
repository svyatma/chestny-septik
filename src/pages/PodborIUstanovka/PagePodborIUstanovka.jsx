import { useLocation } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import MapPoint from "../../components/MapPoint/MapPoint.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import Button from "../../components/Button/Button.jsx";
import PodborHeroImage from '../../assets/images/PodborHeroImage.png';
import Hero from "../../components/Hero/Hero.jsx";
import HeroInfo from "../../components/HeroInfo/HeroInfo.jsx";
import Callout from "../../components/Callout/Callout.jsx";
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import Calculator from "../../components/Calculator/Calculator.jsx";
import dealersImageEvrobion from "../../assets/images/dealers/evrobion.webp";
import dealersImageTopas from "../../assets/images/dealers/topas.webp";
import dealersImageAstra from "../../assets/images/dealers/astra.webp";
import dealersImageEvrolos from "../../assets/images/dealers/evrolos.webp";
import dealersImageZorde from "../../assets/images/dealers/zorde.webp";
import decisionsImageAstra from "../../assets/images/stations/astra/astra-3.webp";
import decisionsImageEvrobion from "../../assets/images/stations/evrobion/evrobion-raund-5-standart.webp";
import decisionsImageTopas from "../../assets/images/stations/topas/topas-8.webp";
import './PodborIUstanovka.scss';
import FormInput from "../../components/FormInput/FormInput.jsx";
import Agreement from "../../components/Agreement/Agreement.jsx";
import Faq from "../../components/Faq/Faq.jsx";
import ModalConnect from "../../components/ModalConnect/ModalConnect.jsx";
import { useFormHandler } from '../../hooks/useFormHandler.js';
import ModalThanks from '../../components/ModalThanks/ModalThanks.jsx';

function PodborIUstanovka() {
  
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [isEngineerThanksOpen, setIsEngineerThanksOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationContext, setConsultationContext] = useState('');
  const { handleSubmit } = useFormHandler({
    formType: 'engineer',
    goalPrefix: 'podborustanovka_',
    onSuccess: () => setIsEngineerThanksOpen(true),
  });
  
  const location = useLocation();
  
  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
      window.history.replaceState({}, '');
    }
  }, [location.state]);
  
  const handleConsultationClick = () => {
    setConsultationContext(`Запрос на консультацию`);
    setIsConsultationOpen(true);
  };
  
  return (
    <>
      <Helmet>
        <title>Установка автономных септиков — станций биологической очистки для частного дома и дачи под ключ в Санкт-Петербурге и ЛО | Честный септик</title>
        <meta name="description" content="+7 (812) 920-46-60 ✔ Экспертный подбор септиков, официальный дилер, заводские цены. Заоните!" />
        
        {location.search && (
          <link
            rel="canonical"
            href={`https://chestnyseptik.ru${location.pathname}`}
          />
        )}
      </Helmet>
      <Hero>
        <div className="hero__podbor">
          <h1 className="hero__podbor-title">
            <span>Экспертный подбор и&nbsp;установка</span> станций биологической очистки
          </h1>
          <MapPoint variant="primary">
            Санкт-Петербург и ЛО
          </MapPoint>
          <Callout
            className="hero__callout"
            // info="Подберем подходящую станцию для&nbsp;загородного дома, сделаем смету за&nbsp;1 день, а&nbsp;установим на&nbsp;следующий ✔"
            info="Подбираем и устанавливаем подходящие автономные септики — станции биологической очистки для загородного дома по цене производителя ✔"
          />
          <div className="hero__actions">
            <Button
              variant="primary"
              ymGoal="Hero_Connect"
              onClick={() => setIsConnectOpen(true)}
            >
              Связаться с&nbsp;экспертом
            </Button>
            <Button
              variant="secondary"
              scrollTo="calculator"
              ymGoal="Hero_Calculator"
            >
              Рассчитать стоимость для&nbsp;моего дома
            </Button>
          </div>
          <Logo className="hero__logo"/>
          <a href="tel: +7 812 920-46-60" className="hero__phone visible-mobile">
            +7 812 920-46-60
          </a>
          <div className="hero__podbor-visual">
            <img
              className="hero__podbor-img"
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
      <Section id="calculator">
        <SectionTitle variant="column">
          <span>Расчет стоимости и&nbsp;подбор</span> станции биологической очистки
        </SectionTitle>
        <Calculator goalPrefix="podborustanovka_" />
      </Section>
      <Section>
        <div className="dealers">
          <SectionTitle>
            Являемся <span>официальными дилерами</span>
          </SectionTitle>
          <div className="dealers__inner">
            <div className="dealers__info">
              <Callout
                variant="white"
                head="Мы не влияем на цену"
                info="Стоимость станций биологической очистки устанавливают заводы-производители и мы не можем на это вляить"
              />
              <Callout
                variant="white"
                head="Ставим подлинные станции"
                info={
                  <>
                    Только оригинальные станции биологической очистки, чтобы <span>вопрос отвода воды</span> в Вашем доме был <span>закрыт</span>
                  </>
                }
              />
              <Callout
                variant="white"
                head="Даем гарантию"
                info={
                  <>
                    На работы и станции биологической очистки, <span>Вы будете спокойны</span> о качестве установки и септика
                  </>
                }
              />
            </div>
          </div>
          <div className="dealers__brands">
            <div className="dealers__brands-item">
              <h3 className="dealers__brands-item-head">
                ЕВРОБИОН
              </h3>
              <div className="dealers__brands-visual">
                <img
                  className="dealers__brands-visual-img"
                  src={dealersImageEvrobion}
                  alt=" "
                  width={129}
                  height={200}
                />
              </div>
            </div>
            <div className="dealers__brands-item">
              <h3 className="dealers__brands-item-head">
                ТОПАС
              </h3>
              <div className="dealers__brands-visual">
                <img
                  className="dealers__brands-visual-img"
                  src={dealersImageTopas}
                  alt=" "
                  width={129}
                  height={200}
                />
              </div>
            </div>
            <div className="dealers__brands-item">
              <h3 className="dealers__brands-item-head">
                АСТРА
              </h3>
              <div className="dealers__brands-visual">
                <img
                  className="dealers__brands-visual-img"
                  src={dealersImageAstra}
                  alt=" "
                  width={129}
                  height={200}
                />
              </div>
            </div>
            <div className="dealers__brands-item">
              <h3 className="dealers__brands-item-head">
                ЕВРОЛОС
              </h3>
              <div className="dealers__brands-visual">
                <img
                  className="dealers__brands-visual-img"
                  src={dealersImageEvrolos}
                  alt=" "
                  width={129}
                  height={200}
                />
              </div>
            </div>
            <div className="dealers__brands-item">
              <h3 className="dealers__brands-item-head">
                ЗОРДЕ
              </h3>
              <div className="dealers__brands-visual">
                <img
                  className="dealers__brands-visual-img"
                  src={dealersImageZorde}
                  alt=" "
                  width={129}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/*<Section id="catalog">*/}
      {/*  <div className="container">*/}
      {/*    <SectionTitle>*/}
      {/*      <span>Станции биологической очистки</span>*/}
      {/*    </SectionTitle>*/}
      {/*  </div>*/}
      {/*  <Catalog*/}
      {/*    goalPrefix="podborustanovka_"*/}
      {/*  />*/}
      {/*</Section>*/}
      {/*<Section>*/}
      {/*  <SectionTitle variant="column center">*/}
      {/*    <span>Сложно?</span> Понимаем, давайте поможем*/}
      {/*  </SectionTitle>*/}
      {/*  <div className="help">*/}
      {/*    <Logo />*/}
      {/*    <div className="help__callouts">*/}
      {/*      <Callout*/}
      {/*        variant="white ai-start"*/}
      {/*        info="Расскажите эксперту о Вашем участке и доме, подберем подходящую станцию"*/}
      {/*        phone="+7 812 920-46-60"*/}
      {/*        onPhoneClick={() => {*/}
      {/*          if (typeof window.ym === 'function') {*/}
      {/*            window.ym(110089865, 'reachGoal', 'Help_Callout_Phone');*/}
      {/*          }*/}
      {/*        }}*/}
      {/*        messengers={[*/}
      {/*          {*/}
      {/*            icon: 'telegram',*/}
      {/*            url: 'tg://resolve?domain=ChestnySeptik',*/}
      {/*            ymGoal: 'Help_Callout_Telegram'*/}
      {/*          },*/}
      {/*          {*/}
      {/*            icon: 'whatsapp',*/}
      {/*            url: 'whatsapp://send?phone=79119204660',*/}
      {/*            ymGoal: 'Help_Callout_WhatsApp'*/}
      {/*          },*/}
      {/*        ]}*/}
      {/*      />*/}
      {/*      <Callout*/}
      {/*        variant="white ai-start"*/}
      {/*        info="Или заполните данные в калькуляторе и эксперт сам свяжется с Вами"*/}
      {/*        actions={[*/}
      {/*          {*/}
      {/*            variant: 'primary',*/}
      {/*            children: 'К калькулятору',*/}
      {/*            scrollTo: 'calculator',*/}
      {/*            ymGoal: 'Help_Callout_Calculator'*/}
      {/*          }*/}
      {/*        ]}*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Section>*/}
      <Section id="decisions">
        <SectionTitle>
          <span>Простые решения</span> для любого дома
        </SectionTitle>
        <div className="decisions">
          <div className="decisions__inner">
            <div className="decisions__item">
              <h3 className="decisions__head">
                Для небольшого дома, дачи - <span>Астра 3</span>
              </h3>
              <div className="decisions__info">
                <div className="decisions__visual">
                  <img
                    src={decisionsImageAstra}
                    alt="Астра 3 - для небольшого дома, дачи"
                    className="decisions__visual-img"
                    width={172}
                    height={172}
                  />
                </div>
                <div className="decisions__bullets">
                  <div className="decisions__bullets-item">
                    До 3 человек
                  </div>
                  <div className="decisions__bullets-item">
                    Мощность 600 л/сут
                  </div>
                  <div className="decisions__bullets-item">
                    Залповый сброс 150 л
                  </div>
                  <div className="decisions__bullets-item">
                    Потребление до 1.05 кВт/сут
                  </div>
                </div>
              </div>
              <p className="decisions__desc">
                Станция биоочистки для 3 человек. Очистка 98%, без запаха, энергозатраты 1,05 кВт/сут. Подходит для любых грунтов. Срок службы — 50 лет. Самотечный отвод. Корпус из полипропилена.
              </p>
              <Button
                variant="secondary"
                ymGoal="PodborUstanovka_Decisions_Consultation_1"
                onClick={() => handleConsultationClick()}
              >
                Проконсультироваться
              </Button>
            </div>
            <div className="decisions__item">
              <h3 className="decisions__head">
                Для семьи с детьми - <span>Евробион 5</span>
              </h3>
              <div className="decisions__info">
                <div className="decisions__visual">
                  <img
                    src={decisionsImageEvrobion}
                    alt=""
                    className="decisions__visual-img"
                    width={172}
                    height={172}
                  />
                </div>
                <div className="decisions__bullets">
                  <div className="decisions__bullets-item">
                    До 5 человек
                  </div>
                  <div className="decisions__bullets-item">
                    Мощность 1000 л/сут
                  </div>
                  <div className="decisions__bullets-item">
                    Залповый сброс 320 л
                  </div>
                </div>
              </div>
              <p className="decisions__desc">
                Производительность до 1000 л/сут, залповый сброс 320 л. Подвод трубы до 60 см. Вес 98 кг. Идеально для постоянного проживания семьи из 4-5 человек.
              </p>
              <Button
                variant="secondary"
                 ymGoal="PodborUstanovka_Decisions_Consultation_2"
                onClick={() => handleConsultationClick()}
              >
                Проконсультироваться
              </Button>
            </div>
            <div className="decisions__item">
              <h3 className="decisions__head">
                Для большого коттеджа - <span>Топас 8</span>
              </h3>
              <div className="decisions__info">
                <div className="decisions__visual">
                  <img
                    src={decisionsImageTopas}
                    alt=""
                    className="decisions__visual-img"
                    width={172}
                    height={172}
                  />
                </div>
                <div className="decisions__bullets">
                  <div className="decisions__bullets-item">
                    До 8 человек
                  </div>
                  <div className="decisions__bullets-item">
                    Мощность 1500 л/сут
                  </div>
                  <div className="decisions__bullets-item">
                    Залповый сброс 440 л
                  </div>
                  <div className="decisions__bullets-item">
                    Потребление до 1.5 кВт/сут
                  </div>
                </div>
              </div>
              <p className="decisions__desc">
                Очистка стоков до 98% без запаха и химии. Прочный полипропиленовый корпус, срок службы 50+ лет. Не требует откачки. Производительность 1,5 м³‌‌/‌‌сут.
              </p>
              <Button
                variant="secondary"
                 ymGoal="PodborUstanovka_Decisions_Consultation_3"
                onClick={() => handleConsultationClick()}
              >
                Проконсультироваться
              </Button>
            </div>
          </div>
          <Callout
            variant="accent"
            head="Задайте вопросы специалисту"
            info="Эксперт вдумчиво и ясно объяснит всё и подберет лучший для Вас вариант"
            phone="+7 812 920-46-60"
            onPhoneClick={() => {
              if (typeof window.ym === 'function') {
                window.ym(110089865, 'reachGoal', 'PodborUstanovka_Decisions_Callout_Phone');
              }
            }}
            messengers={[
              {
                icon: 'telegram',
                url: 'tg://resolve?domain=ChestnySeptik',
                ymGoal: 'PodborUstanovka_Decisions_Callout_Telegram'
              },
              {
                icon: 'whatsapp',
                url: 'whatsapp://send?phone=79119204660',
                ymGoal: 'PodborUstanovka_Decisions_Callout_WhatsApp'
              },
            ]}
          />
        </div>
      </Section>
      <Section>
        <SectionTitle variant="column">
          <span>Как мы работаем</span> Три шага от звонка до чистой воды
        </SectionTitle>
        <div className="steps">
          <Callout
            variant="white ai-start"
            head="Первый контакт и подбор станции"
            info="Общаемся с Вами по телефону и подбираем лучшее решение для Вас"
            phone="+7 812 920-46-60"
            onPhoneClick={() => {
              if (typeof window.ym === 'function') {
                window.ym(110089865, 'reachGoal', 'PodborUstanovka_Steps_Phone');
              }
            }}
            messengers={[
              {
                icon: 'telegram',
                url: 'tg://resolve?domain=ChestnySeptik',
                ymGoal: 'PodborUstanovka_Steps_Telegram'
              },
              {
                icon: 'whatsapp',
                url: 'whatsapp://send?phone=79119204660',
                ymGoal: 'PodborUstanovka_Steps_WhatsApp'
              },
            ]}
          />
          <Callout
            variant="white ai-start"
            head="Выезд инженера"
            info="Замеряем участок, уровень грунтовых вод, подбираем место вместе с Вами"
            actions={[
              {
                variant: 'primary',
                children: 'Заказать выезд инженера',
                scrollTo: 'engineer-request',
                ymGoal: 'PodborUstanovka_Steps_EngineerRequest'
              }
            ]}
          />
          <Callout
            variant="white"
            head="Монтаж и пуско-наладка"
            info="Земляные работы, установка в котлован, обсыпка, запускаем станцию и инструктируем"
          />
        </div>
      </Section>
      <Section id="engineer-request">
        <SectionTitle variant="column center">
          Оставьте заявку <span>на бесплатный выезд инженера</span>
        </SectionTitle>
        <div className="engineer-request">
          <Logo />
          <form
            className="engineer-request__form"
            id="engineer-request-form"
            method="POST"
            noValidate
            onSubmit={handleSubmit}
          >
            <h3 className="engineer-request__form-head">
              Заявка на выезд инженера
            </h3>
            <div className="engineer-request__form-callout">
              Приедем, посмотрим, замерим и скажем точную сумму работ
            </div>
            <FormInput
              variant="dark"
              label="Имя"
              name="name"
              id="calculator-name"
            />
            <FormInput
              variant="dark"
              label="Телефон"
              name="phone"
              type="tel"
              id="calculator-phone"
              placeholder=' '
            />
            <Agreement
              variant="dark"
            />
            <Button
              type="submit"
            >
              Отправить
            </Button>
          </form>
          
          <ModalThanks
            isOpen={isEngineerThanksOpen}
            onClose={() => setIsEngineerThanksOpen(false)}
          />
          
        </div>
      </Section>
      <Section id="faq">
        <SectionTitle>
          <span>Эксперт отвечает</span> на сложные вопросы
        </SectionTitle>
        <Faq />
      </Section>
      
      <ModalConnect
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
        head="Связаться с экспертом"
        goalPrefix="podborustanovka_"
      />
      
      <ModalConnect
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        head="Запрос на консультацию"
        formContext={consultationContext}
        goalPrefix="podborustanovka_"
      />
    </>
  );
}

export default PodborIUstanovka;