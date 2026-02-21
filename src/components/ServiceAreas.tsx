import { serviceAreas, serviceAreasImage, sectionLabels } from "../config";

export default function ServiceAreas() {
  const labels = sectionLabels.areas;

  return (
    <section
      className="py-24 bg-stone-900 text-white"
      aria-labelledby="areas-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-olive font-bold uppercase tracking-widest mb-4 block">
              {labels.eyebrow}
            </span>
            <h2
              id="areas-heading"
              className="font-serif text-4xl md:text-5xl mb-6"
            >
              {labels.title}
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              {labels.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="bg-white/10 px-4 py-2 rounded-full text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={serviceAreasImage}
              alt="Professionelle Gartenarbeit"
              className="rounded-2xl w-full"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-olive text-white p-6 rounded-2xl">
              <div className="text-3xl font-serif font-bold">{labels.badge}</div>
              <div className="text-sm opacity-80">{labels.badgeLabel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
