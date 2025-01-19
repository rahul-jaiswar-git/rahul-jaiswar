'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/username/project",
    live: "https://project-demo.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Firebase", "TailwindCSS", "TypeScript"],
    github: "https://github.com/username/project",
    live: "https://project-demo.com"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered application that generates and optimizes content for different platforms.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Python", "OpenAI", "React", "FastAPI"],
    github: "https://github.com/username/project",
    live: "https://project-demo.com"
  }
]

export default function ProjectsSection({ showAll = false }) {
  return (
    <section id="projects" className="relative py-24 px-8 md:px-16 lg:px-24">
      <div className="gradient-bg absolute inset-0 opacity-30" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="space-y-24">
          {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h3 className="text-xl font-semibold mb-4 text-teal-400">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`relative aspect-video order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="rounded-lg object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-12">
            <Link href="/projects" className="inline-block bg-teal-400/10 text-teal-400 px-6 py-3 rounded-full hover:bg-teal-400/20 transition-colors">
              More Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

