'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-8 md:px-16 lg:px-24 bg-black/30">
      <div className="gradient-bg absolute inset-0 opacity-30" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-teal-400/10 text-teal-400 px-6 py-3 rounded-full hover:bg-teal-400/20 transition-colors"
          >
            Say Hello
          </a>
          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

