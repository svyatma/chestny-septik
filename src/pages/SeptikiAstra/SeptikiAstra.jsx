import {Helmet} from "react-helmet-async";
import Hero from "../../components/Hero/Hero.jsx";
import MapPoint from "../../components/MapPoint/MapPoint.jsx";
import Callout from "../../components/Callout/Callout.jsx";
import Button from "../../components/Button/Button.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import AstraHeroImage from "../../assets/images/AstraHeroImage.webp";
import HeroInfo from "../../components/HeroInfo/HeroInfo.jsx";
import {useGoToSection} from "../../hooks/useGoToSection.js";
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import Catalog from "../../components/Catalog/Catalog.jsx";
import Article from "../../components/Article/Article.jsx";
import Faq from "../../components/Faq/Faq.jsx";
import {getArticleSchema, getServiceSchema} from "../../seo/schemas.js";

function SeptikiAstra() {
  
  const goToSection = useGoToSection();
  
  const articleSchema = getArticleSchema({
    headline: 'Септики «Юнилос Астра» с установкой под ключ по цене завода в Санкт-Петербурге и ЛО',
    description: 'Подбор и установка автономного септика «Астра» под ключ. Бесплатный выезд инженера, автономные септики «Астра».',
    url: 'https://chestnyseptik.ru/septiki-astra',
    image: 'https://chestnyseptik.ru/images/AstraHeroImage.webp',
    datePublished: '2026-08-22',
    dateModified: '2026-08-22',
    section: 'Септики для частного дома',
  });
  
  const serviceSchema = getServiceSchema({
    name: 'Септики «Юнилос Астра» с установкой под ключ по цене завода в Санкт-Петербурге и ЛО',
    serviceType: 'Монтаж и установка автономных септиков',
    description: 'Подбор и установка автономного септика «Астра» под ключ. Бесплатный выезд инженера, автономные септики «Астра».',
    url: 'https://chestnyseptik.ru/septiki-astra',
  });
  
  return(
    <>
      <Helmet>
        <title>Септики «Юнилос Астра» 3, 4, 5 и др. — купить в СПб с установкой по цене завода у «Честного септика» | Честный септик</title>
        <meta name="description" content="✔ +7 (812) 920-46-60 Выбирайте свой автономный септик «Астра» для частного дома, а мы установим под ключ по цене производителя! Звоните!" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
  
      <Hero>
        <div className="hero__septik-for">
          <h1 className="hero__septik-for-title column">
            <span>Септики «Юнилос Астра»</span> с установкой под ключ по цене завода в Санкт-Петербурге и ЛО
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
            info="На этой странице Вы сможете выбрать свой автономный септик «Астра» и заказать с установкой по цене завода-производителя"
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
              src={AstraHeroImage}
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
      <Section id="catalog">
        <div className="container">
          <SectionTitle>
            <span>Септики «Юнилос Астра»</span>
          </SectionTitle>
        </div>
        <Catalog
          initialBrands={['АСТРА']}
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
      <Article title={<><span>Установка септиков «Юнилос Астра»</span> от Честного септика</>}>
        <p>
          «Юнилос Астра» — это одна из самых распространённых в России серий станций биологической очистки. Её выбирают за неприхотливость, понятное обслуживание и широкий диапазон производительности. Мы реализуем станции «Астра» от завода-изготовителя и берём на себя весь монтажный цикл — от доставки до запуска.
        </p>
        
        <h3>Модельный ряд: от дачи до большого коттеджа</h3>
        <p>
          Линейка «Астра» закрывает потребности домов с разным количеством жильцов. Базовые модели с индексом 3, 4, 5 подходят для небольших семей и дач, а старшие — 6, 7, 8 и 10 — справляются с постоянным проживанием и высокой нагрузкой.
        </p>
        <ul>
          <li>«Астра 3» и «Астра 4» — для 3–4 человек, компактный корпус;</li>
          <li>«Астра 5» и «Астра 6» — для семьи из 5–6 человек;</li>
          <li>«Астра 7», «Астра 8» — для больших домов с несколькими санузлами;</li>
          <li>модификации «Лонг» — для глубокой врезки при высоком уровне грунтовых вод.</li>
        </ul>
        
        <h3>Подбор под условия участка</h3>
        <p>
          Перед тем как рекомендовать конкретную модель, мы анализируем участок. Важно не только число проживающих, но и тип грунта, глубину прокладки трубы и способ отвода очищенной воды.
        </p>
        <p>Инженер на выезде:</p>
        <ul>
          <li>определяет, нужен ли самотёчный или принудительный сброс;</li>
          <li>проверяет, насколько глубоко входит канализационная труба;</li>
          <li>оценивает доступ к месту монтажа для техники;</li>
          <li>составляет смету, которая не поменяется.</li>
        </ul>
        <p>
          Такой подход исключает перегрузку станции и ошибки при установке — вы сразу получаете рабочую станцию биологической очистки.
        </p>
        
        <h3>Стоимость станций «Астра» с монтажом</h3>
        <p>
          Цена зависит от индекса модели и модификации. Например:
        </p>
        <ul>
          <li>«Астра 3» — станция 117 630 ₽, под ключ 150 630 ₽;</li>
          <li>«Астра 4» — оборудование 123 120 ₽, с установкой 157 120 ₽;</li>
          <li>«Астра 5» — станция 144 270 ₽, монтаж 179 270 ₽;</li>
          <li>«Астра 6» — 150 660 ₽ и 186 660 ₽ соответственно;</li>
          <li>«Астра 8» — станция 169 920 ₽, под ключ 207 920 ₽.</li>
        </ul>
        <p>
          Точную сумму за работы для вашего участка инженер рассчитает после бесплатного выезда.
        </p>
        
        <h3>Почему «Честный септик» — надёжный подрядчик</h3>
        <p>Мы не просто продаём станции, а полностью сопровождаем установку:</p>
        <ol>
          <li>
            <strong>Подбор.</strong> Сравниваем модели, честно указываем ограничения и не навязываем лишнее.
          </li>
          <li>
            <strong>Монтаж.</strong> Работаем аккуратно: песчаная подушка, обсыпка, подключение компрессора, пуско-наладка.
          </li>
          <li>
            <strong>Гарантия.</strong> Заводская гарантия на станцию и наша гарантия на работы.
          </li>
          <li>
            <strong>Сервис.</strong> Остаёмся на связи для консультаций и обслуживания.
          </li>
        </ol>
        
        <h3>Установка септика «Астра» под ключ: итоговая смета</h3>
        <p>
          Стоимость монтажа «Астры» складывается из модели, глубины врезки и сложности грунта. В среднем работа по установке без оборудования начинается от 33 000 ₽. Вместе со станцией — от 150 630 ₽ для семьи из 3–4 человек.
        </p>
        
        <div className="article__callout">
          <p>
            Нужна «Астра» по заводской цене? Оставьте заявку или позвоните — инженер приедет на участок бесплатно.
          </p>
          <p>
            Подберём станцию, которая прослужит десятилетия и не потребует откачки.
          </p>
          <p>
            <strong>С «Честным септиком» вы получаете честную цену, честный подбор и спокойствие за вопрос отвода воды в своем доме.</strong>
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
          <span>Часто задаваемые вопросы</span> о септиках «Астра»
        </SectionTitle>
        <Faq />
      </Section>
    </>
  )
}

export default SeptikiAstra;