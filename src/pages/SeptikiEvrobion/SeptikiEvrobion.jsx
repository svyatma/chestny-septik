import {Helmet} from "react-helmet-async";
import Hero from "../../components/Hero/Hero.jsx";
import MapPoint from "../../components/MapPoint/MapPoint.jsx";
import Callout from "../../components/Callout/Callout.jsx";
import Button from "../../components/Button/Button.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import EvrobionHeroImage from "../../assets/images/PodborHeroImage.png";
import HeroInfo from "../../components/HeroInfo/HeroInfo.jsx";
import {useGoToSection} from "../../hooks/useGoToSection.js";
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import Catalog from "../../components/Catalog/Catalog.jsx";
import Article from "../../components/Article/Article.jsx";
import Faq from "../../components/Faq/Faq.jsx";
import {getArticleSchema, getServiceSchema} from "../../seo/schemas.js";

function SeptikiEvrobion() {
  
  const goToSection = useGoToSection();
  
  const articleSchema = getArticleSchema({
    headline: 'Септики «Евробион» купить по цене производителя',
    description: 'Подбор и установка автономного септика «Евробион» без откачки под ключ. Бесплатный выезд инженера, автономные септики «Евробион».',
    url: 'https://chestnyseptik.ru/septiki-evrobion',
    image: 'https://chestnyseptik.ru/images/EvrobionHeroImage.png',
    datePublished: '2026-08-22',
    dateModified: '2026-08-22',
    section: 'Септики для частного дома',
  });
  
  const serviceSchema = getServiceSchema({
    name: 'Септики «Евробион» купить по цене производителя',
    serviceType: 'Монтаж и установка автономных септиков',
    description: 'Подбор и установка автономного септика «Евробион» без откачки под ключ. Бесплатный выезд инженера, автономные септики «Евробион».',
    url: 'https://chestnyseptik.ru/septiki-evrobion',
  });
  
  return(
    <>
      <Helmet>
        <title>Септики «Евробион» — купить по цене производителя на сайте у «Честного септика» | Честный септик</title>
        <meta name="description" content="✔ +7 (812) 920-46-60 Выбирайте свой автономный септик «Евробион» для частного дома, а мы установим под ключ по цене производителя! Звоните!" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
  
      <Hero>
        <div className="hero__septik-for">
          <h1 className="hero__septik-for-title column">
            <span>Септики «Евробион»</span> купить по цене производителя
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
            info="На этой странице Вы сможете выбрать свой автономный септик «Евробион» и заказать с установкой по цене завода-производителя"
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
              src={EvrobionHeroImage}
              alt="Септики «Евробион» с установкой под ключ по цене производителя"
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
      <Article title={<><span>Установка септиков «Евробион»</span> от Честного септика</>}>
        <p>
          Покупка и монтаж автономного септика «Евробион» — это вложение в комфорт и экологичность вашего дома. Мы официальный дилер завода-изготовителя, поэтому гарантируем заводские цены, полную сертификацию и профессиональный ввод станции в эксплуатацию.
        </p>
        
        <h3>Преимущества септиков «Евробион»</h3>
        <p>
          Станции «Евробион» заслужили доверие тысяч домовладельцев благодаря сочетанию надёжности, энергоэффективности и высокой степени очистки. В каталоге представлены модели для любого состава семьи и условий проживания.
        </p>
        <ul>
          <li>очистка стоков до 98% без запаха и откачки;</li>
          <li>корпус из полипропилена, срок службы более 50 лет;</li>
          <li>низкое энергопотребление — от 0,6 кВт/сутки;</li>
          <li>работа при высоком уровне грунтовых вод и в глинистых грунтах.</li>
        </ul>
        
        <h3>Бесплатный выезд инженера и точная смета</h3>
        <p>
          Чтобы установка септика «Евробион» под ключ прошла без сюрпризов, к вам приезжает инженер. Он не только делает замеры, но и помогает выбрать модель, оптимальную именно для вашего участка.
        </p>
        <p>Специалист:</p>
        <ul>
          <li>изучит дом, сантехнику и режим проживания;</li>
          <li>определит необходимое количество проживающих и пиковые нагрузки;</li>
          <li>проверит грунт и уровень грунтовых вод;</li>
          <li>подберёт место установки с учётом подъезда техники;</li>
          <li>рассчитает точную стоимость, зафиксированную в договоре.</li>
        </ul>
        <p>
          Вы получаете септик «Евробион» в Санкт-Петербурге и Ленинградской области, полностью адаптированный под ваши условия.
        </p>
        
        <h3>Популярные модели «Евробион» и цены</h3>
        <p>
          Для семьи из 3–4 человек отлично подойдёт «Евробион Раунд 3» — стоимость станции 143 000 ₽, под ключ — 176 000 ₽. Для 5 человек рекомендуем «Евробион Раунд 5»: станция 160 900 ₽, с монтажом 195 900 ₽. Для больших домов — «Евробион Раунд 8» от 201 000 ₽ под ключ.
        </p>
        
        <h3>Почему «Честный септик» — правильный выбор?</h3>
        <p>Мы не просто продаём оборудование, а обеспечиваем весь цикл:</p>
        <ol>
          <li><strong>Подбор.</strong> Честно объясняем разницу между моделями и не навязываем лишнее.</li>
          <li><strong>Монтаж.</strong> Аккуратные земляные работы, правильная обсыпка, подключение и запуск.</li>
          <li><strong>Гарантия.</strong> Официальная гарантия завода и наша собственная гарантия на работы.</li>
          <li><strong>Поддержка.</strong> Остаёмся на связи после установки — консультируем и обслуживаем.</li>
        </ol>
        
        <h3>Стоимость установки септика «Евробион» под ключ</h3>
        <p>
          Цена зависит от модели и сложности монтажа. Например, для семьи из 3–4 человек популярные станции обойдутся от 176 000 ₽ под ключ. Точную смету назовёт инженер после бесплатного выезда — без скрытых доплат.
        </p>
        
        <div className="article__callout">
          <p>
            Хотите купить септик «Евробион» по цене производителя? Оставьте заявку или позвоните — инженер приедет в удобное время.
          </p>
          <p>
            Подберём станцию, которая прослужит десятилетия и обеспечит комфорт вашей семье.
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
      <Section id="catalog">
        <div className="container">
          <SectionTitle>
            <span>Септики «Евробион»</span> Раунд, Арт, Горизонт
          </SectionTitle>
        </div>
        <Catalog
          initialBrands={['ЕВРОБИОН']}
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
          <span>Часто задаваемые вопросы</span> о септиках «Евробион»
        </SectionTitle>
        <Faq />
      </Section>
    </>
  )
}

export default SeptikiEvrobion;