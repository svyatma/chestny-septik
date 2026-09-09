import {Helmet} from "react-helmet-async";
import Hero from "../../components/Hero/Hero.jsx";
import MapPoint from "../../components/MapPoint/MapPoint.jsx";
import Callout from "../../components/Callout/Callout.jsx";
import Button from "../../components/Button/Button.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import EvrolosHeroImage from "../../assets/images/EvrolosHeroImage.webp";
import HeroInfo from "../../components/HeroInfo/HeroInfo.jsx";
import {useGoToSection} from "../../hooks/useGoToSection.js";
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import Catalog from "../../components/Catalog/Catalog.jsx";
import Article from "../../components/Article/Article.jsx";
import Faq from "../../components/Faq/Faq.jsx";
import {getArticleSchema, getServiceSchema} from "../../seo/schemas.js";

function SeptikiEvrolos() {
  
  const goToSection = useGoToSection();
  
  const articleSchema = getArticleSchema({
    headline: 'Септики «Евролос» с установкой по цене производителя в Санкт-Петербурге и ЛО',
    description: 'Подбор и установка автономного септика «Евролос» под ключ. Бесплатный выезд инженера, автономные септики «Евролос».',
    url: 'https://chestnyseptik.ru/septiki-evrolos',
    image: 'https://chestnyseptik.ru/images/EvrolosHeroImage.webp',
    datePublished: '2026-08-22',
    dateModified: '2026-08-22',
    section: 'Септики для частного дома',
  });
  
  const serviceSchema = getServiceSchema({
    name: 'Септики «Евролос» с установкой по цене производителя в Санкт-Петербурге и ЛО',
    serviceType: 'Монтаж и установка автономных септиков',
    description: 'Подбор и установка автономного септика «Евролос» под ключ. Бесплатный выезд инженера, автономные септики «Евролос».',
    url: 'https://chestnyseptik.ru/septiki-evrolos',
  });
  
  return(
    <>
      <Helmet>
        <title>Септики «Евролос» Про, Био, Грунт, 3, 5 и др. — купить в СПб по цене производителя на сайте «Честного септика» | Честный септик</title>
        <meta name="description" content="✔ +7 (812) 920-46-60 Выбирайте свой автономный септик «Евролос» для частного дома, а мы установим под ключ по цене производителя! Звоните!" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
  
      <Hero>
        <div className="hero__septik-for">
          <h1 className="hero__septik-for-title column">
            <span>Септики «Евролос»</span> с установкой по цене производителя в Санкт-Петербурге и ЛО
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
            info="На этой странице Вы сможете выбрать свой автономный септик «Евролос» и заказать с установкой по цене завода-производителя"
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
              src={EvrolosHeroImage}
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
        sectionName="Септики «Евролос»"
          initialBrands={['ЕВРОЛОС']}
      />
      <Article title={<><span>Установка септиков «Евролос»</span> от Честного септика</>}>
        <p>
          «Евролос» — это российский бренд станций биологической очистки с цилиндрическими корпусами, которые отлично противостоят давлению грунта и подходят для участков с высоким уровнем грунтовых вод. Мы реализуем технику напрямую с завода и выполняем монтаж под ключ в Санкт-Петербурге и Ленинградской области.
        </p>
        
        <h3>Три серии: «Био», «Про» и «Грунт»</h3>
        <p>
          В ассортименте «Евролос» три направления, каждое рассчитано на свои условия эксплуатации:
        </p>
        <ul>
          <li>серия «Био» — базовая аэрационная станция для постоянного проживания;</li>
          <li>серия «Про» — усиленная версия с увеличенным залповым сбросом и доработками;</li>
          <li>серия «Грунт» — горизонтальные станции для неглубокой врезки трубы и сезонного использования.</li>
        </ul>
        
        <h3>Что учитываем при подборе «Евролос»</h3>
        <p>
          Перед рекомендацией конкретной модели инженер выезжает на участок. Это важный этап, потому что от правильного выбора зависит срок службы и стабильность работы.
        </p>
        <p>В ходе осмотра:</p>
        <ul>
          <li>определяем суточный объём стоков и пиковые нагрузки;</li>
          <li>проверяем тип грунта и уровень грунтовых вод;</li>
          <li>уточняем, какой отвод воды предпочтителен — самотёчный или принудительный;</li>
          <li>фиксируем глубину врезки канализационной трубы;</li>
          <li>подбираем место монтажа с учётом подъезда техники и обслуживания.</li>
        </ul>
        <p>
          Только после этого рассчитываем точную смету, которая фиксируется в договоре и не меняется в процессе.
        </p>
        
        <h3>Цены на популярные модели «Евролос»</h3>
        <p>
          Для небольшой семьи подойдут компактные станции серии «Био» и «Про», для больших домов — модели с индексом 8 и выше. Примеры стоимости с установкой:
        </p>
        <ul>
          <li>«Евролос Био 3» — станция 136 895 ₽, под ключ 168 895 ₽;</li>
          <li>«Евролос Био 5» — оборудование 149 815 ₽, с монтажом 184 815 ₽;</li>
          <li>«Евролос Про 5» — станция 162 925 ₽, под ключ 197 925 ₽;</li>
          <li>«Евролос Про 8» — 202 730 ₽ и 246 730 ₽ соответственно;</li>
          <li>«Евролос Грунт 5» — станция 241 490 ₽, с установкой 289 990 ₽.</li>
        </ul>
        <p>
          Точная цена для вашего дома будет известна после бесплатного выезда инженера и уточнения условий монтажа.
        </p>
        
        <h3>Почему «Честный септик» — надёжный подрядчик</h3>
        <p>Мы сопровождаем клиента на всех этапах — от выбора до сервисного обслуживания:</p>
        <ol>
          <li><strong>Консультация.</strong> Помогаем сравнить серии и модели, объясняем нюансы без навязывания.</li>
          <li><strong>Монтаж.</strong> Соблюдаем технологию: песчаная подушка, обсыпка, подключение компрессора, проверка герметичности.</li>
          <li><strong>Гарантия.</strong> Заводская гарантия на станцию и 2 года на работы.</li>
          <li><strong>Сервис.</strong> Остаёмся на связи после установки: консультируем и помогаем с обслуживанием.</li>
        </ol>
        
        <h3>Стоимость установки «Евролос» под ключ</h3>
        <p>
          Монтажные работы стоят от 32 000 ₽ в зависимости от сложности участка и выбранной модели. Вместе с оборудованием итоговая смета для семьи из 3–4 человек начинается от 168 895 ₽. Благодаря прозрачному ценообразованию вы заранее знаете все расходы.
        </p>
        
        <div className="article__callout">
          <p>
            Хотите купить септик «Евролос» по заводской цене? Оставьте заявку или позвоните — инженер приедет бесплатно.
          </p>
          <p>
            Подберём станцию, которая прослужит десятилетия и избавит от запаха и вызова ассенизаторской машины.
          </p>
          <p>
            <strong>С «Честным септиком» вы получаете честную цену, официальную гарантию и спокойствие за свою систему.</strong>
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
          <span>Часто задаваемые вопросы</span> о септиках «Евролос»
        </SectionTitle>
        <Faq />
      </Section>
    </>
  )
}

export default SeptikiEvrolos;