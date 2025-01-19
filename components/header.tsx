'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-900 bg-opacity-90 backdrop-blur-sm' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
          DevName
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
          <li><Link href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</Link></li>
          <li><Link href="#showcase" className="text-gray-300 hover:text-white transition-colors">Showcase</Link></li>
          <li><Link href="#cv" className="text-gray-300 hover:text-white transition-colors">CV</Link></li>
          <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </motion.header>
  )
}

