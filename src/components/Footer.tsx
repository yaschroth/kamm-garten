import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { business, contact, awards, legalLinks } from "../config";

export default function Footer() {
  return (
    <footer
      id="kontakt"
      className="bg-stone-900 text-white pt-24 pb-12"
      role="contentinfo"
      aria-label="Kontakt und Unternehmensinformationen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={business.logo} alt={business.name} className="h-12" />
            </div>
            <p className="text-stone-400 mb-6 max-w-md">
              {business.description}
            </p>
            <div className="flex gap-4">
              {contact.social.instagram && (
                <a
                  href={contact.social.instagram}
                  className="size-12 rounded-full border border-stone-700 flex items-center justify-center hover:bg-brand-olive hover:border-brand-olive transition-all focus:outline-none focus:ring-2 focus:ring-brand-olive"
                  aria-label="Folgen Sie uns auf Instagram"
                >
                  <Instagram className="size-5" aria-hidden="true" />
                </a>
              )}
              {contact.social.facebook && (
                <a
                  href={contact.social.facebook}
                  className="size-12 rounded-full border border-stone-700 flex items-center justify-center hover:bg-brand-olive hover:border-brand-olive transition-all focus:outline-none focus:ring-2 focus:ring-brand-olive"
                  aria-label="Folgen Sie uns auf Facebook"
                >
                  <Facebook className="size-5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-sm mb-6">
              Kontakt
            </h5>
            <ul className="space-y-4 text-stone-400" role="list">
              <li className="flex gap-3">
                <MapPin
                  className="size-5 shrink-0 text-brand-olive"
                  aria-hidden="true"
                />
                <address className="not-italic">
                  {contact.address.street}
                  <br />
                  {contact.address.city}
                </address>
              </li>
              <li className="flex gap-3">
                <Phone
                  className="size-5 shrink-0 text-brand-olive"
                  aria-hidden="true"
                />
                <a
                  href={contact.phoneLink}
                  className="hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail
                  className="size-5 shrink-0 text-brand-olive"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white transition-colors focus:outline-none focus:underline"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-brand-olive/20 rounded-lg">
              <div className="flex items-center gap-2 text-brand-olive text-sm font-medium">
                <Clock className="size-4" aria-hidden="true" />
                Antwort innerhalb {contact.responseTime}
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-sm mb-6">
              Öffnungszeiten
            </h5>
            <ul className="space-y-3 text-stone-400">
              <li className="flex justify-between">
                <span>Mo - Fr</span>
                <span>{contact.hours.weekdays}</span>
              </li>
              <li className="flex justify-between">
                <span>Sa</span>
                <span>{contact.hours.saturday}</span>
              </li>
              <li className="flex justify-between">
                <span>So</span>
                <span>{contact.hours.sunday}</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-stone-800">
              <div className="text-sm text-stone-500 mb-2">Zertifizierungen</div>
              <div className="flex flex-wrap gap-2">
                {awards.map((award, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-stone-800 px-3 py-1 rounded-full"
                  >
                    {award.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6 text-stone-500 text-sm">
          <p>
            © {new Date().getFullYear()} {business.name}.
            Alle Rechte vorbehalten.
          </p>
          <nav aria-label="Rechtliche Links" className="flex gap-8">
            {legalLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-white transition-colors focus:outline-none focus:underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
