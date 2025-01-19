'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Github, Globe, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  title: string
  shortDescription: string
  longDescription: string
  imageUrl: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
}

export default function InteractiveProjectCard({
  title,
  shortDescription,
  longDescription,
  imageUrl,
  technologies,
  githubUrl,
  liveUrl
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div 
        className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-48 overflow-hidden">
          <Image 
            src={imageUrl || "/placeholder.svg"} 
            alt={title} 
            layout="fill" 
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ExternalLink className="text-white w-8 h-8" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-purple-400">{title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{shortDescription}</p>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-purple-400">{title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Image 
              src={imageUrl || "/placeholder.svg"} 
              alt={title} 
              width={600} 
              height={300} 
              className="rounded-lg object-cover w-full h-48"
            />
            <DialogDescription className="text-gray-300">
              {longDescription}
            </DialogDescription>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={() => window.open(githubUrl, '_blank')}>
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
              <Button variant="outline" onClick={() => window.open(liveUrl, '_blank')}>
                <Globe className="mr-2 h-4 w-4" /> Live Demo
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

