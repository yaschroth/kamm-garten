import { motion } from "motion/react";
import {
  PenTool,
  Shield,
  Leaf,
  Droplets,
  Users,
  Scissors,
} from "lucide-react";
import { services, sectionLabels, ServiceIcon } from "../config";

const iconMap: Record<ServiceIcon, typeof PenTool> = {
  PenTool: PenTool,
  Grid3X3: Shield,
  Flower2: Leaf,
  Droplets: Droplets,
  Fence: Users,
  Scissors: Scissors,
};

export default function Services() {
  const labels = sectionLabels.services;

  return (
    <section
      id="leistungen"
      className="py-24 bg-white"
      aria-labelledby="leistungen-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-olive font-bold uppercase tracking-widest mb-4 block">
            {labels.eyebrow}
          </span>
          <h2
            id="leistungen-heading"
            className="font-serif text-4xl md:text-5xl mb-6"
          >
            {labels.title}
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            {labels.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-brand-cream rounded-2xl p-8 hover:bg-brand-olive hover:text-white transition-all duration-300 cursor-pointer"
              >
                <div className="size-14 rounded-full bg-white/80 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                  <Icon className="size-6 text-brand-olive group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                <p className="text-stone-600 group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
