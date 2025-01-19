'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function InteractiveBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const backgroundRef = useRef<HTMLDivElement>(null)

  const springConfig = { damping: 30, stiffness: 50, mass: 0.5 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set(clientX / innerWidth - 0.5)
      mouseY.set(clientY / innerHeight - 0.5)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black" />
      <motion.div
        ref={backgroundRef}
        className="absolute inset-0 overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 200, 255, 0.15), rgba(0, 0, 0, 0) 50%)',
          transform: 'translate3d(0, 0, 0)',
          x: springX.get() * 100,
          y: springY.get() * 100,
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20(2)-N9c5C2djsFJy48BYBMF4s1U7jAXzhE.png) no-repeat center center / cover',
            opacity: 0.5,
            mixBlendMode: 'screen',
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20(1)-jJ64T1WiPOINFOFQZ8Dhk2jdiL4uWf.png) no-repeat center center / cover',
            opacity: 0.3,
            mixBlendMode: 'overlay',
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  )
}

