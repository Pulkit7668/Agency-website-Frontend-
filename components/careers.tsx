'use client';

import { Briefcase, MapPin, Clock, ChevronRight } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build scalable web applications with React, Node.js, and cloud technologies.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    salaryRange: '$120K - $160K',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'New York, USA',
    type: 'Full-time',
    description: 'Create beautiful and functional user interfaces for web and mobile applications.',
    skills: ['Figma', 'UI Design', 'Prototyping', 'User Research'],
    salaryRange: '$90K - $130K',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    description: 'Manage cloud infrastructure and CI/CD pipelines for enterprise applications.',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    salaryRange: '$110K - $150K',
  },
  {
    id: 4,
    title: 'Product Manager',
    department: 'Product',
    location: 'San Francisco, USA',
    type: 'Full-time',
    description: 'Lead product strategy and vision for our flagship digital solutions.',
    skills: ['Product Strategy', 'Analytics', 'Leadership', 'Agile'],
    salaryRange: '$130K - $170K',
  },
  {
    id: 5,
    title: 'Junior Web Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Start your career building responsive web applications and learning best practices.',
    skills: ['JavaScript', 'React', 'HTML/CSS', 'Git'],
    salaryRange: '$60K - $90K',
  },
  {
    id: 6,
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Drive growth through strategic digital marketing campaigns and analytics.',
    skills: ['SEO', 'SEM', 'Analytics', 'Content Marketing'],
    salaryRange: '$70K - $100K',
  },
];

export function Careers() {
  const handleApplyJob = (jobTitle: string) => {
    alert(`Thank you for your interest in the "${jobTitle}" position!\n\nPlease send your resume and portfolio to careers@techvision.com`);
  };

  return (
    <section id="careers" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-xs sm:text-sm font-medium text-accent mb-4 animate-slide-down hover:scale-105 transition-transform">
            Join Our Team
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Exciting Opportunities to <span className="bg-linear-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text animate-pulse-slow">Grow Your Career</span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto text-balance animate-slide-up px-2" style={{ animationDelay: '0.2s' }}>
            Join our talented team of developers, designers, and innovators. We're building the future of digital solutions.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="glass rounded-xl p-4 sm:p-6 group hover:bg-white/15 transition-all duration-500 hover:shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Header */}
              <div className="mb-3 sm:mb-4">
                <h3 className="text-base sm:text-xl font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-accent transition-colors duration-500">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-accent/80 text-xs sm:text-sm">
                  <Briefcase size={14} className="sm:w-4" />
                  <span>{job.department}</span>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                <div className="flex items-center gap-2 text-foreground/70 text-xs sm:text-sm">
                  <MapPin size={14} className="text-cyan-400 sm:w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70 text-xs sm:text-sm">
                  <Clock size={14} className="text-cyan-400 sm:w-4" />
                  <span>{job.type}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-blue-400">
                  {job.salaryRange}
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground/70 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                {job.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 sm:px-3 py-1 text-xs bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Apply Button */}
              <button
                onClick={() => handleApplyJob(job.title)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-linear-to-r from-blue-500 to-cyan-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 cursor-pointer text-sm sm:text-base"
              >
                <span>Apply Now</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="glass rounded-xl p-8 sm:p-12 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Why Join TechVision?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Competitive Salary',
                description: 'Industry-leading compensation packages with performance bonuses',
              },
              {
                title: 'Remote Flexibility',
                description: 'Work from anywhere with flexible work arrangements',
              },
              {
                title: 'Professional Growth',
                description: 'Continuous learning opportunities and career development',
              },
              {
                title: 'Health Benefits',
                description: 'Comprehensive health insurance and wellness programs',
              },
              {
                title: 'Innovative Projects',
                description: 'Work on cutting-edge technology and impactful solutions',
              },
              {
                title: 'Team Culture',
                description: 'Collaborative environment with talented professionals',
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center hover:scale-105 transition-transform duration-300 group">
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-foreground/70">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-foreground/70 mb-6">
            Don't see the right position? Send us your profile and let's explore opportunities together.
          </p>
          <button
            onClick={() => alert('Send your resume to careers@techvision.com')}
            className="px-8 py-4 glass rounded-full text-foreground font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Send Your Profile
          </button>
        </div>
      </div>
    </section>
  );
}
