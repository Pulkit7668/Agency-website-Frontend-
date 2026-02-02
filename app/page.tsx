import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { WhyChooseUs } from '@/components/why-choose-us';
import { WorkProcess } from '@/components/work-process';
import { Portfolio } from '@/components/portfolio';
import { Testimonials } from '@/components/testimonials';
import { Careers } from '@/components/careers';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="dark">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <WorkProcess />
      <Portfolio />
      <Testimonials />
      <Careers />
      <CTASection />
      <Footer />
    </main>
  );
}