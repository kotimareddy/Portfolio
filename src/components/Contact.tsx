import { Mail, Phone, MapPin } from 'lucide-react';

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

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Card Based Contact Info (Matches Screenshot) */}
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white text-center mb-10 tracking-tight">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              {/* Email */}
              <a
                href="mailto:malavikatanneeru5@gmail.com"
                className="flex items-center gap-5 p-5 rounded-2xl bg-gray-900/50 border border-gray-700/30 hover:border-sky-500/30 hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                  <Mail size={22} className="text-sky-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Email</div>
                  <div className="text-base text-gray-200 group-hover:text-white transition-colors break-all">
                    malavikatanneeru5@gmail.com
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+12019270345"
                className="flex items-center gap-5 p-5 rounded-2xl bg-gray-900/50 border border-gray-700/30 hover:border-emerald-500/30 hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Phone size={22} className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Phone</div>
                  <div className="text-base text-gray-200 group-hover:text-white transition-colors">
                    +1 (201) 927-0345
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-gray-900/50 border border-gray-700/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <MapPin size={22} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Location</div>
                  <div className="text-base text-gray-200">
                    New Jersey, USA
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-700/50 text-center">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">Find me online</h4>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/malavika-tanneeru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gray-900 border border-gray-700 hover:border-sky-500/50 text-gray-400 hover:text-white text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-sky-500/10"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-gray-800/50 text-center">
        <p className="text-gray-500 text-sm font-medium tracking-wide">
          <span className="text-sky-400">Malavika Tanneeru</span> — Senior Data Analyst
        </p>
      </div>
    </section>
  );
}
