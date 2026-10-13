const skillCategories = [
  {
    category: 'Architecture',
    skills: 'AutoCAD • 3D Rendering • Building Codes • Interior Design • Solar Design'
  },
  {
    category: 'Networking',
    skills: 'Cisco • Structured Cabling • Wi-Fi Planning • CCTV Systems • Network Monitoring'
  },
  {
    category: 'Cybersecurity',
    skills: 'Security Audits • Penetration Testing • Compliance • Incident Response • Backup'
  },
  {
    category: 'Software',
    skills: 'React • Node.js • Python • Database Design • API Development'
  },
  {
    category: 'Electronics',
    skills: 'Device Repair • UPS Systems • POS Systems • Diagnostics • Parts Sourcing'
  }
];

export default function Skills() {
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto border-t border-gray-200 mb-20">
      <div>
        <div className="space-y-8">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {category.category}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {category.skills}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 leading-relaxed">
            At Qoretex, we believe in integrated solutions. Our multidisciplinary approach
            allows us to tackle complex projects that span multiple domains, providing clients
            with seamless, end-to-end service delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
