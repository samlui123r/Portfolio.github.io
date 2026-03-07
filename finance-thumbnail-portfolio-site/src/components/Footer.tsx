import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center text-white font-black text-xs">
              CC
            </div>
            <span className="text-white font-bold text-lg">
              Click<span className="text-emerald-400">Craft</span> Studios
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["Home", "Gallery", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> © 2024
          </div>
        </div>
      </div>
    </footer>
  );
}
