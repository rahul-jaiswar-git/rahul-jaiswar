'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  live: string
  longDescription: string
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management and payment processing.",
    longDescription: "This e-commerce platform provides a seamless shopping experience with features like real-time inventory updates, secure payment processing, and a user-friendly interface. Built with scalability in mind, it can handle high traffic and large product catalogs efficiently.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/username/project",
    live: "https://project-demo.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    longDescription: "This task management app allows teams to collaborate effectively on projects.  Features include real-time updates, task assignments, progress tracking, and communication tools. Built for efficiency and ease of use.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Firebase", "TailwindCSS", "TypeScript"],
    github: "https://github.com/username/project",
    live: "https://project-demo.com"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered application that generates and optimizes content for different platforms.",
    longDescription: "This AI-powered tool helps create and optimize content for various platforms.  It leverages advanced AI models to generate high-quality, engaging content quickly and efficiently, saving you time and effort.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Python", "OpenAI", "React", "FastAPI"],
    github: "https://github.com/username/project",
    live: "https://project-demo.com"
  }
]

const ProjectCard = ({ project, onSelect }: { project: Project; onSelect: () => void }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative aspect-[1.5/1] bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden group cursor-pointer"
    onClick={onSelect}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
    <div className="relative h-full">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-white/80 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="text-xs bg-white/10 text-white/90 px-2 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors"
        >
          <ExternalLink className="w-6 h-6" />
        </a>
      </div>
    </div>
  </motion.div>
)

const ProjectDialog = ({
  project,
  isOpen,
  onClose
}: {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}) => {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-black/80 backdrop-blur-md border-gray-800/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video mb-4">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-white/90 mb-6 font-medium">{project.longDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-white/10 text-white/90 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors font-medium"
          >
            GitHub
            <Github size={16} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors font-medium"
          >
            Live Demo
            <ExternalLink size={16} />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <main className="relative min-h-screen py-24 px-8 md:px-16 lg:px-24">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-white"
        >
          All Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} onSelect={() => setSelectedProject(project)} />
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDialog
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  )
}

