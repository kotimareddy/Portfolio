import { Code2, BarChart2, Cloud, Database, Wrench, TrendingUp } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming & Querying',
    color: 'sky',
    skills: ['SQL (Advanced)', 'CTEs', 'Window Functions', 'Stored Procedures', 'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'R'],
  },
  {
    icon: BarChart2,
    title: 'Data Visualization & BI',
    color: 'emerald',
    skills: ['Power BI', 'Tableau', 'Looker', 'Excel (Power Query)', 'Pivot Tables', 'IBM Cognos'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Big Data',
    color: 'teal',
    skills: ['AWS S3', 'AWS Redshift', 'AWS Glue', 'AWS Lambda', 'Azure Data Factory', 'Azure Synapse', 'Google BigQuery', 'Snowflake', 'Apache Spark'],
  },
  {
    icon: Wrench,
    title: 'CRM & Business Systems',
    color: 'amber',
    skills: ['Salesforce', 'Zoho CRM', 'HubSpot', 'ServiceNow', 'Jira', 'Confluence'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    color: 'rose',
    skills: ['ETL Pipelines', 'Data Modeling', 'Data Warehousing', 'Data Governance', 'Data Quality'],
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Techniques',
    color: 'cyan',
    skills: ['Predictive Modeling', 'Machine Learning', 'A/B Testing', 'Time Series Forecasting', 'Statistical Analysis', 'RevOps', 'Customer Analytics'],
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
  teal: {
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
    text: 'text-teal-400',
    icon: 'text-teal-400',
    badge: 'bg-teal-500/10 border-teal-500/20 text-teal-300',
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
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    icon: 'text-cyan-400',
    badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
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
            A comprehensive skill set spanning analytics, engineering, and business intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
