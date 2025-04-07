export default function VisionSection() {
  const milestones = [
    {
      year: "2024",
      title: "AI Integration",
      descriptions: [
        "Advanced ML algorithms for personalized learning",
        "aminated & customized websites for schools"
      ]
    },
    {
      year: "2025",
      title: "Advance Expansion",
      descriptions: [
        "E-library and LMS integration for enhanced learning",
        "digital marketing and SEO tools for schools"
      ]
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Future Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-teal-500">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-teal-500"></div>
              <h3 className="text-teal-400 text-2xl font-bold mb-2">{milestone.year}</h3>
              <h4 className="text-white text-xl mb-2">{milestone.title}</h4>
              <div className="space-y-2">
                {milestone.descriptions.map((desc, i) => (
                  <p key={i} className="text-gray-300">{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
