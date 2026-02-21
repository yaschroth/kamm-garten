import { business } from "../config";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-stone-200"
      role="navigation"
      aria-label="Hauptnavigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-olive focus:ring-offset-2 rounded-md"
          aria-label={`${business.name} - Zur Startseite`}
        >
          <img src={business.logo} alt={business.name} className="h-12" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <a
            href="#so-arbeiten-wir"
            className="hover:text-brand-olive transition-colors focus:outline-none focus:text-brand-olive"
          >
            Ablauf
          </a>
          <a
            href="#projekte"
            className="hover:text-brand-olive transition-colors focus:outline-none focus:text-brand-olive"
          >
            Projekte
          </a>
          <a
            href="#leistungen"
            className="hover:text-brand-olive transition-colors focus:outline-none focus:text-brand-olive"
          >
            Leistungen
          </a>
          <a
            href="#kontakt"
            className="bg-brand-olive text-white px-6 py-2.5 rounded-full hover:bg-stone-800 transition-all focus:outline-none focus:ring-2 focus:ring-brand-olive focus:ring-offset-2"
          >
            Kostenlos beraten
          </a>
        </div>
      </div>
    </nav>
  );
}
