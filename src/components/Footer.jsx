import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold text-teal-400 mb-2">UnBick</h3>
          <p className="text-gray-400">Transformative Educational Technology Solutions</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-teal-400">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Ranchi, Jharkhand, India</p>
              <p>Email: info@unbick.com</p>
              <p>Phone: +91 700 4944 857</p>
              <p>Phone: +91 821 0432 603</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-teal-400">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-teal-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-teal-400 transition-colors">YouTube</a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-teal-400">Trust & Security</h4>
            <div className="flex gap-4 items-center">
              <span className="text-sm text-gray-400">SSL Secured</span>
              <span className="text-sm text-gray-400">ISO 27001 Certified</span>
            </div>
          </div>
          <div className="space-y-4">
            <Link to="/contact" className="text-teal-400 hover:text-teal-300 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 UnBick. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
