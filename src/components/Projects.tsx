import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { projects, sectionLabels } from "../config";

export default function Projects() {
  const labels = sectionLabels.projects;

  return (
    <section
      id="projekte"
      className="py-24 bg-brand-cream"
      aria-labelledby="projekte-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-olive font-bold uppercase tracking-widest mb-4 block">
              {labels.eyebrow}
            </span>
            <h2
              id="projekte-heading"
              className="font-serif text-4xl md:text-5xl mb-6"
            >
              {labels.title}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              {labels.subtitle}
            </p>
          </div>
          <a
            href="#"
            className="text-brand-olive font-semibold border-b-2 border-brand-olive pb-1 hover:text-stone-900 hover:border-stone-900 transition-all whitespace-nowrap"
          >
            {labels.viewAll}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} in ${project.location}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 group-hover:from-black/70 transition-colors duration-300" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest font-bold bg-brand-olive/90 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-2xl group-hover:text-brand-olive transition-colors">
                {project.title}
              </h3>
              <p className="text-stone-500 text-sm mt-1 flex items-center gap-1">
                <MapPin className="size-3" aria-hidden="true" />
                {project.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
