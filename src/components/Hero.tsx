import { motion } from "motion/react";
import { Star, ArrowRight, Phone, Award, ChevronRight } from "lucide-react";
import { hero, awards, contact } from "../config";

export default function Hero() {
  return (
    <main id="main-content">
      <section
        className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden"
        aria-label="Willkommen"
      >
        <div
          className="absolute inset-0 z-0 parallax-hero"
          role="img"
          aria-label="Professionell gestalteter Garten mit Terrasse und Bepflanzung"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.55)), url('${hero.backgroundImage}')`,
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">
              {hero.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6"
          >
            {hero.headline}
            <br />
            <span className="italic">{hero.headlineAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 bg-white text-stone-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-olive hover:text-white transition-all group focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              {hero.primaryCTA}
              <ArrowRight
                className="size-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </a>
            <a
              href={contact.phoneLink}
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              <Phone className="size-5" aria-hidden="true" />
              {hero.secondaryCTA}
            </a>
          </motion.div>

          {/* Awards Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-white/70 text-sm"
              >
                <Award className="size-4" aria-hidden="true" />
                <span>
                  {award.name} {award.year}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50"
          aria-hidden="true"
        >
          <ChevronRight className="size-8 rotate-90" />
        </div>
      </section>
    </main>
  );
}
