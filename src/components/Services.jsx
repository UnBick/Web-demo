export default function Services() {
  const services = [
    {
      title: "Website Development",
      subtitle: "Craft Your Digital Identity",
      content: "Responsive design, SEO optimization, virtual tours, and brand-aligned websites"
    },
    {
      title: "ERP Solutions",
      subtitle: "Centralize, Automate, Excel",
      content: "Student/staff management, fee automation, AI integration"
    },
    {
      title: "Digital Growth",
      subtitle: "Future-Proof Your Institution",
      content: "AI-driven assessments, workflow automation, custom portals"
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl gradient-text text-center mb-4">Core Services</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Transform your institution with our comprehensive suite of digital solutions
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-8 hover-glow">
              <div className="w-16 h-16 mb-6 rounded-lg bg-gradient-to-br from-teal-400 to-blue-500"></div>
              <h3 className="text-2xl font-bold text-teal-400 mb-2">{service.title}</h3>
              <h4 className="text-lg text-white/90 mb-4">{service.subtitle}</h4>
              <p className="text-gray-300">{service.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}