import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import Hero from '../sections/Hero'
import Offer from '../sections/Offer'
import Portfolio from '../sections/Portfolio'
import Process from '../sections/Process'
import Contact from '../sections/Contact'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>AddPattern — Strony internetowe dla biznesu</title>
        <meta
          name="description"
          content="Tworzę strony internetowe dla firm — wizytówki, landing page, sklepy, WordPress, blogi. Domena, hosting, reklamy i wsparcie — AddPattern."
        />
        <link rel="canonical" href="https://addpattern.pl/" />
        <meta property="og:site_name" content="AddPattern" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:url" content="https://addpattern.pl/" />
        <meta property="og:title" content="AddPattern — Strony internetowe dla biznesu" />
        <meta
          property="og:description"
          content="Od projektu po domenę, hosting i reklamy — prowadzę Twój biznes online na każdym kroku."
        />
        <meta property="og:image" content="https://addpattern.pl/og-image.png" />
        <meta property="og:image:width" content="1536" />
        <meta property="og:image:height" content="1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AddPattern — Strony internetowe dla biznesu" />
        <meta
          name="twitter:description"
          content="Od projektu po domenę, hosting i reklamy — prowadzę Twój biznes online na każdym kroku."
        />
        <meta name="twitter:image" content="https://addpattern.pl/og-image.png" />
        <html lang={t('nav.offer') === 'Services' ? 'en' : 'pl'} />
      </Helmet>

      <main>
        <Hero />
        <Offer />
        <Portfolio />
        <Process />
        <Contact />
      </main>
    </>
  )
}
