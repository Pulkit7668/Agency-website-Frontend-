// 'use client';

// import { ExternalLink } from 'lucide-react';

// const projects = [
//   {
//     name: 'Madhavam Foundation',
//     description: 'Non-profit organization focused on education, healthcare, and social welfare across India',
//     tags: ['HTML', 'CSS', 'JavaScript', 'Charity'],
//     image: './madhavam.png',
//     link: 'https://www.madhavamfoundation.com/',
//   },
//   {
//     name: 'Travlers',
//     description: 'Travel booking platform with hotel search, reservations, and destination guides',
//     tags: ['Next.js', 'React', 'TypeScript', 'Travel'],
//     image: './travlers.png',
//     link: 'https://travlers.vercel.app',
//   },
//   {
//     name: 'Town Coffee',
//     description: 'Café website with menu display, table booking, and WhatsApp integration for orders',
//     tags: ['Next.js', 'React', 'Tailwind', 'Restaurant'],
//     image: './town-coffee.png',
//     link: 'https://town-coffee.vercel.app',
//   },
//   {
//     name: 'Job Portal',
//     description: 'Career platform connecting job seekers with employers for recruitment and hiring',
//     tags: ['React', 'JavaScript', 'Tailwind', 'HR-Tech'],
//     image: './job-portal.png',
//     link: 'https://job-portal-sand-eight-15.vercel.app/',
//   },
//   {
//     name: 'Recruiter Platform',
//     description: 'Responsive recruiter platform UI built with React and Tailwind CSS for job and application management.',
//     tags: ['React', 'Vite', 'JavaScript', 'Tailwind', 'Static Site'],
//     image: './recruiter.png',
//     link: 'https://recruiter-static-page.vercel.app/recruiter',
//   },
//   {
//     name: 'The Tarzan Way clone',
//     description: 'A modern travel website interface built with React and Tailwind CSS featuring responsive layouts and interactive UI components.',
//     tags: ['React', 'JavaScript', 'Tailwind', 'Travel Tech '],
//     image: './tarzan-way.png',
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
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {projects.map((project, index) => (
//             <a
//               key={index}
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group glass rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer animate-scale-in hover:shadow-2xl flex flex-col h-auto"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               {/* Image Section - Top */}
//               <div className="relative w-full aspect-video overflow-hidden bg-black/20">
//                 <img
//                   src={project.image}
//                   alt={project.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Details Section - Bottom */}
//               <div className="flex flex-col justify-between p-4 sm:p-6 grow bg-linear-to-b from-white/5 to-white/2">
//                 <div className="space-y-3">
//                   <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
//                     {project.name}
//                   </h3>
//                   <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed line-clamp-2 group-hover:text-foreground/80 transition-colors">
//                     {project.description}
//                   </p>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-1.5 pt-2">
//                     {project.tags.map((tag, idx) => (
//                       <span
//                         key={idx}
//                         className="inline-block text-xs px-2.5 py-1 bg-accent/20 text-accent rounded-full group-hover:bg-accent/30 transition-colors duration-300 font-medium"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* View Button */}
//                 <div className="flex items-center gap-2 text-accent font-semibold pt-4 mt-2 border-t border-white/10 group-hover:text-accent/80 transition-colors duration-300">
//                   <span className="text-xs sm:text-sm">View Project</span>
//                   <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
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
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Charity'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-05%20132701-AsUgaa80uTHywb2KF4jFpUeroj0OwB.png',
    link: 'https://www.madhavamfoundation.com/',
  },
  {
    name: 'Travlers',
    description: 'Travel booking platform with hotel search, reservations, and destination guides',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Travel'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-05%20132743-oVJTeBgQpvXTIJOPFtmMdXYmOWfgW6.png',
    link: 'https://travlers.vercel.app',
  },
  {
    name: 'Town Coffee',
    description: 'Café website with menu display, table booking, and WhatsApp integration for orders',
    tags: ['Next.js', 'React', 'TypeScript', 'Restaurant'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-05%20132800-nT2eTz9UcWI9i7VyB47sdK86EWrenO.png',
    link: 'https://town-coffee.vercel.app',
  },
  {
    name: 'Job Portal',
    description: 'Career platform connecting job seekers with employers for recruitment and hiring',
    tags: [ 'React', 'JavaScript', 'Tailwind'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-05%20132838-jvVZo3AoLnr8GBvNd44oGcbtI5IahO.png',
    link: 'https://job-portal-sand-eight-15.vercel.app/',
  },
  {
    name: 'Recruiter Platform',
    description: 'Recruitment management system for posting jobs, tracking applications, and hiring',
    tags: ['React', 'Vite', 'JavaScript', 'Tailwind'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-05%20132856-dsc0T3IQmXdTekKIEvkHlIwNUQXt5O.png',
    link: 'https://recruiter-static-page.vercel.app/recruiter',
  },
  {
    name: 'The Tarzan Way',
    description: 'AI-powered travel itinerary planner with personalized recommendations and bookings',
    tags: ['React', 'JavaScript', 'Tailwind', 'Travel Tech'],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-05%20132528-TM1J7T58BGfKgBU29yEjr2rqDPvOGu.png',
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
              <div className="relative w-full aspect-video overflow-hidden bg-black/20 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-contain"
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
