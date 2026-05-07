import { useState } from 'react';
import { ChevronDown, ChevronUp, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise BI Dashboard Suite – IBM',
    category: 'Enterprise Analytics',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'End-to-end Power BI dashboard ecosystem for Fortune 500 clients, transforming raw enterprise data into executive-ready intelligence.',
    highlights: [
      'Designed and deployed enterprise-grade Power BI dashboards improving executive decision-making speed by 35%.',
      'Built scalable ETL pipelines via SQL and AWS Redshift reducing data processing time by 50%.',
      'Implemented self-service BI solutions, cutting stakeholder reporting turnaround by 40%.',
      'Led data governance initiatives, reducing data quality issues by 60% via anomaly detection frameworks.',
    ],
    tech: ['Power BI', 'SQL', 'AWS Redshift', 'IBM Cloud', 'ETL', 'Data Governance'],
    color: 'sky',
    impact: '35% faster decisions',
  },
  {
    title: 'Revenue Forecasting Engine – IBM',
    category: 'Predictive Analytics',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Machine learning-based revenue forecasting system achieving 94% accuracy, enabling proactive sales strategy and resource planning.',
    highlights: [
      'Developed predictive analytics models using Python (Scikit-learn) to forecast revenue with 94% accuracy.',
      'Integrated model outputs into live dashboards for real-time executive review.',
      'Partnered with CRM and sales teams to optimise pipeline visibility and customer segmentation.',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Salesforce', 'Power BI'],
    color: 'emerald',
    impact: '94% forecast accuracy',
  },
  {
    title: 'Network Performance Analytics – Cisco',
    category: 'Network Analytics',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Real-time network monitoring and predictive maintenance platform processing 500K+ daily events to minimise downtime across global infrastructure.',
    highlights: [
      'Built dashboards analysing 500K+ daily network events, reducing downtime by 28%.',
      'Developed predictive maintenance models forecasting failures 48 hours in advance.',
      'Automated Python-based reporting with ServiceNow integration, cutting reporting time by 45%.',
      'Translated technical data into business-friendly views, boosting adoption by 70%.',
    ],
    tech: ['Python', 'SQL', 'Tableau', 'ServiceNow', 'Predictive Modeling', 'ETL'],
    color: 'teal',
    impact: '$1.2M annual savings',
  },
  {
    title: 'Infrastructure Cost Optimisation – Cisco',
    category: 'Cost Analytics',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Data-driven cost analysis initiative identifying redundant infrastructure and inefficient data flows, delivering $1.2M in annual savings.',
    highlights: [
      'Delivered cost optimisation analytics saving $1.2M annually by identifying redundant infrastructure.',
      'Modelled multi-region infrastructure spend patterns with advanced SQL window functions.',
      'Presented insights to leadership, directly influencing budget allocation decisions.',
    ],
    tech: ['SQL', 'Python', 'AWS', 'Tableau', 'Statistical Analysis', 'Excel'],
    color: 'amber',
    impact: '$1.2M saved annually',
  },
  {
    title: 'CRM Conversion & Churn Analytics – Zoho',
    category: 'Customer Analytics',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive CRM analytics solution boosting conversion rates and reducing churn through predictive modelling and behavioural segmentation.',
    highlights: [
      'Improved CRM conversion rates by 18% via customer behaviour analysis and funnel optimisation.',
      'Reduced customer churn by 15% by developing predictive churn models and retention strategies.',
      'Conducted A/B testing and campaign analysis, improving marketing ROI by 24%.',
      'Designed data quality frameworks achieving 99.2% data accuracy SLA.',
    ],
    tech: ['Python', 'SQL', 'Zoho CRM', 'Salesforce', 'A/B Testing', 'Looker'],
    color: 'rose',
    impact: '18% conversion lift',
  },
];

const colorMap: Record<string, { badge: string; dot: string; impact: string }> = {
  sky: { badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20', dot: 'bg-sky-400', impact: 'text-sky-400' },
  emerald: { badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20', dot: 'bg-emerald-400', impact: 'text-emerald-400' },
  amber: { badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20', dot: 'bg-amber-400', impact: 'text-amber-400' },
  rose: { badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20', dot: 'bg-rose-400', impact: 'text-rose-400' },
  teal: { badge: 'bg-teal-500/10 text-teal-300 border-teal-500/20', dot: 'bg-teal-400', impact: 'text-teal-400' },
};

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [expanded, setExpanded] = useState(false);
  const c = colorMap[project.color];

  return (
    <div className="bg-gray-800/30 border border-gray-700 rounded-2xl overflow-hidden card-hover group">
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${c.badge}`}>
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-gray-950/80 backdrop-blur-sm rounded-lg px-2.5 py-1">
          <TrendingUp size={12} className={c.impact} />
          <span className={`text-xs font-semibold ${c.impact}`}>{project.impact}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 leading-snug">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {expanded && (
          <ul className="space-y-2 mb-4">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-gray-400 text-sm">
                <span className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0 mt-1.5`} />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md bg-gray-700/50 border border-gray-600 text-xs text-gray-300">
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-sm text-sky-400 hover:text-sky-300 transition-colors"
        >
          {expanded ? (
            <>Less details <ChevronUp size={14} /></>
          ) : (
            <>More details <ChevronDown size={14} /></>
          )}
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Key <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A selection of high-impact analytics initiatives I've led across IBM, Cisco, and Zoho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
