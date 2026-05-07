import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'eArbor LLP',
    period: 'March 2022 – Present',
    location: 'Hyderabad, Telangana',
    highlights: [
      'Led end-to-end development of multiple full stack projects spanning React.js, TypeScript, Node.js, Express.js, and PostgreSQL layers.',
      'Architected RESTful APIs and managed database schemas, ensuring high performance, scalability, and data integrity across all projects.',
      'Delivered projects across E-Commerce, Logistics, Rental Services, HR Tech, and Fashion industries — all within deadlines and to client satisfaction.',
      'Mentored junior developers, conducted code reviews, and enforced best practices for code quality and maintainability.',
      'Collaborated with UI/UX, QA, and backend teams to align development strategies with business goals.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">Career</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-sky-500/50 to-transparent hidden md:block" />

          {experiences.map((exp, i) => (
            <div key={i} className="relative flex gap-8 mb-8">
              {/* Timeline dot */}
              <div className="hidden md:flex flex-shrink-0 w-16 justify-center">
                <div className="w-4 h-4 rounded-full bg-sky-400 border-4 border-gray-950 mt-6 z-10 animate-pulse-glow" />
              </div>

              <div className="flex-1 bg-gray-800/40 border border-gray-700 rounded-2xl p-6 lg:p-8 card-hover">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-1.5 text-sky-400 font-medium">
                      <Briefcase size={14} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 text-right">
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm justify-end">
                      <Calendar size={13} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm justify-end">
                      <MapPin size={13} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                      <CheckCircle size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
