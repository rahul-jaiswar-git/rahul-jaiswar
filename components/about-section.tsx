'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-8 md:px-16 lg:px-24">
      <div className="gradient-bg absolute inset-0 opacity-50" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a Full Stack Developer based in Mumbai, specializing in building exceptional digital experiences. With a strong foundation in both front-end and back-end development, I create scalable and user-friendly applications that solve real-world problems.
              </p>
              <p>
                Currently, I'm focused on building accessible, human-centered products that make a difference in people's lives. My expertise includes React, Node.js, and modern web technologies.
              </p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-square"
          >
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Rahul Jaiswar"
              fill
              className="rounded-lg object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

