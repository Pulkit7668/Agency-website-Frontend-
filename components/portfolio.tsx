'use client';

import { ExternalLink } from 'lucide-react';

const handleProjectClick = (projectName: string) => {
  alert(`Viewing details for: ${projectName}\n\nIn a real application, this would navigate to the project details page.`);
};

const handleViewAllProjects = () => {
  alert('Loading all projects...\n\nIn a real application, this would show all portfolio projects.');
};

const projects = [
  {
    name: 'EcomFlow Pro',
    description: 'Advanced e-commerce platform with AI-driven recommendations',
    tags: ['React', 'Node.js', 'MongoDB', 'AI'],
    image:
      'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(139, 92, 246) 100%)',
  },
  {
    name: 'HealthSync Dashboard',
    description: 'Real-time healthcare analytics and patient management system',
    tags: ['Next.js', 'PostgreSQL', 'TypeScript'],
    image:
      'linear-gradient(135deg, rgb(6, 182, 212) 0%, rgb(59, 130, 246) 100%)',
  },
  {
    name: 'CloudVault Storage',
    description: 'Secure cloud storage solution with advanced encryption',
    tags: ['Vue.js', 'Python', 'AWS', 'Security'],
    image:
      'linear-gradient(135deg, rgb(139, 92, 246) 0%, rgb(239, 68, 68) 100%)',
  },
  {
    name: 'FinanceFlow',
    description: 'Personal finance management app with investment tracking',
    tags: ['React Native', 'Firebase', 'Charts'],
    image:
      'linear-gradient(135deg, rgb(34, 197, 94) 0%, rgb(59, 130, 246) 100%)',
  },
  {
    name: 'MarketHub Platform',
    description: 'Multi-vendor marketplace with integrated payment processing',
    tags: ['Next.js', 'Stripe', 'GraphQL'],
    image:
      'linear-gradient(135deg, rgb(249, 115, 22) 0%, rgb(239, 68, 68) 100%)',
  },
  {
    name: 'DataViz Analytics',
    description: 'Business intelligence dashboard with real-time data visualization',
    tags: ['React', 'D3.js', 'FastAPI'],
    image:
      'linear-gradient(135deg, rgb(168, 85, 247) 0%, rgb(236, 72, 153) 100%)',
  },
];

export function Portfolio() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-600 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-xs sm:text-sm font-medium text-accent mb-4 animate-slide-down hover:scale-105 transition-transform">
            Our Work
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Featured <span className="bg-linear-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text animate-pulse-slow">Projects</span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto text-balance animate-slide-up px-2" style={{ animationDelay: '0.2s' }}>
            Showcase of successful projects that have driven real impact for our clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project.name)}
              className="group relative glass rounded-xl overflow-hidden h-64 sm:h-80 hover:bg-white/20 transition-all duration-300 hover:glow-primary cursor-pointer animate-scale-in hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 group-hover:scale-110 transition-transform duration-500"
                style={{ background: project.image }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition-all duration-300"></div>

              {/* Mouse Cursor Indicators */}
              {/* <div className="absolute top-4 right-4 w-5 h-5 border-2 border-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div> */}
              {/* <div className="absolute bottom-4 left-4 w-4 h-4 border-2 border-accent/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100 pointer-events-none"></div> */}

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-accent transition-colors transform group-hover:translate-y-0 translate-y-2 duration-300">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4 line-clamp-2 group-hover:text-white transition-colors">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 sm:px-3 py-1 bg-white/20 rounded-full text-white/90 group-hover:bg-white/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                  <span className="text-xs sm:text-sm font-semibold">View</span>
                  <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform sm:w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <button onClick={handleViewAllProjects} className="px-8 py-4 glass rounded-full text-foreground font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 group cursor-pointer">
            View All Projects
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
