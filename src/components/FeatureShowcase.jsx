import { useState, useEffect } from 'react'

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const features = [
    {
      title: "Smart Dashboard",
      description: "Role-Based Smart Dashboards",
      stats: [
        "Admin Dashboard - Complete school overview",
        "Teacher Portal - Class & student management",
        "Student Portal - Access to learning resources",
        "Parent Portal - Child's progress tracking",
        "custom dashboards - Tailored for each role"  
      ],
      images: [
        '/assets/images/Dashboard/WhatsApp Image 2025-04-04 at 22.02.29_ed495d2f.jpg',
        '/assets/images/Dashboard/WhatsApp Image 2025-04-04 at 22.02.31_717604c4.jpg',
        '/assets/images/Dashboard/WhatsApp Image 2025-04-04 at 22.02.31_bccee002.jpg',
        '/assets/images/Dashboard/WhatsApp Image 2025-04-04 at 22.02.31_e973639d.jpg'
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Management Suite",
      description: "Customized Workspaces",
      stats: [
        "Admission Management System",
        "Student Management ",
        "Staff Management",
        "Finance Management",
        "Transport Management"
      ],
      images: ['/assets/images/Management/WhatsApp Image 2025-04-04 at 22.02.29_3421607e.jpg',
                '/assets/images/Management/WhatsApp Image 2025-04-04 at 22.02.30_479cea46.jpg',
                '/assets/images/Management/WhatsApp Image 2025-04-04 at 22.02.30_ac8fe46d.jpg',
                '/assets/images/Management/WhatsApp Image 2025-04-04 at 22.02.30_b535e06b.jpg'
      ],
      color: "from-teal-500 to-green-500"
    },
    {
      title: "AI Integration",
      description: "AI-Powered Insights",
      stats: [
        "AI-Driven Analytics",
        "assessment generation",
        "automated workflows",
        "question bank creation",
      ],
      images: ['/assets/images/AI/images.png',],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Custom Modules",
      description: "Tailored Solutions",
      stats: [
        "exam scheduling",
        "attendance management",  
        "report card generation",
        "transport location tracking",
        "fee collection",
        "communication tools",
        "custom modules for specific needs",

      ],
      images: ['/assets/images/Modules/WhatsApp Image 2025-04-04 at 22.02.30_a4d99ebf.jpg',
                '/assets/images/Modules/WhatsApp Image 2025-04-04 at 22.02.30_baae026e.jpg',
                '/assets/images/Modules/WhatsApp Image 2025-04-04 at 22.02.30_d8e2ae64.jpg',
                '/assets/images/Modules/WhatsApp Image 2025-04-04 at 22.02.31_348dbc0e.jpg'
      ],
      color: "from-orange-500 to-red-500"
    }
  ]

  // Auto slide images
  useEffect(() => {
    const feature = features[activeFeature]
    if (!feature.images || feature.images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === feature.images.length - 1 ? 0 : prev + 1
      )
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(timer)
  }, [activeFeature])

  // Reset image index when changing features
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [activeFeature])

  return (
    <section id="features" className="min-h-screen md:py-20 scroll-mt-0 md:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Fixed Header - Adjusted padding for mobile */}
        <div className="pt-8 md:pt-0 mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Experience our comprehensive suite of tools designed specifically for modern educational institutions
          </p>
        </div>
        
        {/* Feature Navigation - Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`p-4 rounded-lg transition-all duration-300 ${
                activeFeature === index 
                  ? 'bg-gradient-to-r ' + feature.color + ' text-white'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Feature Info - Static position */}
          <div className="md:w-1/2 space-y-6">
            <div className="bg-slate-900/80 p-6 rounded-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                {features[activeFeature].description}
              </p>
              <ul className="space-y-4">
                {features[activeFeature].stats.map((stat, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 flex-shrink-0 rounded-full bg-teal-400"></span>
                    <span className="text-gray-300">{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Screenshots - Different styling for mobile/desktop */}
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden md:glass-card md:p-4">
              <div className="aspect-video relative overflow-hidden md:rounded-lg bg-black/20">
                {features[activeFeature].images?.map((img, index) => (
                  <img
                    key={img}
                    src={img}
                    alt={`${features[activeFeature].title} screenshot ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-contain transition-all duration-1000"
                    style={{
                      opacity: index === currentImageIndex ? 1 : 0,
                      transform: `translateX(${(index - currentImageIndex) * 100}%)`,
                    }}
                  />
                ))}
                
                {/* Indicators - Adjusted positioning */}
                {features[activeFeature].images?.length > 1 && (
                  <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {features[activeFeature].images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-teal-400 w-4' 
                            : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
