'use client';

import { useEffect, useState } from 'react';

export default function Skills() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <section id="contact" className="py-16 px-6 max-w-2xl mx-auto border-t border-gray-200 mb-20">
      <h2 className="text-2xl font-medium text-gray-900 mb-8">Get in Touch</h2>

      <div className="space-y-6 text-gray-600">
        <div>
          <p className="mb-2">For project inquiries and consultations:</p>
          <a
            href="mailto:info@qoretex.com"
            className="text-gray-900 hover:text-emerald-600 transition-colors"
          >
            info@qoretex.com
          </a>
        </div>

        <div>
          <p className="mb-2">Call us:</p>
          <a
            href="tel:+233XXXXXXXXX"
            className="text-gray-900 hover:text-emerald-600 transition-colors"
          >
            +233 XX XXX XXXX
          </a>
        </div>

        <div>
          <p className="mb-2">Visit us:</p>
          <p className="text-gray-900">Accra, Ghana</p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex gap-6 text-sm">
          <a
            href="https://twitter.com/qoretex"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/company/qoretex"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/qoretex"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-8">
          © {year} Qoretex. All rights reserved.
        </p>
      </div>
    </section>
  );
}
