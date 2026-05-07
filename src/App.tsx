import { useState, useEffect, useRef } from 'react';
import {
  Mail, Phone, MapPin, ExternalLink,
  ChevronDown, BarChart2, Brain, Database, Code2, Cloud,
  TrendingUp, Award, GraduationCap, Briefcase,
  Menu, X, ArrowUpRight, User
} from 'lucide-react';

const Github = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
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
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
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
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

const SKILLS = [
  {
    icon: Code2,
    label: 'Programming',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL', 'R'],
  },
  {
    icon: Brain,
    label: 'Machine Learning & AI',
    items: ['Regression', 'Classification', 'Clustering', 'NLP', 'Time Series', 'Feature Engineering'],
  },
  {
    icon: TrendingUp,
    label: 'Statistical Analysis',
    items: ['Hypothesis Testing', 'A/B Testing', 'Probability', 'Statistical Modeling'],
  },
  {
    icon: Database,
    label: 'Data Analysis',
    items: ['EDA', 'Data Cleaning', 'Data Wrangling', 'Data Transformation'],
  },
  {
    icon: BarChart2,
    label: 'Visualization & BI',
    items: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Plotly'],
  },
  {
    icon: Cloud,
    label: 'Cloud & Tools',
    items: ['AWS S3/EC2', 'Google BigQuery', 'Jupyter Notebook', 'Git', 'GitHub'],
  },
];

const PROFICIENCY = [
  { name: 'Python / Pandas / NumPy', level: 92 },
  { name: 'Machine Learning', level: 88 },
  { name: 'SQL', level: 90 },
  { name: 'Power BI / Tableau', level: 85 },
  { name: 'Statistical Analysis', level: 82 },
  { name: 'NLP', level: 75 },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-14 text-center">
      <span className="text-xs font-semibold tracking-[0.25em] uppercase text-cyan-400">{label}</span>
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-cyan-400 to-blue-500" />
    </div>
  );
}

function SkillBar({ name, level, visible }: { name: string; level: number; visible: boolean }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="text-slate-300">{name}</span>
        <span className="text-cyan-400 font-medium">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-700">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const skillsSection = useInView();
  const profSection = useInView();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="bg-slate-950 text-white font-sans antialiased">
      {/* NAV */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur border-b border-slate-800 shadow-lg' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-cyan-400">C</span>handrakanth
          </span>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                {l}
              </button>
            ))}
            <a
              href="mailto:aalurichandrakanth@gmail.com"
              className="rounded-full bg-cyan-500 px-4 py-1.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              Hire Me
            </a>
          </div>
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setMenuOpen(o => !o)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 pb-4">
            {NAV_LINKS.map(l => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="block w-full py-2.5 text-left text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(148,163,184,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.03) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-slate-950 to-blue-950/20" />
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-32">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="shrink-0 relative">
              <div className="h-48 w-48 md:h-56 md:w-56 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-2xl shadow-cyan-500/20">
                <div className="h-full w-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="/chandra.jpeg"
                    alt="Chandrakanth Reddy Aaluri"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <span className="absolute -bottom-2 -right-2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow">
                Open to Work
              </span>
            </div>

            <div className="text-center md:text-left">
              <p className="mb-2 text-xs font-semibold tracking-[0.25em] uppercase text-cyan-400">Data Science Professional</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
                Chandrakanth<br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Reddy Aaluri</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
                Data Science professional with <span className="text-white font-semibold">3+ years</span> of experience in data analysis, machine learning, and statistical modeling — delivering actionable insights that drive business decisions.
              </p>

              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-8">
                {[['3+', 'Years Experience'], ['6+', 'Skills Areas'], ['3', 'ML Projects']].map(([n, l]) => (
                  <div key={l} className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{n}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap justify-center md:justify-start items-center gap-4">
                <button
                  onClick={() => scrollTo('Contact')}
                  className="flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
                >
                  Get In Touch <ArrowUpRight size={15} />
                </button>
                <button
                  onClick={() => scrollTo('Projects')}
                  className="flex items-center gap-2 rounded-full border border-slate-700 px-6 py-2.5 text-sm font-semibold text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  View Projects
                </button>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
            <span className="text-xs">Scroll</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle label="What I Know" title="Technical Skills" />

          <div ref={skillsSection.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map(({ icon: Icon, label, items }, i) => (
              <div
                key={label}
                className="group rounded-2xl border border-slate-800 bg-slate-950 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5"
                style={{
                  opacity: skillsSection.visible ? 1 : 0,
                  transform: skillsSection.visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
                }}
              >
                <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3">
                  <Icon size={22} className="text-cyan-400" />
                </div>
                <h3 className="mb-3 font-semibold text-white">{label}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300 group-hover:bg-slate-700 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div ref={profSection.ref} className="mt-14 rounded-2xl border border-slate-800 bg-slate-950 p-8">
            <h3 className="mb-8 text-lg font-semibold text-white">Proficiency Levels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROFICIENCY.map(p => (
                <SkillBar key={p.name} {...p} visible={profSection.visible} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle label="Career" title="Professional Experience" />

          <div className="relative pl-6 md:pl-10">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent" />

            <div className="relative mb-4">
              <div className="absolute -left-[1.6rem] md:-left-[2.1rem] top-1 h-4 w-4 rounded-full border-2 border-cyan-400 bg-slate-950 shadow shadow-cyan-400/50" />
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 hover:border-cyan-500/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">Data Analyst / Junior Data Scientist</h3>
                    <p className="text-cyan-400 font-medium mt-0.5">H2SYS Solutions Pvt. Ltd.</p>
                    <p className="text-slate-500 text-sm mt-0.5 flex items-center gap-1.5"><MapPin size={12} /> Hyderabad, India</p>
                  </div>
                  <span className="self-start sm:self-center shrink-0 rounded-full bg-slate-800 px-4 py-1.5 text-xs font-medium text-slate-300 border border-slate-700">
                    June 2020 – Sep 2023
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {[
                    'Performed exploratory data analysis (EDA) on large datasets to identify trends, patterns, and anomalies, improving business insights.',
                    'Developed machine learning models (regression & classification) to solve business problems such as prediction and segmentation.',
                    'Cleaned and transformed raw data using Python (Pandas, NumPy), improving data quality and usability for analysis.',
                    'Wrote optimized SQL queries to extract, filter, and aggregate data from relational databases.',
                    'Built interactive dashboards using Power BI/Tableau, enabling stakeholders to make data-driven decisions.',
                    'Conducted statistical analysis and A/B testing to evaluate business strategies and improve performance.',
                    'Collaborated with cross-functional teams to translate business problems into analytical solutions.',
                  ].map(item => (
                    <li key={item} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Python', 'SQL', 'Pandas', 'Scikit-learn', 'Power BI', 'Tableau', 'A/B Testing'].map(t => (
                    <span key={t} className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400 border border-cyan-500/20">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle label="My Work" title="Featured Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/5">
              <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">Industry-Level Project</span>
                    <h3 className="mt-1 text-xl font-bold text-white">End-to-End Customer Churn Prediction</h3>
                  </div>
                  <ExternalLink size={18} className="text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0 mt-1" />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Predict which customers will leave a service (telecom, SaaS, banking) using advanced machine learning models. Built a complete pipeline from raw data to a deployable interactive dashboard.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {[
                    ['Data Cleaning & EDA', 'Identified patterns and outliers across telecom datasets'],
                    ['Feature Engineering', 'Engineered tenure, usage patterns, and behavioral signals'],
                    ['ML Models', 'Logistic Regression and XGBoost with hyperparameter tuning'],
                    ['Model Evaluation', 'ROC-AUC, precision/recall, confusion matrix analysis'],
                    ['Dashboard Deployment', 'Streamlit / Power BI interactive dashboard for stakeholders'],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                      <p className="text-sm font-semibold text-white mb-1">{title}</p>
                      <p className="text-xs text-slate-500">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'SQL', 'Power BI', 'Streamlit'].map(t => (
                    <span key={t} className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400 border border-cyan-500/20">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {[
              {
                title: 'Sales Forecasting Pipeline',
                desc: 'Time-series forecasting model for retail sales using ARIMA and Prophet, with an automated reporting dashboard.',
                tags: ['Python', 'Prophet', 'ARIMA', 'Tableau'],
                status: 'In Progress',
              },
              {
                title: 'NLP Sentiment Analyzer',
                desc: 'Sentiment classification on customer reviews using NLTK and Scikit-learn with 87% accuracy on test data.',
                tags: ['Python', 'NLTK', 'Scikit-learn', 'NLP'],
                status: 'Completed',
              },
            ].map(({ title, desc, tags, status }) => (
              <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950 p-6 hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/5">
                <div className="flex items-start justify-between mb-4">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                    {status}
                  </span>
                  <ExternalLink size={16} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(t => (
                    <span key={t} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-24 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle label="Academic Background" title="Education" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                degree: 'Master of Science in Information Systems',
                school: 'Wilmington University',
                location: 'Delaware, USA',
                period: 'Jan 2024 – Dec 2025',
                icon: Award,
                highlight: true,
              },
              {
                degree: 'Bachelor of Technology in Civil Engineering',
                school: 'Teegala Krishna Reddy College of Engineering',
                location: 'India',
                period: '2016 – 2020',
                icon: GraduationCap,
                highlight: false,
              },
            ].map(({ degree, school, location, period, icon: Icon, highlight }) => (
              <div
                key={degree}
                className={`rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${highlight ? 'border-cyan-500/40 bg-slate-900 shadow-lg shadow-cyan-500/5' : 'border-slate-800 bg-slate-900 hover:border-slate-700'}`}
              >
                <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3">
                  <Icon size={22} className="text-cyan-400" />
                </div>
                {highlight && (
                  <div className="mb-3">
                    <span className="rounded-full bg-cyan-500/10 px-3 py-0.5 text-xs font-semibold text-cyan-400 border border-cyan-500/20">Current</span>
                  </div>
                )}
                <h3 className="text-base font-bold text-white leading-snug mb-1">{degree}</h3>
                <p className="text-cyan-400 text-sm font-medium">{school}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><MapPin size={11} />{location}</span>
                  <span className="flex items-center gap-1"><Briefcase size={11} />{period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle label="Get In Touch" title="Contact Me" />

          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <h3 className="text-xl font-bold text-white text-center mb-10">Contact Information</h3>
              
              <div className="space-y-6 mb-10">
                {/* Email */}
                <a
                  href="mailto:aalurichandrakanth@gmail.com"
                  className="flex items-center gap-5 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Mail size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                      aalurichandrakanth@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+13024984134"
                  className="flex items-center gap-5 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <Phone size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                      +1 (302) 498-4134
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <MapPin size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-sm font-medium text-slate-200">
                      Delaware, USA
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800 text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Find me online</p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-600 transition-all text-xs font-semibold"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-600 transition-all text-xs font-semibold"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <span>2025 Chandrakanth Reddy Aaluri. All rights reserved.</span>
          <div className="flex gap-6">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)} className="hover:text-cyan-400 transition-colors">{l}</button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
