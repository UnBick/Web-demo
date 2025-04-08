import { useState, useRef } from 'react'
import Notification from './Notification'

export default function DemoForm({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false)
  const formRef = useRef()
  const [formData, setFormData] = useState({
    instituteName: '',
    candidateName: '',
    designation: '',
    phone: '',
    email: '',
    demoDate: '',
    demoTime: ''
  })
  const [notification, setNotification] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData(formRef.current)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setNotification({
          type: 'success',
          message: 'Demo request sent successfully! We will contact you soon.'
        })
        setTimeout(() => {
          onClose()
          setNotification(null)
        }, 3000)
        formRef.current.reset()
      }
    } catch (error) {
      console.error('Form Error:', error)
      setNotification({
        type: 'error',
        message: 'Failed to send request. Please try again.'
      })
      setTimeout(() => setNotification(null), 3000)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e, field) => {
    e.preventDefault()
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[100] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          className="relative bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Schedule a Demo</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input 
              type="hidden" 
              name="access_key" 
              value="a9932b30-cb23-4174-a3d8-4b24cceaeaf3"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Institution Name</label>
                <input
                  type="text"
                  name="institution"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-white text-gray-800 placeholder:text-gray-400"
                  required
                  value={formData.instituteName}
                  onChange={(e) => handleInputChange(e, 'instituteName')}
                  placeholder="Enter institution name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-white text-gray-800 placeholder:text-gray-400"
                  required
                  value={formData.candidateName}
                  onChange={(e) => handleInputChange(e, 'candidateName')}
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Designation</label>
                <input
                  type="text"
                  name="designation"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-white text-gray-800 placeholder:text-gray-400"
                  required
                  value={formData.designation}
                  onChange={(e) => handleInputChange(e, 'designation')}
                  placeholder="Enter your designation"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-white text-gray-800 placeholder:text-gray-400"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange(e, 'phone')}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-white text-gray-800 placeholder:text-gray-400"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, 'email')}
                  placeholder="Enter your email address"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-white text-gray-800 placeholder:text-gray-400"
                  required
                  value={formData.demoDate}
                  onChange={(e) => handleInputChange(e, 'demoDate')}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Preferred Time</label>
                <input
                  type="time"
                  name="time"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-white text-gray-800 placeholder:text-gray-400"
                  required
                  value={formData.demoTime}
                  onChange={(e) => handleInputChange(e, 'demoTime')}
                />
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-3 px-6 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 disabled:opacity-50 transition-colors cursor-pointer"
              >
                {loading ? 'Sending...' : 'Schedule Demo'}
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onClose()
                }}
                className="flex-1 py-3 px-6 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
    </>
  )
}
