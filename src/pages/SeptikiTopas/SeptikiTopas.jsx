import {Helmet} from "react-helmet-async";
import Hero from "../../components/Hero/Hero.jsx";
import MapPoint from "../../components/MapPoint/MapPoint.jsx";
import Callout from "../../components/Callout/Callout.jsx";
import Button from "../../components/Button/Button.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import TopasHeroImage from "../../assets/images/TopasHeroImage.webp";
import HeroInfo from "../../components/HeroInfo/HeroInfo.jsx";
import {useGoToSection} from "../../hooks/useGoToSection.js";
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import Catalog from "../../components/Catalog/Catalog.jsx";
import Article from "../../components/Article/Article.jsx";
import Faq from "../../components/Faq/Faq.jsx";
import {getArticleSchema, getServiceSchema} from "../../seo/schemas.js";
import Help from "../../components/Help/Help.jsx";

function SeptikiTopas() {
  
  const goToSection = useGoToSection();
  
  const articleSchema = getArticleSchema({
    headline: 'Септики «Топас» с установкой по цене производителя в Санкт-Петербурге и ЛО',
    description: 'Подбор и установка автономного септика «Топас» без откачки под ключ. Бесплатный выезд инженера, автономные септики «Топас».',
    url: 'https://chestnyseptik.ru/septiki-topas',
    image: 'https://chestnyseptik.ru/images/TopasHeroImage.webp',
    datePublished: '2026-08-22',
    dateModified: '2026-08-22',
    section: 'Септики для частного дома',
  });
  
  const serviceSchema = getServiceSchema({
    name: 'Септики «Топас» с установкой по цене производителя в Санкт-Петербурге и ЛО',
    serviceType: 'Монтаж и установка автономных септиков',
    description: 'Подбор и установка автономного септика «Топас» без откачки под ключ. Бесплатный выезд инженера, автономные септики «Топас».',
    url: 'https://chestnyseptik.ru/septiki-topas',
  });
  
  return(
    <>
      <Helmet>
        <title>Септики «Топас» 4, 5 и др. — купить в СПб по цене производителя на сайте у «Честного септика» | Честный септик</title>
        <meta name="description" content="✔ +7 (812) 920-46-60 Выбирайте свой автономный септик «Топас» для частного дома, а мы установим под ключ по цене производителя! Звоните!" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
  
      <Hero>
        <div className="hero__septik-for">
          <h1 className="hero__septik-for-title column">
            <span>Септики «Топас»</span> с установкой по цене производителя в Санкт-Петербурге и ЛО
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
            info="На этой странице Вы сможете выбрать свой автономный септик «Топас» и заказать с установкой по цене завода-производителя"
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
              src={TopasHeroImage}
              alt="Септики «Топас» с установкой под ключ по цене производителя"
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
        sectionName="Септики «Топас»"
        initialBrands={['ТОПАС']}
      />
      <Help />
      <Article title={<><span>Установка септиков «Топас»</span> от Честного септика</>}>
        <p>
          Септик «Топас» — это проверенная временем автономная станция, которая уже более 20 лет устанавливается в частных домах и на дачах. Мы являемся официальным дилером завода-изготовителя, поэтому предлагаем технику по заводской стоимости с гарантией и профессиональным монтажом под ключ.
        </p>
        
        <h3>Модельный ряд «Топас»: какой вариант выбрать</h3>
        <p>
          Линейка «Топас» делится на две серии: классические «Топас» и «Топас-С» (самотёчные). Первые подходят для участков с любым типом грунта, вторые — для отвода очищенной воды самотёком без дополнительного насоса. В каталоге представлены модификации для семьи от 4 до 8 человек, а также версии «Лонг» для участков с высоким уровнем грунтовых вод:
        </p>
        <ul>
          <li>классические «Топас» и «Топас-С» — отличия в способе отвода воды;</li>
          <li>модификации «Лонг» с увеличенной длиной корпуса для глубокой врезки;</li>
          <li>модели «Пр» с принудительным отводом и встроенным насосом;</li>
          <li>энергопотребление от 1 кВт/сутки — экономично для постоянного проживания.</li>
        </ul>
        
        <h3>Как мы подбираем и устанавливаем «Топас»</h3>
        <p>
          Правильный монтаж септика «Топас» важнее самой станции: от него зависит срок службы и отсутствие проблем. Поэтому мы начинаем с выезда инженера, который:
        </p>
        <ul>
          <li>определяет суточный объём стоков и пиковые сбросы;</li>
          <li>проверяет возможность самотёчного отвода или необходимость насоса;</li>
          <li>оценивает глубину залегания канализационной трубы;</li>
          <li>подбирает место под монтаж с учётом доступа для обслуживания компрессора;</li>
          <li>рассчитывает точную смету без скрытых доплат.</li>
        </ul>
        <p>
          После этого мы доставляем станцию, готовим котлован, устанавливаем её на песчаную подушку, подключаем электричество и запускаем систему. Вы получаете работающий септик «Топас» в Санкт-Петербурге и Ленинградской области.
        </p>
        
        <h3>Цены на популярные модели «Топас»</h3>
        <p>
          Для семьи из 4 человек оптимален «Топас 4» — станция стоит 142 740 ₽, с монтажом под ключ 176 740 ₽. Для 5 человек подойдёт «Топас 5»: оборудование 167 040 ₽, установка 202 040 ₽. Если в доме живёт 6–8 человек, выбирайте «Топас 8» — 196 110 ₽ за станцию и 234 110 ₽ под ключ. Для дачи можно рассмотреть «Топас-С 4» — 127 980 ₽ и 161 980 ₽ соответственно.
        </p>
        
        <h3>Почему «Честный септик» — правильный выбор?</h3>
        <p>Мы не просто продаём станции, а полностью сопровождаем сделку:</p>
        <ol>
          <li><strong>Помощь в выборе.</strong> Сравниваем модели, объясняем разницу между сериями и не навязываем лишнее.</li>
          <li><strong>Точный расчёт.</strong> Инженер фиксирует все параметры, чтобы итоговая цена не изменилась.</li>
          <li><strong>Аккуратный монтаж.</strong> Соблюдаем технологию: обсыпка, подключение компрессора, проверка герметичности.</li>
          <li><strong>Гарантия.</strong> Даём заводскую гарантию на станцию и на работы.</li>
        </ol>
        
        <h3>Стоимость установки септика «Топас» под ключ</h3>
        <p>
          Цена монтажа зависит от модели, глубины врезки и типа грунта. В среднем для семьи из 4 человек установка септика «Топас» обойдётся от 34 000 ₽ без оборудования. Точную смету назовёт инженер после бесплатного выезда — вы заранее узнаете все расходы.
        </p>
        
        <div className="article__callout">
          <p>
            Хотите купить септик «Топас» по цене производителя? Оставьте заявку или позвоните — инженер приедет в удобное время.
          </p>
          <p>
            Подберём станцию, которая обеспечит комфорт и прослужит десятилетия.
          </p>
          <p>
            <strong>С «Честным септиком» вы получаете заводскую цену, гарантию и спокойствие за результат.</strong>
          </p>
          <div className="article__actions">
            <a href="tel: +7 812 920-46-60" className="article__phone">
              +7 812 920-46-60
            </a>
            <Button
              onClick={() => goToSection('calculator')}
              ymGoal="Article_Podbor"
            >
              Получить расчёт
            </Button>
          </div>
        </div>
      </Article>
      <Section id="faq">
        <SectionTitle
          variant="column"
        >
          <span>Часто задаваемые вопросы</span> о септиках «Топас»
        </SectionTitle>
        <Faq />
      </Section>
    </>
  )
}

export default SeptikiTopas;