'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetQuote = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-dark py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="text-lg font-bold text-foreground hidden sm:inline">TechVision</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-foreground/80 hover:text-accent transition-all duration-300 relative group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button and Mobile Menu */}
        <div className="flex items-center gap-4">
          <button onClick={handleGetQuote} className="hidden sm:inline-flex px-6 py-2 bg-linear-to-r from-blue-500 to-cyan-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer">
            Get a Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-foreground/80 hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button onClick={handleGetQuote} className="w-full px-6 py-2 bg-linear-to-r from-blue-500 to-cyan-400 text-black font-semibold rounded-full hover:shadow-lg transition-all cursor-pointer">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
