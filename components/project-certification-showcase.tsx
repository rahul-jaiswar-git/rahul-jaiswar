'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Github, Globe, ExternalLink } from 'lucide-react'

interface Project {
  title: string
  shortDescription: string
  longDescription: string
  imageUrl: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
}

interface Certification {
  title: string
  issuer: string
  date: string
  description: string
  imageUrl: string
  credentialUrl: string
}

interface ShowcaseItemProps {
  item: Project | Certification
  index: number
  isProject: boolean
}

const ShowcaseItem: React.FC<ShowcaseItemProps> = ({ item, index, isProject }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-48 overflow-hidden">
          <Image 
            src={item.imageUrl || "/placeholder.svg"} 
            alt={item.title} 
            layout="fill" 
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ExternalLink className="text-white w-8 h-8" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-purple-400">{item.title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{isProject ? (item as Project).shortDescription : (item as Certification).issuer}</p>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-purple-400">{item.title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Image 
              src={item.imageUrl || "/placeholder.svg"} 
              alt={item.title} 
              width={600} 
              height={300} 
              className="rounded-lg object-cover w-full h-48"
            />
            <DialogDescription className="text-gray-300">
              {isProject ? (item as Project).longDescription : (item as Certification).description}
            </DialogDescription>
            {isProject && (
              <div className="flex flex-wrap gap-2">
                {(item as Project).technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {isProject ? (
              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={() => window.open((item as Project).githubUrl, '_blank')}>
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
                <Button variant="outline" onClick={() => window.open((item as Project).liveUrl, '_blank')}>
                  <Globe className="mr-2 h-4 w-4" /> Live Demo
                </Button>
              </div>
            ) : (
              <Button variant="outline" onClick={() => window.open((item as Certification).credentialUrl, '_blank')}>
                <ExternalLink className="mr-2 h-4 w-4" /> View Credential
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default function ProjectCertificationShowcase({ projects, certifications }: { projects: Project[], certifications: Certification[] }) {
  const [activeTab, setActiveTab] = useState<'projects' | 'certifications'>('projects')

  return (
    <section id="showcase" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <motion.button
            className={`px-6 py-2 rounded-l-full ${activeTab === 'projects' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => setActiveTab('projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.button>
          <motion.button
            className={`px-6 py-2 rounded-r-full ${activeTab === 'certifications' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => setActiveTab('certifications')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Certifications
          </motion.button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activeTab === 'projects'
              ? projects.map((project, index) => (
                  <ShowcaseItem key={project.title} item={project} index={index} isProject={true} />
                ))
              : certifications.map((cert, index) => (
                  <ShowcaseItem key={cert.title} item={cert} index={index} isProject={false} />
                ))
            }
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

