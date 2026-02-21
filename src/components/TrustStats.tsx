import { motion } from "motion/react";
import { stats } from "../config";

export default function TrustStats() {
  return (
    <section
      className="py-20 bg-white border-b border-stone-100"
      aria-label="Unsere Erfolge in Zahlen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-5xl md:text-6xl font-light text-brand-olive mb-2">
                {stat.value}
              </div>
              <div className="text-stone-500 text-sm uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
