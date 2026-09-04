import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Nie znaleziono strony — AddPattern</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <main
        id="main-content"
        className="section-padding min-h-[70vh] flex flex-col items-center justify-center text-center pt-32 pb-28"
      >
        <p className="font-display text-sm font-semibold text-brand-primary mb-3">404</p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
          Nie ma takiej strony
        </h1>
        <p className="font-body text-text-secondary mb-8 max-w-md">
          Ten adres nie istnieje albo został przeniesiony. Wróć na stronę główną.
        </p>
        <Link
          to="/"
          className="px-8 py-3 rounded-2xl font-display font-bold text-surface-bg bg-brand-gradient shadow-glow"
        >
          Strona główna
        </Link>
      </main>
    </>
  )
}