'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, FinTech Innovations',
    content:
      'TechVision transformed our entire digital infrastructure. Their expertise and dedication to quality resulted in a platform that exceeded all expectations and helped us scale rapidly.',
    initials: 'SC',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder, E-Commerce Plus',
    content:
      'Working with this team was exceptional. They delivered a complex e-commerce solution on time, within budget, and with outstanding attention to detail. Highly recommended!',
    initials: 'MR',
  },
  {
    name: 'Emily Watson',
    role: 'Product Manager, HealthTech Co',
    content:
      'The professionalism and technical expertise displayed throughout the project was remarkable. They truly understand how to build scalable, maintainable solutions.',
    initials: 'EW',
  },
  {
    name: 'David Kumar',
    role: 'Director, Digital Strategy',
    content:
      'Outstanding communication and project management. They treated our project like their own business, ensuring every detail was perfect.',
    initials: 'DK',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-accent mb-4 animate-slide-down hover:scale-105 transition-transform">
            Client Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Loved by <span className="bg-linear-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text animate-pulse-slow">Our Clients</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative group">
          {/* Testimonial Card */}
          <div className="glass rounded-xl p-8 sm:p-12 min-h-80 flex flex-col justify-center animate-scale-in hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 relative">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-yellow-400 text-yellow-400 animate-bounce-slow hover:scale-125 transition-transform"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-xl text-foreground/90 mb-8 leading-relaxed animate-fade-in">
              "{testimonials[currentIndex].content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-glow">
                <span className="text-black font-bold">
                  {testimonials[currentIndex].initials}
                </span>
              </div>
              <div>
                <div className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-foreground/60">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={prevSlide}
              className="p-2 glass rounded-full text-foreground hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <ChevronLeft size={24} className="hover:rotate-180 transition-transform duration-300" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex
                      ? 'bg-accent w-8 h-2'
                      : 'bg-foreground/30 w-2 h-2 hover:bg-foreground/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 glass rounded-full text-foreground hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <ChevronRight size={24} className="hover:rotate-180 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
