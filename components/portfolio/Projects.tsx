const projects = [
  {
    title: 'Smart Office Complex',
    category: 'Architecture + Networking',
    description: 'Complete office building design with integrated network infrastructure, security systems, and energy-efficient features for a tech startup.',
    year: '2024'
  },
  {
    title: 'School Management Platform',
    category: 'Software Development',
    description: 'Custom web application for managing student records, fees, attendance, and academic performance with real-time parent access.',
    year: '2024'
  },
  {
    title: 'Estate-Wide Internet',
    category: 'Networking',
    description: 'Deployed fiber-optic network infrastructure serving 200+ residential units with 24/7 monitoring and support.',
    year: '2023'
  },
  {
    title: 'Enterprise Security Audit',
    category: 'Cybersecurity',
    description: 'Comprehensive security assessment for financial services company including penetration testing, policy review, and staff training.',
    year: '2023'
  },
  {
    title: 'Solar Smart Home',
    category: 'Architecture + Electronics',
    description: 'Residential design with solar installation, smart wiring, automated lighting, and remote monitoring capabilities.',
    year: '2024'
  },
  {
    title: 'ICT Lab Setup',
    category: 'Cross-Field Bundle',
    description: 'Complete computer lab for private school including room design, equipment, networking, and teacher training program.',
    year: '2023'
  },
  {
    title: 'E-commerce Platform',
    category: 'Software Development',
    description: 'Full-featured online store with payment integration, inventory management, and customer analytics for retail business.',
    year: '2024'
  },
  {
    title: 'CCTV & Access Control',
    category: 'Networking + Security',
    description: 'IP-based surveillance system with facial recognition and biometric access control for corporate headquarters.',
    year: '2023'
  }
];

export default function Projects() {
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <div>
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <article key={idx} className="group">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm text-gray-500">{project.category}</span>
                <span className="text-sm text-gray-400">{project.year}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
