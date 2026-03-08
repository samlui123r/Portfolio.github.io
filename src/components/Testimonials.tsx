import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/portfolio";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4">
            What Creators Say
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Trusted by top finance YouTubers to deliver thumbnails that perform.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-emerald-500/20 transition-all group"
            >
              <Quote size={32} className="text-emerald-500/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-800/50">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-emerald-500/10">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">
                    {t.channel} • {t.subscribers}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
