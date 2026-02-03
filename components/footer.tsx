'use client';

import React from "react"

import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import Image from 'next/image';


const footerLinks = {
  Company: ['About Us', 'Careers', 'Blog', 'Press'],
  Services: [
    'Web Development',
    'App Development',
    'UI/UX Design',
    'Digital Marketing',
  ],
  Resources: ['Documentation', 'FAQ', 'Support', 'Community'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Contact'],
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Instagram, label: 'Instagram' },
];

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  const handleSocialClick = (platform: string) => {
    const links: Record<string, string> = {
      Facebook: 'https://facebook.com',
      Twitter: 'https://twitter.com',
      LinkedIn: 'https://linkedin.com',
      Instagram: 'https://instagram.com',
    };
    window.open(links[platform], '_blank');
  };

  return (
    <footer className="relative bg-background border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="glass rounded-xl p-4 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 animate-slide-up hover:shadow-2xl transition-all duration-300">
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-accent transition-colors">
                  Stay Updated
                </h3>
                <p className="text-xs sm:text-base text-foreground/60">
                  Subscribe to get the latest updates and insights
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-3 bg-black/20 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 text-sm"
                  required
                />
                <button type="submit" className="px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-blue-500 to-cyan-400 text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 group cursor-pointer text-sm sm:text-base whitespace-nowrap">
                  <span>Subscribe</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform hidden sm:block" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1 col-span-2 sm:col-span-1">
              {/* <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-base sm:text-lg font-bold text-foreground">TechVision</span>
              </div> */}
              <div className="flex items-center gap-2 mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300">
                <Image
                  src="/techvision-logo.jpg"
                  alt="TechVision Logo"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover shrink-0"
                />
                <span className="text-base sm:text-lg font-bold text-foreground">TechVision</span>
              </div>
              <p className="text-foreground/60 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                Transforming ideas into digital solutions that drive real business impact.
              </p>
              <div className="flex gap-2 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleSocialClick(social.label)}
                      className="w-8 sm:w-10 h-8 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center text-foreground/60 hover:text-accent hover:bg-white/20 transition-all cursor-pointer"
                      aria-label={social.label}
                    >
                      <Icon size={16} className="sm:w-5" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-foreground mb-4 sm:mb-6 text-sm sm:text-base">{category}</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-foreground/60 hover:text-accent transition-colors text-xs sm:text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-foreground/60 text-xs sm:text-sm text-center sm:text-left">
              © 2024 TechVision. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
