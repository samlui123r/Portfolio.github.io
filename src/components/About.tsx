import { Palette, Zap, BarChart3, Clock, CheckCircle2 } from "lucide-react";

const skills = [
  {
    icon: <Palette className="text-emerald-400" size={24} />,
    title: "Design Mastery",
    description:
      "Expert in Photoshop, Figma, and After Effects. Pixel-perfect designs that look incredible at any size.",
  },
  {
    icon: <BarChart3 className="text-cyan-400" size={24} />,
    title: "Finance Niche Expert",
    description:
      "Deep understanding of trading, investing, and crypto aesthetics. I know what makes finance viewers click.",
  },
  {
    icon: <Zap className="text-amber-400" size={24} />,
    title: "CTR Optimization",
    description:
      "Data-driven design decisions backed by A/B testing. Average CTR increase of 180% for my clients.",
  },
  {
    icon: <Clock className="text-violet-400" size={24} />,
    title: "Fast Turnaround",
    description:
      "24-48 hour delivery on most projects. Rush orders available for time-sensitive content.",
  },
];

const highlights = [
  "3+ years specializing in finance thumbnails",
  "Worked with channels from 10K to 5M+ subscribers",
  "A/B testing included with every design",
  "Unlimited revisions until you're satisfied",
  "Consistent brand identity across your channel",
  "Understanding of YouTube algorithm & CTR",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4">
            Why Work With Me?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I'm not just a designer — I'm a YouTube growth partner who understands the
            finance niche inside and out.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - About text */}
          <div>
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gray-950/50" />
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="relative z-10 text-center px-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/20">
                    <span className="text-4xl font-black text-white">CC</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">ClickCraft Studios</h3>
                  <p className="text-emerald-400 font-medium mb-6">Thumbnail Designer & CTR Strategist</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Photoshop", "Figma", "After Effects", "Canva Pro"].map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 bg-gray-800/80 text-gray-300 text-xs rounded-full border border-gray-700/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Highlights */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Helping Finance Creators <span className="text-emerald-400">Stand Out</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              I started designing thumbnails after noticing how much potential revenue finance
              YouTubers were leaving on the table with poor visual presentation. Since then,
              I've helped over 50 channels dramatically increase their click-through rates and grow
              their audiences with strategic, eye-catching thumbnail design.
            </p>

            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 rounded-2xl bg-gray-800/30 border border-gray-700/30 hover:border-emerald-500/20 transition-all group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h4 className="text-white font-bold text-lg mb-2">{skill.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
