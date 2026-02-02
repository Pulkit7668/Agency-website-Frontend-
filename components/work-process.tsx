'use client';

import { Lightbulb, Layout, Code, Zap, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discovery & Requirements',
    description: 'We dive deep into understanding your business, goals, and unique challenges.',
  },
  {
    number: '02',
    icon: Layout,
    title: 'Planning & Design',
    description: 'Strategic planning and beautiful designs that align with your vision.',
  },
  {
    number: '03',
    icon: Code,
    title: 'Development',
    description: 'Expert development using the latest technologies and best practices.',
  },
  {
    number: '04',
    icon: Zap,
    title: 'Testing & QA',
    description: 'Rigorous testing to ensure performance, security, and quality standards.',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launch & Support',
    description: 'Seamless launch followed by ongoing support and optimization.',
  },
];

export function WorkProcess() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-accent mb-4">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            How We <span className="bg-linear-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">Work</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
            A proven methodology that delivers exceptional results from start to finish.
          </p>
        </div>

        {/* Process Steps - Desktop Grid */}
        <div className="hidden lg:grid grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-12 left-full w-full h-1 bg-linear-to-r from-blue-500/50 to-transparent -translate-y-1/2"></div>
                )}

                {/* Card */}
                <div className="glass rounded-xl p-6 h-full flex flex-col group-hover:bg-white/15 transition-all duration-500">
                  {/* Step Number */}
                  <div className="text-sm font-bold text-accent/60 mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={24} className="text-black" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed grow">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Steps - Mobile Carousel */}
        <div className="lg:hidden">
          <div className="glass rounded-xl p-8 min-h-80 flex flex-col justify-center animate-scale-in">
            {/* Step Number */}
            <div className="text-sm font-bold text-accent/60 mb-4">
              {steps[currentIndex].number}
            </div>

            {/* Icon */}
            <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6">
              {(() => {
                const Icon = steps[currentIndex].icon;
                return <Icon size={32} className="text-black" />;
              })()}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {steps[currentIndex].title}
            </h3>
            <p className="text-foreground/70 text-base leading-relaxed mb-8">
              {steps[currentIndex].description}
            </p>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-auto">
              <button
                onClick={prevSlide}
                className="p-2 glass rounded-full text-foreground hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Indicators */}
              <div className="flex gap-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-accent w-8 h-2'
                        : 'bg-foreground/30 w-2 h-2'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 glass rounded-full text-foreground hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
