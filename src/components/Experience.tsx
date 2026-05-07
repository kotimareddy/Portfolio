import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const dotColorMap: Record<string, string> = {
  sky: 'bg-sky-400',
  teal: 'bg-teal-400',
  emerald: 'bg-emerald-400',
};

const experiences = [
  {
    role: 'Data Analyst',
    company: 'IBM',
    period: 'Nov 2024 – Present',
    location: 'USA',
    color: 'sky',
    highlights: [
      'Designed and deployed enterprise-grade Power BI dashboards, improving executive decision-making speed by 35% across Fortune 500 clients.',
      'Built scalable ETL pipelines using SQL, AWS Redshift, and IBM Cloud, reducing data processing time by 50%.',
      'Developed predictive analytics models (Python, Scikit-learn) to improve revenue forecasting accuracy to 94%.',
      'Implemented self-service BI solutions, reducing stakeholder reporting turnaround time by 40%.',
      'Led data governance initiatives, reducing data quality issues by 60% through validation frameworks and anomaly detection.',
      'Partnered with sales and CRM teams to optimise pipeline visibility and customer segmentation strategies.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'Cisco',
    period: 'Aug 2022 – Dec 2023',
    location: 'USA',
    color: 'teal',
    highlights: [
      'Built real-time monitoring dashboards analysing 500K+ daily network events, reducing downtime by 28%.',
      'Developed predictive maintenance models, improving system reliability by forecasting failures 48 hours in advance.',
      'Delivered cost optimisation analytics, saving $1.2M annually by identifying redundant infrastructure and inefficient data flows.',
      'Translated technical data into business-friendly dashboards, increasing adoption by 70% across operations teams.',
      'Automated reporting workflows using Python and ServiceNow integration, cutting reporting time by 45%.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'Zoho Corporation',
    period: 'Oct 2020 – Jul 2022',
    location: 'India',
    color: 'emerald',
    highlights: [
      'Improved CRM conversion rates by 18% through customer behaviour analysis and funnel optimisation.',
      'Reduced customer churn by 15% by developing predictive churn models and retention strategies.',
      'Built automated reporting systems for product and marketing teams, accelerating reporting by 55%.',
      'Conducted A/B testing and campaign analysis, improving marketing ROI by 24%.',
      'Designed and enforced data quality frameworks, achieving 99.2% data accuracy SLA.',
      'Worked closely with Salesforce and Zoho CRM teams to enhance customer lifecycle analytics.',
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
                <div className={`w-4 h-4 rounded-full ${dotColorMap[exp.color]} border-4 border-gray-950 mt-6 z-10 animate-pulse-glow`} />
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
