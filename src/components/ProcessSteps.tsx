import { motion } from "motion/react";
import { Clock, ArrowRight } from "lucide-react";
import { processSteps, sectionLabels } from "../config";

export default function ProcessSteps() {
  const labels = sectionLabels.process;

  return (
    <section
      id="so-arbeiten-wir"
      className="py-24 bg-brand-cream"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-olive font-bold uppercase tracking-widest mb-4 block">
            {labels.eyebrow}
          </span>
          <h2
            id="process-heading"
            className="font-serif text-4xl md:text-5xl mb-6"
          >
            {labels.title}
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            {labels.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-brand-olive/20 font-serif text-8xl font-bold absolute -top-4 -left-2">
                {step.number}
              </div>
              <div className="relative">
                <h3 className="font-serif text-2xl mb-4 mt-8">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 text-brand-olive text-sm font-medium">
                  <Clock className="size-4" aria-hidden="true" />
                  {step.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-brand-olive text-white px-8 py-4 rounded-full font-semibold hover:bg-stone-800 transition-all focus:outline-none focus:ring-2 focus:ring-brand-olive focus:ring-offset-2"
          >
            {labels.cta}
            <ArrowRight className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
