'use client';

import {
  Globe,
  Smartphone,
  Palette,
  Zap,
  Search,
  Shield,
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
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Stunning interfaces and seamless experiences that captivate users and drive engagement.',
  },
  {
    icon: Search,
    title: 'SEO & Digital Marketing',
    description:
      'Strategic marketing solutions to increase visibility and attract your ideal customers.',
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description:
      'Ongoing support and optimization to keep your digital solutions running smoothly.',
  },
];

export function Services() {
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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-accent mb-4 animate-slide-down hover:scale-105 transition-transform">
            Our Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Services That <span className="bg-linear-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text animate-pulse-slow">Transform</span> Your Vision
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive solutions designed to elevate your digital presence and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass rounded-xl p-8 group hover:bg-white/15 transition-all duration-500 hover:shadow-lg"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                  <Icon size={24} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
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
      </div>
    </section>
  );
}
