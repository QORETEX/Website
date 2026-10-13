import Link from 'next/link';

export default function PortfolioHero() {
  return (
    <section className="pt-24 pb-16 px-6 max-w-2xl mx-auto">
      <Link
        href="/"
        className="text-gray-500 hover:text-gray-900 transition-colors text-sm mb-16 inline-block"
      >
        ← Home
      </Link>

      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
          Qoretex
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
          We build integrated technology solutions — combining architecture, networking,
          cybersecurity, software, and electronics into seamless systems. Based in Accra,
          serving businesses across Ghana.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">
            Work
          </a>
          <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
            Services
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
