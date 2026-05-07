import { useEffect, useState } from 'react';
import { Mail, MapPin, Download } from 'lucide-react';

const roles = [
  'Full Stack Developer',
  'React.js Expert',
  'Node.js Engineer',
  'TypeScript Enthusiast',
];

// Inline GitHub and LinkedIn SVGs to ensure they are always visible
const GithubIcon = ({ size = 20 }: { size?: number }) => (
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
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
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
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-12 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new opportunities
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 leading-none tracking-tighter">
              Koti <span className="text-gradient">Reddy</span>
            </h1>

            <div className="h-12 mb-8">
              <span className="text-3xl lg:text-4xl font-light text-gray-400">
                {displayed}
                <span className="animate-blink text-sky-400 font-bold">|</span>
              </span>
            </div>

            <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              Experienced Full Stack Developer with 3+ years building scalable web applications
              across E-Commerce, Logistics, HR Tech, and Music industries.
            </p>

            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start mb-12">
              <div className="flex items-center gap-2 text-gray-400 text-base">
                <MapPin size={18} className="text-sky-400" />
                Hyderabad, India
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-base">
                <Mail size={18} className="text-sky-400" />
                Ashokkumar@gmail.com
              </div>
            </div>

            <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/40 hover:-translate-y-1"
              >
                Explore Projects
              </a>
              <a
                href="/kotiReddy_resume.pdf"
                download="Koti_Reddy_Resume.pdf"
                className="px-8 py-4 rounded-2xl border-2 border-gray-700 hover:border-sky-500/50 text-gray-300 hover:text-white font-bold text-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            <div className="flex gap-5 mt-12 justify-center lg:justify-start">
              <a
                href="https://github.com/mareddykotireddy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-sky-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <GithubIcon size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/koti-mareddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-sky-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <LinkedinIcon size={22} />
              </a>
              <a
                href="mailto:mareddykotireddy1919@gmail.com"
                className="w-12 h-12 rounded-xl bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-sky-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Avatar / Visual */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] animate-float">
              {/* Outer glow rings */}
              <div className="absolute -inset-4 rounded-[40px] bg-sky-500/10 blur-2xl animate-pulse" />
              <div className="absolute -inset-8 rounded-[50px] bg-emerald-500/5 blur-3xl" />

              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-sky-500/20 to-emerald-500/20 border border-sky-500/20 animate-pulse-glow" />
              <div className="absolute inset-4 rounded-[24px] bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 overflow-hidden flex items-center justify-center shadow-2xl">
                <img
                  src="/image1.png"
                  alt="Koti Reddy"
                  className="w-full h-full object-cover object-top transition-all duration-700"
                />
              </div>

              {/* Floating Stat badges */}
              <div className="absolute -bottom-6 -left-6 bg-gray-950/90 backdrop-blur-md border border-gray-800 rounded-2xl px-6 py-4 shadow-2xl animate-fade-in group">
                <div className="text-3xl font-black text-white">3+</div>
                <div className="text-xs font-bold text-sky-400 uppercase tracking-widest">Years Exp.</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-gray-950/90 backdrop-blur-md border border-gray-800 rounded-2xl px-6 py-4 shadow-2xl animate-fade-in delay-100">
                <div className="text-3xl font-black text-emerald-400">15+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Projects</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-24">
          <a href="#about" className="flex flex-col items-center gap-3 text-gray-500 hover:text-sky-400 transition-colors group">
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-sky-400 rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
