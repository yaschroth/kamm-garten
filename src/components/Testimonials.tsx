import { motion } from "motion/react";
import { Star, ArrowRight } from "lucide-react";
import { testimonials, reviewsLink, sectionLabels } from "../config";

export default function Testimonials() {
  const labels = sectionLabels.testimonials;

  return (
    <section
      className="py-24 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-olive font-bold uppercase tracking-widest mb-4 block">
            {labels.eyebrow}
          </span>
          <h2
            id="testimonials-heading"
            className="font-serif text-4xl md:text-5xl mb-6"
          >
            {labels.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-cream rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 text-yellow-500 fill-yellow-500"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="text-stone-700 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-stone-200 pt-6">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-stone-500 text-sm">
                  {testimonial.location} | {testimonial.project}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={reviewsLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-olive font-semibold hover:underline"
          >
            {reviewsLink.text}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
