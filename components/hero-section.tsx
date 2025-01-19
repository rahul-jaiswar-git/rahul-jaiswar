'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const roles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Web Developer"
]

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
      <div className="gradient-bg absolute inset-0 z-0" />
      <div className="noise" />
      
      <div className="relative z-10 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl text-gray-400 tracking-wider mb-4 font-bold"
        >
          RAHUL JAISWAR
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          Developer +
        </motion.h1>

        <div className="h-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-teal-400"
            >
              {roles[currentRole]}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-400 mt-8 max-w-2xl"
        >
          I build exceptional and accessible digital experiences for the web.
        </motion.p>
      </div>
    </section>
  )
}

