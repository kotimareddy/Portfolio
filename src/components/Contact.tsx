import { Mail, Phone, MapPin } from 'lucide-react';

// Inline GitHub and LinkedIn SVGs for consistency
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

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
            Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/40 border border-gray-800 rounded-[2.5rem] p-10 lg:p-12 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-10 tracking-tight text-center">Contact Information</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group bg-gray-950/40 p-6 rounded-2xl border border-gray-800/50 transition-all duration-300 hover:border-sky-500/30">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/5 border border-sky-500/10 flex items-center justify-center text-sky-400 transition-all duration-300 group-hover:scale-110">
                  <Mail size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-gray-200 font-medium text-lg lg:text-xl">mareddykotireddy1919@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group bg-gray-950/40 p-6 rounded-2xl border border-gray-800/50 transition-all duration-300 hover:border-emerald-500/30">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center text-emerald-400 transition-all duration-300 group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-gray-200 font-medium text-lg lg:text-xl">9542540010</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group bg-gray-950/40 p-6 rounded-2xl border border-gray-800/50 transition-all duration-300 hover:border-amber-500/30">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-center justify-center text-amber-400 transition-all duration-300 group-hover:scale-110">
                  <MapPin size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-gray-200 font-medium text-lg lg:text-xl">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-gray-800">
              <p className="text-gray-400 font-bold text-sm mb-6 uppercase tracking-widest text-center">Find me online</p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/mareddykotireddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gray-950 border border-gray-800 hover:border-sky-500/30 text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <GithubIcon size={22} />
                  <span className="font-bold">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/koti-mareddy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gray-950 border border-gray-800 hover:border-sky-500/30 text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <LinkedinIcon size={22} />
                  <span className="font-bold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
