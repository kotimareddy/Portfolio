import { TrendingUp, Briefcase, Globe, Award } from 'lucide-react';

const stats = [
  { icon: Briefcase, label: 'Years Experience', value: '4+' },
  { icon: Globe, label: 'Industries', value: '3+' },
  { icon: TrendingUp, label: 'Revenue Saved', value: '$1.2M' },
  { icon: Award, label: 'Forecast Accuracy', value: '94%' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Turning Data Into<br />
              <span className="text-gradient">Business Impact</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-5">
              I'm a results-driven Senior Data Analyst with 4+ years of experience delivering scalable
              analytics solutions across SaaS, networking, and enterprise technology domains. I specialise
              in data modeling, predictive analytics, and CRM intelligence.
            </p>
            <p className="text-gray-400 leading-relaxed mb-5">
              My career spans industry leaders — <span className="text-sky-400 font-medium">IBM</span>,{' '}
              <span className="text-sky-400 font-medium">Cisco</span>, and{' '}
              <span className="text-sky-400 font-medium">Zoho Corporation</span> — where I've partnered
              with product, sales, and marketing teams to optimise customer lifecycles, revenue forecasting,
              and retention strategies.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm passionate about building modern data pipelines, implementing data governance frameworks,
              and enabling self-service BI ecosystems that empower organisations to make faster, smarter decisions.
            </p>

            <div className="flex flex-wrap gap-3">
              {['SQL', 'Python', 'Power BI', 'Tableau', 'AWS', 'Azure', 'Snowflake'].map((tech) => (
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
