import { useState, type FormEvent } from "react";
import { Send, Mail, MessageSquare, User, Youtube, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    channel: "",
    message: "",
    budget: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", channel: "", message: "", budget: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-widest">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3 mb-4">
              Let's Create
              <br />
              <span className="text-emerald-400">Something Great</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Ready to level up your channel's thumbnails? Fill out the form and I'll get back
              to you within 24 hours with a custom quote.
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              {[
                {
                  icon: <Mail className="text-emerald-400" size={20} />,
                  label: "Email",
                  value: "hello@clickcraftstudios.com",
                },
                {
                  icon: <MessageSquare className="text-cyan-400" size={20} />,
                  label: "Discord",
                  value: "ClickCraft#1234",
                },
                {
                  icon: <Youtube className="text-red-400" size={20} />,
                  label: "Response Time",
                  value: "Usually within 24 hours",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-white text-sm font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing hint */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/10">
              <h4 className="text-white font-bold mb-2">💰 Pricing Starts at $35/thumbnail</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Package deals available for recurring clients. Volume discounts for bulk orders.
                All packages include unlimited revisions and A/B testing variants.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <div className="p-6 sm:p-8 rounded-2xl bg-gray-800/20 border border-gray-700/30">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full pl-11 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full pl-11 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Channel */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      YouTube Channel URL
                    </label>
                    <div className="relative">
                      <Youtube
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      />
                      <input
                        type="text"
                        value={formData.channel}
                        onChange={(e) =>
                          setFormData({ ...formData, channel: e.target.value })
                        }
                        placeholder="youtube.com/@yourchannel"
                        className="w-full pl-11 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Monthly Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-colors appearance-none"
                    >
                      <option value="" className="bg-gray-900">Select a range</option>
                      <option value="100-300" className="bg-gray-900">$100 - $300/month</option>
                      <option value="300-500" className="bg-gray-900">$300 - $500/month</option>
                      <option value="500-1000" className="bg-gray-900">$500 - $1,000/month</option>
                      <option value="1000+" className="bg-gray-900">$1,000+/month</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tell Me About Your Project
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your channel, content style, and what you're looking for..."
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-gray-950 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl hover:from-emerald-300 hover:to-cyan-300 transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
