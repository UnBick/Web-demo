import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import DemoForm from './DemoForm'

export default function NavButton() {
  const location = useLocation()
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)

  const getLinks = () => {
    switch (location.pathname) {
      case '/':
        return [
          { to: '/products', text: 'Our Product' },
          { to: '/contact', text: 'Contact Us' }
        ]
      case '/products':
        return [
          { to: '/', text: 'Home' },
          { to: '/contact', text: 'Contact Us' }
        ]
      case '/contact':
        return [
          { to: '/', text: 'Home' },
          { to: '/products', text: 'Our Product' }
        ]
      default:
        return [
          { to: '/', text: 'Home' },
          { to: '/contact', text: 'Contact Us' }
        ]
    }
  }

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <button
          onClick={() => setIsDemoFormOpen(true)}
          className="px-4 py-3 rounded-full bg-teal-600 text-white shadow-lg 
                   hover:bg-teal-700 transition-all duration-300 flex items-center gap-2"
        >
          Schedule Demo
        </button>
        {getLinks().map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="px-4 py-3 rounded-full bg-teal-500 text-white shadow-lg 
                     hover:bg-teal-600 transition-all duration-300 flex items-center gap-2"
          >
            {link.text}
          </Link>
        ))}
      </div>

      <DemoForm 
        isOpen={isDemoFormOpen} 
        onClose={() => setIsDemoFormOpen(false)} 
      />
    </>
  )
}
