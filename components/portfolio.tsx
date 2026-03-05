// 'use client';

// import { ExternalLink } from 'lucide-react';

// const projects = [
//   {
//     name: 'Madhavam Foundation',
//     description: 'Non-profit organization focused on education, healthcare, and social welfare across India',
//     tags: ['HTML', 'CSS', 'JavaScript', 'Charity'],
//     image: 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(139, 92, 246) 100%)',
//     link: 'https://www.madhavamfoundation.com/',
//   },
//   {
//     name: 'Travlers',
//     description: 'Travel booking platform with hotel search, reservations, and destination guides',
//     tags: ['Next.js', 'React', 'TypeScript', 'Travel'],
//     image: 'linear-gradient(135deg, rgb(6, 182, 212) 0%, rgb(59, 130, 246) 100%)',
//     link: 'https://travlers.vercel.app',
//   },
//   {
//     name: 'Town Coffee',
//     description: 'Café website with menu display, table booking, and WhatsApp integration for orders',
//     tags: ['Next.js', 'React', 'Tailwind', 'Restaurant'],
//     image: 'linear-gradient(135deg, rgb(139, 92, 246) 0%, rgb(239, 68, 68) 100%)',
//     link: 'https://town-coffee.vercel.app',
//   },
//   {
//     name: 'Job Portal',
//     description: 'Career platform connecting job seekers with employers for recruitment and hiring',
//     tags: ['React', 'Node.js', 'MongoDB', 'HR-Tech'],
//     image: 'linear-gradient(135deg, rgb(34, 197, 94) 0%, rgb(59, 130, 246) 100%)',
//     link: 'https://job-portal-sand-eight-15.vercel.app/',
//   },
//   {
//     name: 'Recruiter Platform',
//     description: 'Recruitment management system for posting jobs, tracking applications, and hiring',
//     tags: ['React', 'Vite', 'TypeScript', 'Recruitment'],
//     image: 'linear-gradient(135deg, rgb(249, 115, 22) 0%, rgb(239, 68, 68) 100%)',
//     link: 'https://recruiter-static-page.vercel.app/recruiter',
//   },
//   {
//     name: 'The Tarzan Way',
//     description: 'AI-powered travel itinerary planner with personalized recommendations and bookings',
//     tags: ['Next.js', 'AI', 'React', 'Travel Tech'],
//     image: 'linear-gradient(135deg, rgb(168, 85, 247) 0%, rgb(236, 72, 153) 100%)',
//     link: 'https://travel-company-five.vercel.app/',
//   },
// ];

// export function Portfolio() {
//   return (
//     <section
//       id="projects"
//       className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-600 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-2">
//         {/* Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <span className="inline-block px-4 py-2 glass rounded-full text-xs sm:text-sm font-medium text-accent mb-4 animate-slide-down hover:scale-105 transition-transform">
//             Our Work
//           </span>
//           <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
//             Featured <span className="bg-linear-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text animate-pulse-slow">Projects</span>
//           </h2>
//           <p className="text-sm sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto text-balance animate-slide-up px-2" style={{ animationDelay: '0.2s' }}>
//             Showcase of successful projects that have driven real impact for our clients.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//           {projects.map((project, index) => (
//             <a
//               key={index}
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative glass rounded-xl overflow-hidden h-64 sm:h-80 hover:bg-white/20 transition-all duration-300 hover:glow-primary cursor-pointer animate-scale-in hover:scale-105 hover:shadow-2xl block"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               {/* Background Image */}
//               <div
//                 className="absolute inset-0 group-hover:scale-110 transition-transform duration-500"
//                 style={{ background: project.image }}
//               ></div>

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition-all duration-300"></div>

//               {/* Content */}
//               <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 text-white">
//                 <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-accent transition-colors transform group-hover:translate-y-0 translate-y-2 duration-300">
//                   {project.name}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4 line-clamp-2 group-hover:text-white transition-colors">
//                   {project.description}
//                 </p>

//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
//                   {project.tags.map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className="text-xs px-2 sm:px-3 py-1 bg-white/20 rounded-full text-white/90 group-hover:bg-white/30 transition-colors"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* View Button */}
//                 <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
//                   <span className="text-xs sm:text-sm font-semibold">View</span>
//                   <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform sm:w-4" />
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* View All CTA */}
//         <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
//           <a href="#projects" className="inline-block px-8 py-4 glass rounded-full text-foreground font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 group cursor-pointer">
//             Explore All Projects
//             <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'Madhavam Foundation',
    description: 'Non-profit organization focused on education, healthcare, and social welfare across India',
    tags: ['HTML', 'CSS', 'JavaScript', 'Charity'],
    image: './madhavam.png',
    link: 'https://www.madhavamfoundation.com/',
  },
  {
    name: 'Travlers',
    description: 'Travel booking platform with hotel search, reservations, and destination guides',
    tags: ['Next.js', 'React', 'TypeScript', 'Travel'],
    image: './travlers.png',
    link: 'https://travlers.vercel.app',
  },
  {
    name: 'Town Coffee',
    description: 'Café website with menu display, table booking, and WhatsApp integration for orders',
    tags: ['Next.js', 'React', 'Tailwind', 'Restaurant'],
    image: './town-coffee.png',
    link: 'https://town-coffee.vercel.app',
  },
  {
    name: 'Job Portal',
    description: 'Career platform connecting job seekers with employers for recruitment and hiring',
    tags: ['React', 'JavaScript', 'Tailwind', 'HR-Tech'],
    image: './job-portal.png',
    link: 'https://job-portal-sand-eight-15.vercel.app/',
  },
  {
    name: 'Recruiter Platform',
    description: 'Responsive recruiter platform UI built with React and Tailwind CSS for job and application management.',
    tags: ['React', 'Vite', 'JavaScript', 'Tailwind', 'Static Site'],
    image: './recruiter.png',
    link: 'https://recruiter-static-page.vercel.app/recruiter',
  },
  {
    name: 'The Tarzan Way clone',
    description: 'A modern travel website interface built with React and Tailwind CSS featuring responsive layouts and interactive UI components.',
    tags: ['React', 'JavaScript', 'Tailwind', 'Travel Tech '],
    image: './tarzan-way.png',
    link: 'https://travel-company-five.vercel.app/',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer animate-scale-in hover:shadow-2xl flex flex-col h-auto"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Section - Top */}
              <div className="relative w-full aspect-video overflow-hidden bg-black/20">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details Section - Bottom */}
              <div className="flex flex-col justify-between p-4 sm:p-6 grow bg-linear-to-b from-white/5 to-white/2">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed line-clamp-2 group-hover:text-foreground/80 transition-colors">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block text-xs px-2.5 py-1 bg-accent/20 text-accent rounded-full group-hover:bg-accent/30 transition-colors duration-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Button */}
                <div className="flex items-center gap-2 text-accent font-semibold pt-4 mt-2 border-t border-white/10 group-hover:text-accent/80 transition-colors duration-300">
                  <span className="text-xs sm:text-sm">View Project</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a href="#projects" className="inline-block px-8 py-4 glass rounded-full text-foreground font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 group cursor-pointer">
            Explore All Projects
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
