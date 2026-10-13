'use client';

import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Qoretex?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We are a comprehensive technology solutions provider offering integrated services
              across multiple domains. Our unique approach allows clients to work with one
              trusted partner for all their technology needs.
            </p>
            <div className="space-y-4">
              {[
                'One company, one contract - simplified procurement',
                'Expert teams across all five service domains',
                'Proven track record with diverse clients',
                'Competitive pricing with bundled solutions',
                'Ongoing support and maintenance',
                'Local presence with international standards'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <HiCheckCircle className="text-emerald-500 mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-emerald-50 p-8 rounded-xl">
              <p className="text-4xl font-bold text-emerald-600 mb-2">34+</p>
              <p className="text-gray-700">Service Offerings</p>
            </div>
            <div className="bg-emerald-50 p-8 rounded-xl">
              <p className="text-4xl font-bold text-emerald-600 mb-2">5</p>
              <p className="text-gray-700">Core Domains</p>
            </div>
            <div className="bg-emerald-50 p-8 rounded-xl">
              <p className="text-4xl font-bold text-emerald-600 mb-2">100%</p>
              <p className="text-gray-700">Client Satisfaction</p>
            </div>
            <div className="bg-emerald-50 p-8 rounded-xl">
              <p className="text-4xl font-bold text-emerald-600 mb-2">24/7</p>
              <p className="text-gray-700">Support Available</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
