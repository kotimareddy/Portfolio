import { GraduationCap, Award, BadgeCheck } from 'lucide-react';

const education = [
  {
    icon: GraduationCap,
    degree: "Master's in Business Analytics",
    institution: 'Wayland Baptist University',
    location: 'USA',
    period: 'Dec 2025',
    color: 'sky',
  },
];

const certifications = [
  {
    icon: BadgeCheck,
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    credential: 'AZ-900',
    color: 'teal',
  },
  {
    icon: Award,
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte',
    credential: 'Verified Completion',
    color: 'emerald',
  },
  {
    icon: BadgeCheck,
    title: 'Data Specialist Volunteer',
    issuer: 'DESK Community Service',
    credential: 'Volunteer Recognition',
    color: 'amber',
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string }> = {
  sky: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', icon: 'text-sky-400' },
  teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/20', icon: 'text-teal-400' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', icon: 'text-emerald-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', icon: 'text-amber-400' },
};

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Education &amp; <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <h3 className="text-lg font-semibold text-gray-300 mb-5 flex items-center gap-2">
            <GraduationCap size={18} className="text-sky-400" />
            Education
          </h3>
          <div className="grid grid-cols-1 gap-4 mb-12">
            {education.map(({ icon: Icon, degree, institution, location, period, color }) => {
              const c = colorMap[color];
              return (
                <div
                  key={degree}
                  className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 card-hover flex items-start gap-5"
                >
                  <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={22} className={c.icon} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1 leading-snug">{degree}</h4>
                    <p className="text-sky-400 text-sm font-medium mb-1">{institution}</p>
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <span>{location}</span>
                      <span>·</span>
                      <span>{period}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications */}
          <h3 className="text-lg font-semibold text-gray-300 mb-5 flex items-center gap-2">
            <Award size={18} className="text-teal-400" />
            Certifications &amp; Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map(({ icon: Icon, title, issuer, credential, color }) => {
              const c = colorMap[color];
              return (
                <div
                  key={title}
                  className="bg-gray-800/30 border border-gray-700 rounded-2xl p-5 card-hover"
                >
                  <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                    <Icon size={18} className={c.icon} />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1 leading-snug">{title}</h4>
                  <p className={`text-sm font-medium mb-1 ${c.icon}`}>{issuer}</p>
                  <p className="text-xs text-gray-500">{credential}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
