'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaBuilding, FaNetworkWired, FaShieldAlt, FaScrewdriver, FaCode } from 'react-icons/fa';

const services = [
  {
    icon: FaBuilding,
    title: 'Architecture',
    description: 'Professional architectural design and planning services',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
    items: [
      'House plan catalog',
      'Renovation design',
      '3D walkthroughs',
      'Building inspections',
      'Interior planning',
      'Solar-smart design'
    ]
  },
  {
    icon: FaNetworkWired,
    title: 'Networking',
    description: 'Complete networking infrastructure solutions',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    items: [
      'Wi-Fi installation',
      'Structured cabling',
      'CCTV systems',
      'Estate internet',
      'Network support',
      'Event hotspots'
    ]
  },
  {
    icon: FaShieldAlt,
    title: 'Cybersecurity',
    description: 'Comprehensive security and data protection',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    items: [
      'Security audits',
      'Staff training',
      'Backup solutions',
      'Device hardening',
      'DPA compliance',
      'Incident response'
    ]
  },
  {
    icon: FaScrewdriver,
    title: 'Electronic Repairs',
    description: 'Expert repair and maintenance services',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    items: [
      'Repair center',
      'Refurbished resale',
      'UPS servicing',
      'POS repair',
      'Training academy',
      'Parts wholesale'
    ]
  },
  {
    icon: FaCode,
    title: 'Software Development',
    description: 'Custom software solutions for your business',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    items: [
      'Custom software',
      'School systems',
      'E-commerce sites',
      'Training bootcamp'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions across five core technology domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-emerald-600">
                    <service.icon size={24} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start">
                      <span className="text-emerald-600 mr-2">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
