const experiences = [
  {
    period: '2022 — Present',
    title: 'Integrated Solutions',
    description: 'Delivering cross-field technology solutions combining architecture, networking, cybersecurity, software, and electronics'
  },
  {
    period: '2020 — 2022',
    title: 'Network Infrastructure',
    description: 'Specialized in enterprise networking, CCTV systems, and structured cabling for commercial clients'
  },
  {
    period: '2018 — 2020',
    title: 'Software Development',
    description: 'Built custom web applications and management systems for SMEs and educational institutions'
  }
];

export default function Experience() {
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto border-t border-gray-200">
      <div>
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx}>
              <div className="text-sm text-emerald-600 font-medium mb-2">{exp.period}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{exp.title}</h3>
              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
