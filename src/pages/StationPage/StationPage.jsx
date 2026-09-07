import {Helmet} from "react-helmet-async";
import StationPageInfo from "./StationPageInfo/StationPageInfo.jsx";
import StationPageHero from "./StationPageHero/StationPageHero.jsx";
import stationsData from '../../data/stationsData.json';
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import Callout from "../../components/Callout/Callout.jsx";
import {useGoToSection} from "../../hooks/useGoToSection.js";

const brandSlugMap = {
  'ЕВРОБИОН': 'evrobion',
  'ТОПАС': 'topas',
  'АСТРА': 'astra',
  'ЕВРОЛОС': 'evrolos',
  'ЗОРДЕ': 'zorde',
  'МАКС': 'maks',
};

function StationPage({ stationId  }) {
  
  const station = stationsData.find(s => s.id === stationId);
  
  if (!station) return <div>Станция не найдена</div>;
  
  const stationSlug = station.image
    .split('/')
    .pop()
    .replace(/\.(webp|png|jpg|jpeg)$/i, '');
  
  const pageUrl = `https://chestnyseptik.ru/${stationSlug}`;
  const brandSlug = brandSlugMap[station.brand] || station.brand.toLowerCase();
  const brandUrl = `https://chestnyseptik.ru/septiki-${brandSlug}`;
  
  const offers = [];
  if (station.price) {
    offers.push({
      '@type': 'Offer',
      price: station.price.replace(/\s/g, ''),
      priceCurrency: 'RUB',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      name: 'Станция',
    });
  }
  if (station.priceWithInstall) {
    offers.push({
      '@type': 'Offer',
      price: station.priceWithInstall.replace(/\s/g, ''),
      priceCurrency: 'RUB',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      name: 'Станция + монтаж под ключ',
    });
  }
  
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: station.name,
      image: `https://chestnyseptik.ru${station.image}`,
      description: `Автономный септик ${station.name} от производителя ${station.brand}. Установка под ключ, гарантия.`,
      brand: {
        '@type': 'Brand',
        name: station.brand,
      },
      offers: offers.length > 0 ? offers : undefined,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Главная',
          item: 'https://chestnyseptik.ru/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Каталог',
          item: 'https://chestnyseptik.ru/catalog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: station.brand,
          item: brandUrl,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: station.name,
          item: pageUrl,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Честный септик',
      url: 'https://chestnyseptik.ru/',
      telephone: '+7 812 920-46-60',
      email: 'chestnyseptik@yandex.ru',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Санкт-Петербург',
        addressCountry: 'RU',
      },
    },
  ];
  
  const goToSection = useGoToSection();
  
  return (
    <>
      <Helmet>
        <title>{`Септик ${station.name} в Санкт-Петербурге и ЛО — цена и характеристики | Честный септик`}</title>
        <meta name="description" content={`+7 (812) 920-46-60 Узнайте цену и харакретистики автономного септика ${station.name}, а мы установим под ключ по цене производителя!`} />
        {schema.map((item, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(item)}
          </script>
        ))}
      </Helmet>
      
      <StationPageHero
        stationName={station.name}
        stationImage={station.image}
      />
      <StationPageInfo
        station={station}
      />
      <Section>
        <SectionTitle variant="column">
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
  )
}

export default StationPage;

// <title> {
//   <>
//     Септик {stationName} — цена и характеристики | Честный септик
//   </>
// }</title>