'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Github, Twitter, Linkedin } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/#contact' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername' },
    { icon: Twitter, href: 'https://twitter.com/yourusername' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
  ]

  // Mobile Navigation
  const MobileNav = () => (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 text-gray-400 hover:text-white md:hidden"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-40 md:hidden"
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-black/90 backdrop-blur-md z-50 md:hidden"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col justify-between h-full py-16 px-8">
                <div>
                  <Link href="/#hero" className="block mb-12" onClick={() => setIsOpen(false)}>
                    <span className="text-2xl font-bold">RJ</span>
                  </Link>

                  <div className="space-y-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-gray-400 hover:text-white transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex gap-6">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <Icon size={20} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )

  // Desktop Navigation
  const DesktopNav = () => (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 h-screen w-24 hidden md:flex flex-col justify-between py-8 bg-black/50 backdrop-blur-sm"
    >
      <div>
        <Link href="/#hero" className="block mb-12 px-8">
          <span className="text-2xl font-bold">RJ</span>
        </Link>

        <div className="space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center px-8"
            >
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300 [writing-mode:vertical-lr] rotate-180">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-8 space-y-6">
        {socialLinks.map((link, index) => {
          const Icon = link.icon
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Icon size={20} />
            </a>
          )
        })}
      </div>
    </motion.nav>
  )

  return (
    <>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </>
  )
}

