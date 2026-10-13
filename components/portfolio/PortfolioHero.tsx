'use client';

import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';

export default function PortfolioHero() {
  return (
    <section className="pt-32 pb-12 px-6 max-w-3xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-12 transition-colors text-sm"
      >
        <HiArrowLeft className="mr-2" size={16} />
        Back
      </Link>

      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Work & Projects
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Selected projects across architecture, networking, cybersecurity,
          software, and electronics. Each one built to solve real problems.
        </p>
      </div>
    </section>
  );
}
