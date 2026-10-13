const services = [
  {
    name: 'Architecture',
    description: 'Building design, renovations, 3D visualizations, inspections, interior planning, solar integration'
  },
  {
    name: 'Networking',
    description: 'Wi-Fi systems, structured cabling, CCTV, access control, estate internet, managed support'
  },
  {
    name: 'Cybersecurity',
    description: 'Security audits, staff training, backup solutions, compliance, incident response, device hardening'
  },
  {
    name: 'Software',
    description: 'Custom web applications, school management systems, e-commerce platforms, API development'
  },
  {
    name: 'Electronics',
    description: 'Device repair, UPS servicing, POS systems, refurbished resale, spare parts, training'
  }
];

export default function Experience() {
  return (
    <section id="services" className="py-16 px-6 max-w-2xl mx-auto border-t border-gray-200">
      <h2 className="text-2xl font-medium text-gray-900 mb-8">What We Do</h2>

      <div className="space-y-8">
        {services.map((service, idx) => (
          <div key={idx}>
            <h3 className="text-base font-medium text-gray-900 mb-2">
              {service.name}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200">
        <p className="text-gray-600 leading-relaxed mb-6">
          Our advantage is integration. One company, one contract — from architectural
          plans to network setup to ongoing support. We handle projects that span multiple
          domains without the coordination overhead of managing separate vendors.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Based in Accra, we serve businesses, schools, estates, and individuals across Ghana.
        </p>
      </div>
    </section>
  );
}
