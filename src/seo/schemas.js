const telegram = 'https://t.me/ChestnySeptik';
const whatsapp = 'https://wa.me/79119204660';

export function getArticleSchema({
                                   headline,
                                   description,
                                   url,
                                   image,
                                   datePublished,
                                   dateModified = datePublished,
                                   authorName = 'Честный септик',
                                   publisherName = 'Честный септик',
                                   section = 'Автономные септики',
                                 }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Organization',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: 'https://chestnyseptik.ru/logo.svg',
      },
      sameAs: [
        telegram,
        whatsapp
      ],
    },
    datePublished,
    dateModified,
    articleSection: section,
  };
}

export function getServiceSchema({
                                   name = 'Установка септика',
                                   serviceType = 'Монтаж автономных септиков',
                                   description = '',
                                   telephone = '+7 812 920-46-60',
                                   email = 'chestnyseptik@yandex.ru',
                                   region = 'Санкт-Петербург и Ленинградская область',
                                   url = 'https://chestnyseptik.ru',
                                   image = 'https://chestnyseptik.ru/logo.svg',
                                 }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Честный септик',
      telephone,
      email,
      address: {
        '@type': 'PostalAddress',
        addressRegion: region,
      },
      sameAs: [
        telegram,
        whatsapp
      ],
    },
    areaServed: {
      '@type': 'City',
      name: region,
    },
    url,
    image,
  };
}