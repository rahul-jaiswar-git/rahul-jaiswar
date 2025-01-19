'use client'

import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2023 - Present",
    description: "Led development of enterprise-level applications using React and Node.js. Mentored junior developers and implemented best practices.",
    technologies: ["React", "Node.js", "TypeScript", "AWS"]
  },
  {
    title: "Full Stack Developer",
    company: "WebSolutions Ltd.",
    period: "2021 - 2023",
    description: "Developed and maintained multiple client websites and web applications. Implemented responsive designs and optimized performance.",
    technologies: ["Next.js", "Express", "MongoDB", "TailwindCSS"]
  },
  {
    title: "Frontend Developer",
    company: "DesignTech",
    period: "2019 - 2021",
    description: "Created responsive and interactive user interfaces. Collaborated with designers to implement pixel-perfect designs.",
    technologies: ["React", "Vue.js", "SCSS", "JavaScript"]
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 px-8 md:px-16 lg:px-24 bg-black/30">
      <div className="gradient-bg absolute inset-0 opacity-30" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-12"
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 p-6 rounded-lg hover:bg-white/5 transition-colors">
                <div className="text-gray-400">{exp.period}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-teal-400">{exp.title}</h3>
                  <p className="text-gray-300 mb-2">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

