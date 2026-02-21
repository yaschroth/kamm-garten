import { motion } from "motion/react";
import { Check } from "lucide-react";
import { whyChooseUs, sectionLabels, business } from "../config";

export default function WhyChooseUs() {
  const labels = sectionLabels.whyUs;

  return (
    <section
      className="py-24 bg-stone-900 text-white"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-olive font-bold uppercase tracking-widest mb-4 block">
            {labels.eyebrow.replace("GrünWerk", business.name)}
          </span>
          <h2
            id="why-us-heading"
            className="font-serif text-4xl md:text-5xl mb-6"
          >
            {labels.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-4"
            >
              <div className="shrink-0">
                <div className="size-12 rounded-full bg-brand-olive/20 flex items-center justify-center">
                  <Check
                    className="size-6 text-brand-olive"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
