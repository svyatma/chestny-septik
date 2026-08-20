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
import Article from "../../components/Article/Article.jsx";
import {getArticleSchema, getServiceSchema} from '../../seo/schemas.js';

function SeptikDlyaDachi() {
  const goToSection = useGoToSection();
  
  const articleSchema = getArticleSchema({
    headline: 'Автономные септики для дачи непостоянного проживания под ключ',
    description: 'Подбор и установка автономного септика для дачи под ключ. Бесплатный выезд инженера, септики без откачки для сезонного проживания. Цены от 150 630 ₽.',
    url: 'https://chestnyseptik.ru/septik-dlya-dachi',
    image: 'https://chestnyseptik.ru/logo.svg',
    datePublished: '2026-08-20',
    dateModified: '2026-08-20',
    section: 'Септики для дачи',
  });
  
  const serviceSchema = getServiceSchema({
    name: 'Автономные септики для дачи непостоянного проживания под ключ',
    serviceType: 'Монтаж автономных септиков',
    description: 'Подбор и установка автономного септика для дачи под ключ. Бесплатный выезд инженера, септики без откачки для сезонного проживания. Цены от 150 630 ₽.',
    url: 'https://chestnyseptik.ru/septik-dlya-dachi',
  });
  
  return (
    <>
      <Helmet>
        <title>Купить автономный септик без откачки для дачи непостоянного проживания под ключ по цене завода | Честный септик</title>
        <meta name="description" content="+7 (812) 920-46-60 ✔ Выбирайте свой автономный септик для дачи, а мы установим под ключ по цене производителя! Звоните!" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      
      <Hero>
        <div className="hero__septik-for">
          <h1 className="hero__septik-for-title column">
            <span>Автономные септики для дачи</span> непостоянного проживания под ключ
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
            info="На этой странице Вы сможете выбрать септик для дачи и заказать с установкой по цене завода-производителя"
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
            <span>Каталог автономных септиков для дачи</span>
          </SectionTitle>
        </div>
        <Catalog />
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
      <Article title={<><span>Установка септика для дачи</span> от Честного септика</>}>
        <p>
          Выбор и установка септика для дачи — ответственный шаг. Мы берём на себя все заботы: от
          бесплатного выезда инженера до запуска станции под ключ. Работаем честно и не навязываем лишнего.
        </p>
        <h3>
          Бесплатный выезд инженера: точный расчёт до начала работ
        </h3>
        <p>
          Мы не считаем стоимость «на глаз». Чтобы септик для дачи под ключ был подобран и
          установлен правильно, первым делом к вам приедет инженер. Это бесплатно.
        </p>
        <p>
          Специалист:
        </p>
        <ul>
          <li>
            осмотрит участок и дом;
          </li>
          <li>
            замерит расстояние от дома до котлована;
          </li>
          <li>
            определит уровень грунтовых вод и тип грунта;
          </li>
          <li>
            подскажет оптимальное место установки;
          </li>
          <li>
            рассчитает точную смету, которая не изменится после подписания договора.
          </li>
        </ul>
        <p>
          Вы получаете автономный септик для дачи в Санкт-Петербурге и Ленинградской области с учётом особенностей вашего
          участка — от типа почвы до глубины врезки трубы.
        </p>
        <h3>
          Для сезонного проживания и непостоянного использования
        </h3>
        <p>
          Дача — это не всегда круглогодичное проживание. Часто туда приезжают на выходные или только летом. Поэтому мы предлагаем септик для дачи
          непостоянного проживания, который:
        </p>
        <ul>
          <li>
            не требует постоянного присмотра;
          </li>
          <li>
            быстро выходит на рабочий режим после простоя;
          </li>
          <li>
            не боится редких сбросов;
          </li>
          <li>
            легко консервируется на зиму.
          </li>
        </ul>
        <p>
          Такие станции экономят электроэнергию и обеспечивают очистку до 98%. Вам не придётся переплачивать за
          избыточную мощность, если вы живёте за городом только в тёплый сезон.
        </p>
        <h3>
          Почему «Честный септик» — правильный выбор?
        </h3>
        <p>
          Мы не просто продаём станции — мы сопровождаем человека на всех этапах:
        </p>
        <ol>
          <li>
            <strong>Подбор.</strong> Задаём вопросы о количестве человек, сантехнике, режиме проживания. Предлагаем несколько подходящих вариантов, сравниваем по характеристикам и честно объясняем разницу.
          </li>
          <li>
            <strong>Расчёт.</strong> Инженер на месте делает замеры, фиксирует все нюансы, чтобы итоговая цена на септик для дачи была окончательной и не выросла в процессе.</li>
          <li>
            <strong>Установка.</strong> Аккуратные земляные работы, правильная обсыпка, подключение, запуск и инструктаж.
          </li>
          <li>
            <strong>Гарантия.</strong> Работаем официально и отвечаем за каждую установленную станцию.
          </li>
        </ol>
        <p>
          Вы получаете не просто септик, а готовую инженерную систему, которая прослужит десятилетиями.
        </p>
        <h3>
          Сколько стоит установка септика для дачи?
        </h3>
        <p>
          На септик для дачи цена складывается из стоимости оборудования и монтажа. Мы работаем по ценам заводов-изготовителей и не добавляем скрытых наценок. Например, для семьи из 3–4 человек популярные модели обойдутся от 150 630 ₽ под ключ — это уже с работами, запуском и гарантией.
        </p>
        <p>
          Благодаря бесплатному выезду инженера вы заранее узнаете точную сумму и сможете планировать бюджет без
          сюрпризов.
        </p>
        <div className="article__callout">
          <p>
            Оставьте заявку на сайте или позвоните нам — и мы отправим инженера на участок в удобное для вас время.
          </p>
          <p>
            Вместе мы выберем и установим септик для дачи, который будет работать безотказно и без
            запаха.
          </p>
          <p>
            <strong>С «Честным септиком» вы не переплатите и будете уверены в результате.</strong>
          </p>
          <div className="article__actions">
            <a href="tel: +7 812 920-46-60" className="article__phone">
              +7 812 920-46-60
            </a>
            <Button
              onClick={() => goToSection('calculator')}
              ymGoal="Article_Podbor"
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </Article>
      <Section id="faq">
        <SectionTitle
          variant="column"
        >
          <span>Часто задаваемые вопросы</span> о септиках для дачи непостоянного проживания
        </SectionTitle>
        <Faq/>
      </Section>
    </>
  )
}

export default SeptikDlyaDachi;