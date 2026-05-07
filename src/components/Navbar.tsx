import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-gray-950/90 backdrop-blur-lg border-b border-sky-500/20 shadow-2xl shadow-sky-500/10'
          : 'bg-gray-950/30 backdrop-blur-md border-b border-white/5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-12 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform">
            <Code2 size={20} className="text-gray-950" />
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            Koti<span className="text-sky-400">Reddy</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-semibold text-gray-300 hover:text-sky-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/30 hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-950/98 backdrop-blur-xl border-b border-gray-800 px-6 py-6 flex flex-col gap-5 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-sky-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-base px-5 py-3 rounded-xl bg-sky-500 text-white font-bold text-center shadow-lg shadow-sky-500/20"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
