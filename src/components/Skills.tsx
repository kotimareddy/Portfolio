import { Monitor, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Monitor,
    title: 'Frontend',
    color: 'sky',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Next.js', 'Redux Toolkit', 'TailwindCSS', 'Ant Design', 'HTML5 / CSS3', 'Bootstrap', 'jQuery'],
  },
  {
    icon: Server,
    title: 'Backend',
    color: 'emerald',
    skills: ['Node.js', 'Express.js', '.NET', 'RESTful APIs', 'GraphQL'],
  },
  {
    icon: Database,
    title: 'Databases',
    color: 'amber',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    icon: Wrench,
    title: 'Tools & Other',
    color: 'rose',
    skills: ['Git', 'Docker', 'Jenkins', 'Postman', 'Vite', 'RBAC', 'Axios', 'Web Audio API', 'Agile/Scrum', 'Cloud Integration'],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; icon: string; badge: string }> = {
  sky: {
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
    text: 'text-sky-400',
    icon: 'text-sky-400',
    badge: 'bg-sky-500/10 border-sky-500/20 text-sky-300',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    icon: 'text-emerald-400',
    badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
  },
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-400',
    icon: 'text-amber-400',
    badge: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
  },
  rose: {
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    text: 'text-rose-400',
    icon: 'text-rose-400',
    badge: 'bg-rose-500/10 border-rose-500/20 text-rose-300',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">Technical Skills</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A comprehensive set of technologies I use to build end-to-end solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map(({ icon: Icon, title, color, skills }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                    <Icon size={18} className={c.icon} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-lg border text-xs font-medium ${c.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
