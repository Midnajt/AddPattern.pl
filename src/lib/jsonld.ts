const SITE = 'https://addpattern.pl'

const organization = {
  '@type': 'ProfessionalService',
  '@id': `${SITE}/#business`,
  name: 'AddPattern',
  url: `${SITE}/`,
  image: `${SITE}/og-image.jpg`,
  logo: `${SITE}/logo.png`,
  email: 'kontakt@addpattern.pl',
  description:
    'Strony internetowe dla firm — wizytówki, landing page, sklepy, WordPress. Domena, hosting, reklamy i wsparcie.',
  areaServed: {
    '@type': 'Country',
    name: 'Poland',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Warszawa',
    addressCountry: 'PL',
  },
  founder: { '@id': `${SITE}/#person` },
}

const person = {
  '@type': 'Person',
  '@id': `${SITE}/#person`,
  name: 'Marcin Krzysztoszek',
  jobTitle: 'Web Developer',
  url: `${SITE}/dla-devow`,
  image: `${SITE}/avatar.png`,
  email: 'kontakt@addpattern.pl',
  worksFor: { '@id': `${SITE}/#business` },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Warszawa',
    addressCountry: 'PL',
  },
}

export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [organization, person],
}

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [person, organization],
}
