import { User, Briefcase, Globe, Award } from 'lucide-react';

const stats = [
  { icon: Briefcase, label: 'Years Experience', value: '3+' },
  { icon: Globe, label: 'Industries Served', value: '5+' },
  { icon: Award, label: 'Projects Delivered', value: '15+' },
  { icon: User, label: 'Teams Led', value: 'Cross-func.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Crafting Digital<br />
              <span className="text-gradient">Experiences</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-5">
              I'm an experienced Full Stack Developer with 3+ years of hands-on experience designing,
              developing, and deploying scalable web applications. I work across the entire stack —
              from pixel-perfect React frontends to robust Node.js backends and PostgreSQL databases.
            </p>
            <p className="text-gray-400 leading-relaxed mb-5">
              Throughout my career at <span className="text-sky-400 font-medium">eArbor LLP</span>, I've delivered
              projects spanning E-Commerce, Logistics, Rental Services, HR Tech, and Music industries —
              always within deadlines and to client satisfaction.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm passionate about writing clean, maintainable code, mentoring junior developers,
              and aligning technical strategies with business objectives to deliver impactful, user-centric solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              {['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'RESTful APIs', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-gray-300 hover:border-sky-500/50 hover:text-sky-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4 w-full max-w-md">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 card-hover text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-sky-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
