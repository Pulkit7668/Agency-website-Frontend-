'use client';

import { useState, useEffect } from 'react';
import {
  Globe,
  Smartphone,
  Zap,
  Shield,
  Film,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Custom, responsive websites built with cutting-edge technologies to showcase your brand.',
  },
  {
    icon: Zap,
    title: 'Web Applications',
    description:
      'Powerful, scalable web apps designed to streamline operations and boost productivity.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile solutions that deliver exceptional user experiences.',
  },
  {
    icon: Film,
    title: 'Video Editing',
    description:
      'Professional video editing and production services to create compelling visual content for your brand.',
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description:
      'Ongoing support and optimization to keep your digital solutions running smoothly.',
  },
];

function getVisibleServices(currentIndex: number) {
  return services.slice(currentIndex, currentIndex + 1);
}

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Auto-scroll every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      id="services"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-0 w-80 h-80 bg-purple-600 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600 rounded-full blur-3xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-xs sm:text-sm font-medium text-accent mb-4 animate-slide-down hover:scale-105 transition-transform">
            Our Expertise
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Services That <span className="bg-linear-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text animate-pulse-slow">Transform</span> Your Vision
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto text-balance animate-slide-up px-2" style={{ animationDelay: '0.2s' }}>
            Comprehensive solutions designed to elevate your digital presence and drive measurable results.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          {/* Services Grid Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 min-h-96">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isVisible = index === currentIndex || 
                               (index === (currentIndex + 1) % services.length && window.innerWidth >= 640) ||
                               (index === (currentIndex + 2) % services.length && window.innerWidth >= 1024);
              
              return (
                <div
                  key={index}
                  className={`glass rounded-xl p-6 sm:p-8 group hover:bg-white/15 transition-all duration-500 hover:shadow-lg animate-scale-in ${
                    !isVisible ? 'hidden sm:hidden lg:hidden' : ''
                  }`}
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-linear-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    <Icon size={20} className="text-black sm:w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons - Bottom Centered */}
          <div className="flex items-center justify-center gap-4 mt-8 sm:mt-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={goToPrevious}
              className="p-2 glass rounded-full text-foreground hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Previous services"
            >
              <ChevronLeft size={24} className="hover:rotate-180 transition-transform duration-300" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex
                      ? 'bg-accent w-8 h-2'
                      : 'bg-foreground/30 w-2 h-2 hover:bg-foreground/50'
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 glass rounded-full text-foreground hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Next services"
            >
              <ChevronRight size={24} className="hover:rotate-180 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
