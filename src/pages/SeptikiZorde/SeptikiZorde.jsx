import {Helmet} from "react-helmet-async";
import Hero from "../../components/Hero/Hero.jsx";
import MapPoint from "../../components/MapPoint/MapPoint.jsx";
import Callout from "../../components/Callout/Callout.jsx";
import Button from "../../components/Button/Button.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import ZordeHeroImage from "../../assets/images/ZordeHeroImage.webp";
import HeroInfo from "../../components/HeroInfo/HeroInfo.jsx";
import {useGoToSection} from "../../hooks/useGoToSection.js";
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import Catalog from "../../components/Catalog/Catalog.jsx";
import Article from "../../components/Article/Article.jsx";
import Faq from "../../components/Faq/Faq.jsx";
import {getArticleSchema, getServiceSchema} from "../../seo/schemas.js";

function SeptikiZorde() {
  
  const goToSection = useGoToSection();
  
  const articleSchema = getArticleSchema({
    headline: 'Септики «Зорде» с профессиональной установкой под ключ в Санкт-Петербурге и ЛО',
    description: 'Подбор и установка автономного септика «Зорде» под ключ. Бесплатный выезд инженера, автономные септики «Зорде».',
    url: 'https://chestnyseptik.ru/septiki-zorde',
    image: 'https://chestnyseptik.ru/images/ZordeHeroImage.webp',
    datePublished: '2026-08-22',
    dateModified: '2026-08-22',
    section: 'Септики для частного дома',
  });
  
  const serviceSchema = getServiceSchema({
    name: 'Септики «Зорде» с профессиональной установкой под ключ в Санкт-Петербурге и ЛО',
    serviceType: 'Монтаж и установка автономных септиков',
    description: 'Подбор и установка автономного септика «Зорде» под ключ. Бесплатный выезд инженера, автономные септики «Зорде».',
    url: 'https://chestnyseptik.ru/septiki-zorde',
  });
  
  return(
    <>
      <Helmet>
        <title>Септики «Зорде» 3, 4, 5 и др. — купить в СПб у «Честного септика» | Честный септик</title>
        <meta name="description" content="✔ +7 (812) 920-46-60 Выбирайте свой автономный септик «Зорде» для частного дома, а мы установим под ключ по цене производителя! Звоните!" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
  
      <Hero>
        <div className="hero__septik-for">
          <h1 className="hero__septik-for-title column">
            <span>Септики «Зорде»</span> с профессиональной установкой под ключ в Санкт-Петербурге и ЛО
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
            info="На этой странице Вы сможете выбрать свой автономный септик «Зорде» и заказать с установкой по цене завода-производителя"
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
              src={ZordeHeroImage}
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
        sectionName="Септики «Зорде»"
        initialBrands={['ЗОРДЕ']}
      />
      <Article title={<><span>Установка септиков «Зорде»</span> от Честного септика</>}>
        <p>
          Септики «Зорде» — это одни из самых энергоэффективных станций на российском рынке. При суточной производительности до 1,4 м³ они потребляют всего 0,54 кВт/сутки.
        </p>
        
        <p>
          Мы устанавливаем «Зорде» под ключ в Санкт-Петербурге и Ленинградской области, гарантируя заводскую цену и профессиональный монтаж.
        </p>
        
        <h3>Компактные размеры и простая эксплуатация</h3>
        <p>
          В отличие от многих аналогов, «Зорде» имеют квадратное основание и сравнительно небольшую высоту — от 2080 до 2680 мм в зависимости от модификации. Это упрощает перевозку и установку даже на участках с ограниченным подъездом. Обслуживание сводится к ежегодной откачке избыточного ила и проверке компрессора.
        </p>
        <ul>
          <li>энергопотребление 0,54 кВт/сутки — одно из самых низких в классе;</li>
          <li>корпус из полипропилена, срок службы до 50 лет;</li>
          <li>три модификации: стандарт, «Миди» и «Лонг»;</li>
          <li>степень очистки до 98% без запаха и откачки.</li>
        </ul>
        
        <h3>Модели «Зорде 4» и «Зорде 7»: что выбрать</h3>
        <p>
          Линейка состоит из двух базовых станций, рассчитанных на разное число жильцов. «Зорде 4» подходит для семьи из 4 человек, а «Зорде 7» — для 7 человек. Модификация «Миди» увеличивает высоту врезки трубы, а «Лонг» — общую глубину котлована, что удобно при высоком уровне грунтовых вод.
        </p>
        <ul>
          <li>«Зорде 4» — 260 л залпового сброса, 0,8 м³/сутки;</li>
          <li>«Зорде 7» — 320 л залпового сброса, 1,4 м³/сутки;</li>
          <li>«Миди» — врезка до 900 мм;</li>
          <li>«Лонг» — врезка до 1200 мм.</li>
        </ul>
        
        <h3>Что проверяем перед установкой</h3>
        <p>
          Чтобы «Зорде» работала без сбоев, мы выезжаем на участок и анализируем четыре ключевых параметра:
        </p>
        <ul>
          <li>суточный объём стоков и пиковые сбросы;</li>
          <li>уровень грунтовых вод и тип почвы;</li>
          <li>глубину залегания канализационной трубы;</li>
          <li>наличие подъезда для техники и место для котлована.</li>
        </ul>
        <p>
          На основе этих данных инженер рекомендует конкретную модификацию и фиксирует стоимость монтажа.
        </p>
        
        <h3>Цены на септики «Зорде» с установкой</h3>
        <p>
          Оборудование и работы оплачиваются отдельно, но итоговая сумма всегда известна до начала работ. Примеры:
        </p>
        <ul>
          <li>«Зорде 4» — станция 164 900 ₽, под ключ 197 880 ₽;</li>
          <li>«Зорде 4 Миди» — оборудование 181 900 ₽, с монтажом 218 280 ₽;</li>
          <li>«Зорде 4 Лонг» — станция 188 900 ₽, под ключ 226 680 ₽;</li>
          <li>«Зорде 7» — 196 900 ₽ за станцию, 236 280 ₽ с установкой;</li>
          <li>«Зорде 7 Миди» — 213 900 ₽ и 256 680 ₽ соответственно;</li>
          <li>«Зорде 7 Лонг» — оборудование 220 900 ₽, монтаж 265 080 ₽.</li>
        </ul>
        <p>
          Точную смету для вашего дома назовёт инженер после бесплатного выезда.
        </p>
        
        <h3>Как мы организуем работу</h3>
        <p>Процесс от первого звонка до запуска станции занимает обычно 2–3 дня:</p>
        <ol>
          <li><strong>Заявка.</strong> Уточняем детали по телефону или через сайт.</li>
          <li><strong>Выезд инженера.</strong> Бесплатно замеряем участок и считаем стоимость.</li>
          <li><strong>Доставка и монтаж.</strong> Привозим станцию, копаем котлован, устанавливаем, подключаем.</li>
          <li><strong>Запуск и инструктаж.</strong> Проверяем работу, объясняем правила эксплуатации.</li>
        </ol>
        
        <h3>Стоимость установки «Зорде» под ключ</h3>
        <p>
          Монтажные работы стартуют от 32 980 ₽ и зависят от выбранной модификации, глубины врезки и сложности грунта. Например, для семьи из 4 человек полный цикл с оборудованием обойдётся от 197 880 ₽. Все расходы фиксируются и не увеличиваются в процессе.
        </p>
        
        <div className="article__callout">
          <p>
            Ищете экономичную станцию с минимальным энергопотреблением? Оставьте заявку или позвоните — поможем выбрать и установить септик «Зорде» под ключ.
          </p>
          <p>
            Получите честную заводскую цену и гарантию на станцию биологической очистки и монтажные работы.
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
              Получить расчёт
            </Button>
          </div>
        </div>
      </Article>
      <Section id="faq">
        <SectionTitle
          variant="column"
        >
          <span>Часто задаваемые вопросы</span> о септиках «Зорде»
        </SectionTitle>
        <Faq />
      </Section>
    </>
  )
}

export default SeptikiZorde;