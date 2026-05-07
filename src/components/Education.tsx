import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    icon: GraduationCap,
    degree: 'Bachelor of Technology – Computer Science Engineering',
    institution: 'Qis College of Engineering and Technology',
    location: 'Andhra Pradesh',
    color: 'sky',
  },
  {
    icon: BookOpen,
    degree: '12th – Science Stream (HSC)',
    institution: 'Bhashyam IIT-JEE Junior College',
    location: 'Guntur, Andhra Pradesh',
    color: 'emerald',
  },
];

const colorMap: Record<string, { bg: string; border: string; icon: string }> = {
  sky: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', icon: 'text-sky-400' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', icon: 'text-emerald-400' },
};

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map(({ icon: Icon, degree, institution, location, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={degree}
                className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 card-hover"
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={c.icon} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 leading-snug">{degree}</h3>
                <p className="text-sky-400 text-sm font-medium mb-1">{institution}</p>
                <p className="text-gray-500 text-sm">{location}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
