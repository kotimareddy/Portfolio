import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, ArrowDown, Download } from 'lucide-react';

const Linkedin = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


const roles = [
  'Senior Data Analyst',
  'BI & Analytics Expert',
  'Predictive Modeling Specialist',
  'Data Strategy Partner',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Malavika<br />
              <span className="text-gradient">Tanneeru</span>
            </h1>

            <div className="h-10 mb-6">
              <span className="text-2xl lg:text-3xl font-light text-gray-300">
                {displayed}
                <span className="animate-blink text-sky-400">|</span>
              </span>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Results-driven Senior Data Analyst with 4+ years of experience delivering scalable
              analytics solutions across SaaS, networking, and enterprise technology domains.
            </p>

            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-10">
              <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                <MapPin size={14} className="text-sky-400" />
                New Jersey, USA
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                <Mail size={14} className="text-sky-400" />
                malavikatanneeru5@gmail.com
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                <Phone size={14} className="text-sky-400" />
                +1 (201) 927-0345
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/30 hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="/Malavika_T__Resume.pdf"
                download
                className="px-6 py-3 rounded-xl border border-gray-700 hover:border-sky-500/50 text-gray-300 hover:text-white font-medium transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/malavika-tanneeru"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-sky-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:malavikatanneeru5@gmail.com"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-sky-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Avatar / Visual */}
          <div className="flex-shrink-0">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/20 to-emerald-500/20 border border-sky-500/20 animate-pulse-glow" />
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 overflow-hidden flex items-center justify-center">
                <img
                  src="/photo.jpeg"
                  alt="Malavika Tanneeru"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Stat badges */}
              <div className="absolute bottom-2 left-2 bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 shadow-xl">
                <div className="text-xl font-bold text-white">4+</div>
                <div className="text-xs text-gray-400">Years Exp.</div>
              </div>
              <div className="absolute top-2 right-2 bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 shadow-xl">
                <div className="text-xl font-bold text-teal-400">3</div>
                <div className="text-xs text-gray-400">Companies</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-sky-400 transition-colors group">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
