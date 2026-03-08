import { useState } from "react";
import { Eye, X } from "lucide-react";
import { portfolioItems, categories } from "../data/portfolio";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const selected = portfolioItems.find((i) => i.id === selectedItem);

  return (
    <section id="gallery" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4">
            Thumbnail Gallery
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Browse through a curated selection of high-performing thumbnails designed for top finance creators.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-gray-800/50 bg-gray-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5"
            >
              {/* Thumbnail Preview */}
              <div
                className={`relative aspect-video bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Simulated thumbnail content */}
                <div className="absolute inset-0 bg-black/20" />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10 text-center px-6">
                  <span className="text-5xl mb-3 block">{item.icon}</span>
                  <h3 className="text-white font-black text-lg sm:text-xl leading-tight drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                    <Eye size={16} />
                    View Details
                  </div>
                </div>

                {/* Stats badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-semibold flex items-center gap-1.5">
                  <Eye size={12} />
                  {item.stats}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>

            <div
              className={`aspect-video bg-gradient-to-br ${selected.gradient} flex items-center justify-center relative`}
            >
              <div className="absolute inset-0 bg-black/20" />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative z-10 text-center px-8">
                <span className="text-7xl mb-4 block">{selected.icon}</span>
                <h3 className="text-white font-black text-2xl sm:text-4xl leading-tight drop-shadow-lg">
                  {selected.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                  {selected.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-1.5">
                  <Eye size={14} />
                  {selected.stats}
                </span>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
