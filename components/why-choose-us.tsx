'use client';

import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Expert Team',
    description:
      'Highly skilled professionals with years of experience across diverse industries and technologies.',
  },
  {
    title: 'Client-Focused Approach',
    description:
      'We prioritize your goals and vision, ensuring every solution aligns perfectly with your needs.',
  },
  {
    title: 'On-Time Delivery',
    description:
      'Reliable project management and transparent timelines ensure your projects launch exactly when planned.',
  },
  {
    title: 'Affordable & Scalable',
    description:
      'Flexible solutions that grow with your business without compromising quality or breaking the budget.',
  },
];

export function WhyChooseUs() {
  const handleConsultation = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-accent mb-4">
            Why Partner With Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Trusted by <span className="bg-linear-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">Industry Leaders</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:glow-accent"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 size={28} className="text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-foreground/70 mb-6">
            Ready to transform your digital vision into reality?
          </p>
          <button onClick={handleConsultation} className="px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-400 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer">
            Start a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
