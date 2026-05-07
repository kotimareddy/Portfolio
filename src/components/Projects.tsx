import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    title: 'HRMS – Driver Recruitment Management System',
    category: 'HR Tech',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A driver recruitment platform handling end-to-end HR workflows — from job posting and candidate screening to onboarding and compliance tracking.',
    highlights: [
      'Led full stack development with Node.js/Express.js backend and React 18 + TypeScript frontend.',
      'Implemented Role-Based Access Control (RBAC) for Admins, HR Managers, and Recruiters.',
      'Engineered document upload, preview, and validation features with cloud integration.',
      'Built reporting and analytics modules with interactive charts and exportable data.',
    ],
    tech: ['React 18', 'TypeScript', 'Node.js', 'Express.js', 'Ant Design', 'RBAC', 'PostgreSQL'],
    color: 'sky',
  },
  {
    title: 'Warehouse Management System (WMS)',
    category: 'Logistics',
    image: 'https://images.pexels.com/photos/4481534/pexels-photo-4481534.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A scalable warehouse operations platform with real-time inventory management, stock tracking, and advanced data visualization.',
    highlights: [
      'Developed scalable backend APIs for inventory management, real-time stock tracking, and warehouse operations.',
      'Built a responsive, high-performance frontend with React.js and reusable component libraries.',
      'Designed interactive charts, real-time dashboards, and feature-rich tables with server-side pagination.',
      'Integrated Excel import/export with validation for efficient bulk data handling.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'RBAC', 'Excel Integration'],
    color: 'emerald',
  },
  {
    title: 'SBBS – Printers Rentals Management System',
    category: 'Rental Services',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A printer rental platform covering service requests, dispatches, billing cycles, and engineer assignment with real-time API integrations.',
    highlights: [
      'Built backend modules for automated invoicing and billing with custom cycle support.',
      'Implemented an intuitive Kanban board for ticket management.',
      'Created a centralized dashboard for real-time inventory, billing, and engineer activity visibility.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Kanban', 'Billing Automation'],
    color: 'amber',
  },
  {
    title: 'Tealbord – Logistics Job Portal',
    category: 'Logistics',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A logistics-focused job portal with role-specific dashboards for Admin, HR, and Job Seekers with advanced job matching and interview scheduling.',
    highlights: [
      'Built with Node.js/Express backend and React.js frontend with role-specific dashboards.',
      'Implemented advanced job matching algorithms and application tracking with real-time updates.',
      'Integrated multi-authentication (email, LinkedIn, Google) for streamlined onboarding.',
      'Built interview scheduling module with calendar integration.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'OAuth', 'Calendar Integration'],
    color: 'rose',
  },
  {
    title: 'SongBrite – Music Platform',
    category: 'Music',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A feature-rich music platform with real-time audio playback, multi-track management, and a glassmorphism UI with smooth animations.',
    highlights: [
      'Built with React 18, TypeScript, Redux Toolkit, Ant Design, and Next.js with Web Audio API.',
      'Developed real-time audio playback, multi-track management, and dynamic file upload with drag-and-drop.',
      'Designed a 4-column Kanban workflow with glassmorphism UI and mobile-friendly interactions.',
      'Implemented secure purchase and transaction handling.',
    ],
    tech: ['React 18', 'TypeScript', 'Next.js', 'Redux Toolkit', 'Web Audio API', 'Ant Design'],
    color: 'teal',
  },
];

const colorMap: Record<string, { badge: string; dot: string }> = {
  sky: { badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20', dot: 'bg-sky-400' },
  emerald: { badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20', dot: 'bg-emerald-400' },
  amber: { badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20', dot: 'bg-amber-400' },
  rose: { badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20', dot: 'bg-rose-400' },
  teal: { badge: 'bg-teal-500/10 text-teal-300 border-teal-500/20', dot: 'bg-teal-400' },
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

        <div className="flex items-center justify-between">
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
          <button className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors">
            <ExternalLink size={14} />
            View
          </button>
        </div>
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
            A selection of production applications I've architected and delivered.
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
