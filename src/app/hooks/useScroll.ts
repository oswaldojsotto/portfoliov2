import { useState, useLayoutEffect } from 'react'

export const useScroll = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const handleScroll = () => {
    setPosition({
      x: typeof window !== 'undefined' ? window.scrollX : 0,
      y: typeof window !== 'undefined' ? window.scrollY : 0,
    })
  }

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return { 
    position, 
    scrollTo: typeof window !== 'undefined' ? window.scrollTo : () => {} 
  }
}
