import Image from 'next/image';

const projects = [
  {
    title: 'Smart Office Complex',
    client: 'Tech Startup, Accra',
    description: 'Complete office building design with integrated network infrastructure, security systems, and energy-efficient features. Delivered architectural plans, structured cabling, CCTV setup, and ongoing IT support.',
    tags: ['Architecture', 'Networking', 'Security'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
  },
  {
    title: 'School Management System',
    client: 'Private School Group',
    description: 'Custom web platform for managing student records, fees, attendance, and academic performance. Includes parent portal for real-time updates and mobile app for teachers.',
    tags: ['Software', 'Web App'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80'
  },
  {
    title: 'Estate Network Infrastructure',
    client: '200+ Unit Residential Estate',
    description: 'Fiber-optic network deployment serving entire residential estate. Includes 24/7 monitoring, customer support system, and billing integration.',
    tags: ['Networking', 'Infrastructure'],
    year: '2023',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
  },
  {
    title: 'Enterprise Security Audit',
    client: 'Financial Services Company',
    description: 'Comprehensive security assessment including penetration testing, policy review, and staff training. Delivered security roadmap and ongoing monitoring.',
    tags: ['Cybersecurity', 'Compliance'],
    year: '2023',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
  },
  {
    title: 'Solar Smart Home',
    client: 'Private Residence',
    description: 'Residential design with solar installation, smart wiring, automated lighting, and remote monitoring. Complete architectural and electrical integration.',
    tags: ['Architecture', 'Solar', 'Electronics'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80'
  },
  {
    title: 'School ICT Lab',
    client: 'International School',
    description: 'Complete computer lab setup including room design, equipment procurement, network infrastructure, and teacher training program.',
    tags: ['Education', 'Infrastructure'],
    year: '2023',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80'
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-16 px-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-medium text-gray-900 mb-12">Selected Work</h2>

      <div className="space-y-20">
        {projects.map((project, idx) => (
          <article key={idx} className="group">
            {/* Project Image */}
            <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Project Info */}
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-medium text-gray-900">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-500">{project.year}</span>
              </div>

              <p className="text-sm text-gray-500">{project.client}</p>

              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
