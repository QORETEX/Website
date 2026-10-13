'use client';

import { motion } from 'framer-motion';
import { HiHome, HiOfficeBuilding, HiAcademicCap, HiSun, HiShieldCheck, HiCheckCircle } from 'react-icons/hi';

const bundles = [
  {
    icon: HiHome,
    title: 'Smart Home Package',
    description: 'Complete smart home setup for new constructions',
    features: [
      'Architectural design',
      'Smart wiring and electrical',
      'CCTV and security systems',
      'Wi-Fi coverage planning',
      'Remote monitoring setup'
    ],
    highlight: true
  },
  {
    icon: HiOfficeBuilding,
    title: 'Full Office Setup',
    description: 'Everything you need for a modern office',
    features: [
      'Office layout and design',
      'Network infrastructure',
      'Devices and equipment',
      'Security systems',
      'Ongoing IT support'
    ]
  },
  {
    icon: HiAcademicCap,
    title: 'School ICT Lab Setup',
    description: 'Complete ICT lab installation and training',
    features: [
      'Lab design and layout',
      'Equipment procurement',
      'Network setup',
      'Security implementation',
      'Teacher training program'
    ]
  },
  {
    icon: HiSun,
    title: 'Solar Plus Monitoring',
    description: 'Solar installation with remote monitoring',
    features: [
      'Solar system design',
      'Professional installation',
      'Performance monitoring',
      'Remote diagnostics',
      'Maintenance service plan'
    ]
  },
  {
    icon: HiOfficeBuilding,
    title: 'Smart Building Retrofit',
    description: 'Upgrade existing buildings with modern tech',
    features: [
      'System assessment',
      'Network upgrade',
      'Access control',
      'Monitoring systems',
      'Ongoing support'
    ]
  },
  {
    icon: HiShieldCheck,
    title: 'Annual Care Plan',
    description: 'Comprehensive yearly maintenance package',
    features: [
      'Priority repair service',
      'Network maintenance',
      'Security audits',
      'Software updates',
      'Quarterly check-ups'
    ],
    highlight: true
  }
];

export default function Bundles() {
  return (
    <section id="bundles" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cross-Field Bundles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our competitive edge: <span className="font-semibold text-emerald-600">one company, one contract</span>
            <br />
            Integrated solutions that combine multiple services for maximum value
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                bundle.highlight ? 'border-2 border-blue-500' : 'border border-gray-200'
              }`}
            >
              {bundle.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              <div className="w-16 h-16 bg-blue-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <bundle.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {bundle.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {bundle.description}
              </p>
              <ul className="space-y-3">
                {bundle.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <HiCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
