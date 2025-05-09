import { useState } from 'react'
import { Link } from 'react-router-dom'
import DemoForm from './DemoForm'

export default function ProductDetails() {
  const [zoomedImage, setZoomedImage] = useState(null)
  const [zoomedImageIndex, setZoomedImageIndex] = useState(0)
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)

  const sections = {
    admin: {
      title: "Admin Dashboard",
      subtitle: "Command Center for Educational Excellence",
      description: `The Admin Dashboard is the nerve center of UnBick's ERP system. It provides educational administrators with a panoramic view of institutional operations in real time.`,
      images: [
        '/assets/images/Dashboard/WhatsApp Image 2025-04-04 at 22.02.29_ed495d2f.jpg',
        '/assets/images/Dashboard/WhatsApp Image 2025-04-04 at 22.02.31_717604c4.jpg',
        '/assets/images/Dashboard/WhatsApp Image 2025-04-04 at 22.02.31_bccee002.jpg'
      ],
      features: [
        "Real-time analytics and dynamic widgets",
        "Customizable control panels",
        "Instant report generation",
        "Role-based access control",
        "Comprehensive data visualization",
        "Historical data comparison",
        "Proactive system alerts"
      ],
      color: "from-blue-600 to-teal-500"
    },
    student: {
      title: "Student Management",
      subtitle: "Revolutionizing Academic Progression",
      description: `The Student Management module revolutionizes how academic institutions handle student data and academic progression. It consolidates all student-related information into a single accessible system, ensuring accurate tracking of each student's educational journey.`,
      images: [
        '/assets/images/Management/WhatsApp Image 2025-04-04 at 22.02.29_3421607e.jpg',
        '/assets/images/Management/WhatsApp Image 2025-04-04 at 22.02.30_479cea46.jpg'
      ],
      features: [
        "Comprehensive student profiles",
        "Academic performance tracking",
        "Attendance management",
        "Digital report cards",
        "Parent-teacher communication",
        "Assignment management",
        "Behavioral tracking"
      ],
      color: "from-green-600 to-teal-500"
    },
    admin_tools: {
      title: "Seamless Administration",
      subtitle: "Streamlining Institutional Workflows",
      description: `The Seamless Administration feature simplifies core academic and operational workflows within an institution. From student enrollment to graduation, every administrative process is streamlined and digitized for maximum efficiency.`,
      images: [
        '/assets/images/Modules/WhatsApp Image 2025-04-04 at 22.02.30_a4d99ebf.jpg',
        '/assets/images/Modules/WhatsApp Image 2025-04-04 at 22.02.30_baae026e.jpg'
      ],
      features: [
        "Automated enrollment process",
        "Exam scheduling system",
        "Transport management",
        "Attendance tracking",
        "Document management",
        "Resource allocation",
        "Event management"
      ],
      color: "from-purple-600 to-teal-500"
    },
    staff: {
      title: "Staff Management",
      subtitle: "Organized Approach to Human Resources",
      description: `The Staff Management module ensures a comprehensive and organized approach to human resources within educational institutions. It streamlines staff-related operations from recruitment to retirement.`,
      images: [
        '/assets/images/Management/WhatsApp Image 2025-04-04 at 22.02.30_ac8fe46d.jpg',
        '/assets/images/Management/WhatsApp Image 2025-04-04 at 22.02.30_b535e06b.jpg'
      ],
      features: [
        "Staff profiles and documentation",
        "Leave management",
        "Performance evaluation",
        "Payroll integration",
        "Training management",
        "Attendance tracking",
        "Work allocation"
      ],
      color: "from-red-600 to-teal-500"
    },
    finance: {
      title: "Finance Management",
      subtitle: "Automating Financial Ecosystems",
      description: `The Finance Management module automates and manages the complete financial ecosystem of an educational institution. From fee collection to expense tracking, every financial aspect is handled with precision and transparency.`,
      images: [
        '/assets/images/Modules/WhatsApp Image 2025-04-04 at 22.02.30_d8e2ae64.jpg',
        '/assets/images/Modules/WhatsApp Image 2025-04-04 at 22.02.31_348dbc0e.jpg'
      ],
      features: [
        "Fee management",
        "Online payment integration",
        "Expense tracking",
        "Payroll processing",
        "Financial reporting",
        "Budget planning",
        "Audit trails"
      ],
      color: "from-yellow-600 to-teal-500"
    },
    ai: {
      title: "Integrated A.I.",
      subtitle: "Next-Generation Automation and Insight",
      description: `The Integrated A.I. feature transforms how institutions approach curriculum design, assessment, and data management. By embedding artificial intelligence into the ERP system, UnBick introduces next-generation automation and insight.`,
      images: ['/assets/images/AI/images.png'],
      features: [
        "AI-driven analytics",
        "Automated assessment generation",
        "Predictive performance analysis",
        "Smart content recommendations",
        "Workflow automation",
        "Intelligent scheduling",
        "Behavioral pattern analysis"
      ],
      color: "from-indigo-600 to-teal-500"
    }
  }

  const handleImageZoom = (images, index) => {
    setZoomedImage(images)
    setZoomedImageIndex(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-blue-50 overflow-hidden">
      {/* Top Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-teal-600 hover:text-teal-700 flex items-center gap-2">
            ← Back to Home
          </Link>
          <h1 className="text-slate-800 font-bold text-xl">UnBick Solutions</h1>
          <button
            onClick={() => setIsDemoFormOpen(true)}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg font-semibold 
                     hover:bg-teal-600 transition-colors"
          >
            Schedule Demo
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        {Object.entries(sections).map(([key, section], index) => (
          <div key={key} className="py-16 first:pt-8 last:pb-24">
            {/* Section Hero */}
            <div className={`rounded-2xl overflow-hidden mb-12 bg-gradient-to-r ${section.color}`}>
              <div className="relative px-8 py-16">
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
                <div className="relative space-y-4">
                  <h2 className="text-4xl md:text-6xl font-bold text-white">{section.title}</h2>
                  <p className="text-xl text-white/90">{section.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Description */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="prose prose-lg">
                  <p className="text-slate-600">{section.description}</p>
                  <h3 className="text-2xl font-bold text-slate-800 mt-8">Key Features</h3>
                  <ul className="space-y-4 mt-4">
                    {section.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-600">
                        <span className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-semibold">
                          {idx + 1}
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Gallery */}
              <div className="space-y-6">
                <div 
                  className="aspect-[4/3] rounded-2xl overflow-hidden bg-white p-4 shadow-xl cursor-zoom-in"
                  onClick={() => handleImageZoom(section.images, 0)}
                >
                  <img
                    src={section.images[0]}
                    alt={section.title}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {section.images.slice(1).map((img, idx) => (
                    <div 
                      key={idx}
                      className="aspect-square rounded-xl overflow-hidden bg-white p-2 shadow-lg hover:shadow-xl transition-all cursor-zoom-in"
                      onClick={() => handleImageZoom(section.images, idx + 1)}
                    >
                      <img
                        src={img}
                        alt={`${section.title} preview ${idx + 2}`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center"
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage[zoomedImageIndex]}
            alt="Zoomed view"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}

      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </div>
  )
}
