'use client';

import { ArrowRight, Mail, Phone } from 'lucide-react';

export function CTASection() {
  const handleStartProject = () => {
    const email = 'hello@techvision.com';
    window.location.href = `mailto:${email}?subject=Project Inquiry - TechVision`;
  };

  const handleScheduleCall = () => {
    const phone = '+1 (555) 123-4567';
    window.location.href = `tel:${phone}`;
  };

  const handleEmailClick = () => {
    const email = 'hello@techvision.com';
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    const phone = '+1 (555) 123-4567';
    window.location.href = `tel:${phone}`;
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-2">
        {/* Main CTA Card */}
        <div className="glass rounded-2xl p-6 sm:p-12 md:p-16 text-center animate-scale-in hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Ready to <span className="bg-linear-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text animate-pulse-slow">Transform</span> Your Digital Presence?
          </h2>

          <p className="text-sm sm:text-lg md:text-xl text-foreground/70 mb-6 sm:mb-10 max-w-2xl mx-auto text-balance leading-relaxed animate-slide-up px-2" style={{ animationDelay: '0.2s' }}>
            Let's collaborate to create digital solutions that not only meet your expectations but exceed them. Your success is our mission.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 animate-slide-up px-2" style={{ animationDelay: '0.3s' }}>
            <button onClick={handleStartProject} className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-500 to-cyan-400 text-black font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 cursor-pointer text-sm sm:text-base">
              Start Project
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform hidden sm:block" />
            </button>
            <button onClick={handleScheduleCall} className="px-6 sm:px-8 py-3 sm:py-4 glass rounded-full text-foreground font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 group cursor-pointer text-sm sm:text-base">
              Schedule a Call
            </button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/10">
            <button onClick={handleEmailClick} className="flex items-center sm:justify-center gap-3 sm:gap-4 animate-slide-in-left hover:scale-105 transition-transform duration-300 cursor-pointer text-left" style={{ animationDelay: '0.4s' }}>
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center hover:scale-110 transition-transform animate-glow shrink-0">
                <Mail size={20} className="text-accent sm:w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm text-foreground/60">Email</div>
                <div className="text-xs sm:text-sm text-foreground font-semibold hover:text-accent transition-colors truncate">hello@techvision.com</div>
              </div>
            </button>
            <button onClick={handlePhoneClick} className="flex items-center sm:justify-center gap-3 sm:gap-4 animate-slide-in-right hover:scale-105 transition-transform duration-300 cursor-pointer text-left" style={{ animationDelay: '0.5s' }}>
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center hover:scale-110 transition-transform animate-glow shrink-0" style={{ animationDelay: '0.5s' }}>
                <Phone size={20} className="text-accent sm:w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm text-foreground/60">Phone</div>
                <div className="text-xs sm:text-sm text-foreground font-semibold hover:text-accent transition-colors truncate">+1 (555) 123-4567</div>
              </div>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-16 animate-slide-up px-2" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 group">
            <span className="text-2xl sm:text-4xl font-bold bg-linear-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text group-hover:scale-125 transition-transform">150+</span>
            <span className="text-xs sm:text-base text-foreground/70 group-hover:text-foreground transition-colors">Projects</span>
          </div>
          <div className="w-1 h-6 sm:h-8 bg-foreground/20"></div>
          <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 group">
            <span className="text-2xl sm:text-4xl font-bold bg-linear-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text group-hover:scale-125 transition-transform">98%</span>
            <span className="text-xs sm:text-base text-foreground/70 group-hover:text-foreground transition-colors">Satisfaction</span>
          </div>
          <div className="w-1 h-6 sm:h-8 bg-foreground/20"></div>
          <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 group">
            <span className="text-2xl sm:text-4xl font-bold bg-linear-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text group-hover:scale-125 transition-transform">24/7</span>
            <span className="text-xs sm:text-base text-foreground/70 group-hover:text-foreground transition-colors">Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
