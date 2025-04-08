import { useState, useEffect } from 'react'

export default function useScrollTrigger(threshold = 0) {
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (scrolled > threshold) {
        setTriggered(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return triggered
}
