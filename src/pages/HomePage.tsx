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
          content="Tworzę nowoczesne strony internetowe dla firm — landing page, sklepy, WordPress, blogi. Pełna obsługa: domena, hosting, Google Ads, raporty ruchu."
        />
        <meta property="og:title" content="AddPattern — Strony internetowe dla biznesu" />
        <meta
          property="og:description"
          content="Od projektu po domenę i reklamy — prowadzę Twój biznes online na każdym kroku."
        />
        <meta property="og:type" content="website" />
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
