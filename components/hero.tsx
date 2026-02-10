'use client';

import { ArrowRight } from 'lucide-react';

export function Hero() {
  const handleStartProject = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewPortfolio = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Grid Background with Gradient Fade */}
      <div className='w-60 h-80 bg-[#2b00ff2c] absolute top-[10%] left-[75%] translate-x-[-50%] translate-y-[-50%] opacity-15 rounded-full blur-xl pointer-events-none animate-pulse'>
s
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div 
          className="relative  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-none w-[150vh] h-[80vh] "
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 2px),
              linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 2px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Gradient Overlay - Left Dark, Right Light (grid visible on right) */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 30%, transparent 70%, transparent 100%)',
          }}
        />
        
        {/* Subtle glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-accent mb-6 hover:scale-105 transition-transform duration-300">
            Welcome to the future of digital
          </span>
        </div>

        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Build Digital Solutions That Drive <span className="bg-linear-to-r from-blue-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text animate-pulse-slow">Real Growth</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 sm:mb-12 max-w-2xl mx-auto text-balance animate-slide-up px-2" style={{ animationDelay: '0.3s' }}>
          We craft premium web experiences and innovative digital solutions tailored to transform your business and accelerate your success.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 animate-slide-up px-2" style={{ animationDelay: '0.4s' }}>
          <button onClick={handleStartProject} className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-500 to-cyan-400 text-black font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 relative cursor-pointer text-sm sm:text-base">
            <span className="relative z-10">Start Project</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform sm:block hidden" />
          </button>
          <button onClick={handleViewPortfolio} className="px-6 sm:px-8 py-3 sm:py-4 glass rounded-full text-foreground font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 group relative cursor-pointer text-sm sm:text-base">
            <span className="relative">
              View Portfolio
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto mt-8 sm:mt-12 mb-5 px-2">
          {[
            { value: '150+', label: 'Projects Delivered', delay: '0.5s' },
            { value: '98%', label: 'Client Satisfaction', delay: '0.6s' },
            { value: '50+', label: 'Expert Team Members', delay: '0.7s' },
          ].map((stat) => (
            <div key={stat.label} className="animate-scale-in" style={{ animationDelay: stat.delay }}>
              <div className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 sm:bottom-10 right-6 sm:right-24 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}