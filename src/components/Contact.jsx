import { useState } from 'react'
import { Link } from 'react-router-dom'
import DemoForm from './DemoForm'

export default function Contact() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-blue-50">
      {/* Top Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-teal-600 hover:text-teal-700 flex items-center gap-2">
              ← Back to Home
            </Link>
            <button
              onClick={() => setIsDemoFormOpen(true)}
              className="px-4 py-2 bg-teal-500 text-white rounded-lg font-semibold 
                       hover:bg-teal-600 transition-colors"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-white/90">Let's discuss how UnBick can transform your institution</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 mt-1 text-teal-500">📍</div>
                  <div>
                    <h3 className="font-semibold text-teal-600 mb-1">Address</h3>
                    <p className="text-slate-600">Ranchi, Jharkhand, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 mt-1 text-teal-500">📞</div>
                  <div>
                    <h3 className="font-semibold text-teal-600 mb-1">Phone</h3>
                    <p className="text-slate-600">+91 700 4944 857</p>
                    <p className="text-slate-600">+91 821 0432 603</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 mt-1 text-teal-500">✉️</div>
                  <div>
                    <h3 className="font-semibold text-teal-600 mb-1">Email</h3>
                    <p className="text-slate-600">info@unbick.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Follow Us</h2>
              <div className="grid grid-cols-3 gap-4">
                {['LinkedIn', 'Twitter', 'YouTube'].map((platform) => (
                  <a 
                    key={platform}
                    href="#"
                    className="flex items-center justify-center p-4 rounded-xl bg-slate-50 
                             hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Schedule Demo Card */}
          <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl p-6 md:p-8 text-white shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Institution?</h2>
            <p className="mb-8 text-white/90">
              Schedule a personalized demo to see how UnBick can streamline your educational operations.
            </p>
            <button
              onClick={() => setIsDemoFormOpen(true)}
              className="w-full py-3 px-6 bg-white text-teal-600 rounded-lg font-semibold 
                       hover:bg-teal-50 transition-colors"
            >
              Schedule Your Demo
            </button>
          </div>
        </div>
      </div>

      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </div>
  )
}
