import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Bundles from '@/components/Bundles';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <Services />
      <Bundles />
      <About />
      <Contact />
    </main>
  );
}
