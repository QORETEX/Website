import PortfolioHero from '@/components/portfolio/PortfolioHero';
import Projects from '@/components/portfolio/Projects';
import Experience from '@/components/portfolio/Experience';
import Skills from '@/components/portfolio/Skills';

export const metadata = {
  title: 'Portfolio - Qoretex',
  description: 'Explore our work and projects across architecture, networking, cybersecurity, and more',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <PortfolioHero />
      <Projects />
      <Experience />
      <Skills />
    </main>
  );
}
