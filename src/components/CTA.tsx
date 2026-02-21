import { ArrowRight, Phone } from "lucide-react";
import { cta, contact } from "../config";

export default function CTA() {
  return (
    <section
      className="py-24 bg-brand-olive text-white"
      aria-label="Kontakt aufnehmen"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">{cta.headline}</h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          {cta.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-3 bg-white text-stone-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-stone-100 transition-all focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            {cta.primaryButton}
            <ArrowRight className="size-5" aria-hidden="true" />
          </a>
          <a
            href={contact.phoneLink}
            className="inline-flex items-center justify-center gap-3 border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            <Phone className="size-5" aria-hidden="true" />
            {cta.secondaryButton}
          </a>
        </div>
      </div>
    </section>
  );
}
