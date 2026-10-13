'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-emerald-600">
            Qoretex
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/#services" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Services
            </Link>
            <Link href="/#bundles" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Bundles
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </div>

          <Link
            href="/#contact"
            className="hidden md:block bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Get Quote
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/#services" className="block py-2 text-gray-700 hover:text-emerald-600">
              Services
            </Link>
            <Link href="/#bundles" className="block py-2 text-gray-700 hover:text-emerald-600">
              Bundles
            </Link>
            <Link href="/#about" className="block py-2 text-gray-700 hover:text-emerald-600">
              About
            </Link>
            <Link href="/portfolio" className="block py-2 text-gray-700 hover:text-emerald-600">
              Portfolio
            </Link>
            <Link href="/#contact" className="block py-2 text-gray-700 hover:text-emerald-600">
              Contact
            </Link>
            <Link
              href="/#contact"
              className="block w-full text-center bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors mt-4"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
