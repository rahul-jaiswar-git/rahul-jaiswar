'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  description: string
  imageUrl: string
  credentialUrl: string
}

export default function CertificationCard({
  title,
  issuer,
  date,
  description,
  imageUrl,
  credentialUrl
}: CertificationCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div 
        className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-40 overflow-hidden">
          <Image 
            src={imageUrl || "/placeholder.svg"} 
            alt={title} 
            layout="fill" 
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ExternalLink className="text-white w-6 h-6" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1 text-purple-400">{title}</h3>
          <p className="text-gray-400 text-sm">{issuer}</p>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-purple-400">{title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Image 
              src={imageUrl || "/placeholder.svg"} 
              alt={title} 
              width={500} 
              height={250} 
              className="rounded-lg object-cover w-full h-48"
            />
            <DialogDescription>
              <p className="text-gray-300 mb-2">{description}</p>
              <p className="text-gray-400">Issued by: {issuer}</p>
              <p className="text-gray-400">Date: {date}</p>
            </DialogDescription>
            <Button variant="outline" onClick={() => window.open(credentialUrl, '_blank')}>
              <ExternalLink className="mr-2 h-4 w-4" /> View Credential
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

