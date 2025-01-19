'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from 'next/image'

interface Certification {
  title: string
  issuedBy: string
  issueDate: string
  description: string
  link: string
  imageUrl: string
}

const certifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuedBy: "Amazon Web Services",
    issueDate: "June 2023",
    description: "Validates expertise in designing distributed systems on AWS, demonstrating knowledge of AWS services, architectural best practices, and cost optimization strategies.",
    link: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-solutions-architect-associate",
    imageUrl: "/placeholder.svg?height=400&width=400"
  },
  {
    title: "Google Cloud Professional Data Engineer",
    issuedBy: "Google Cloud",
    issueDate: "April 2023",
    description: "Demonstrates ability to design, build, and maintain data processing systems with a focus on security, reliability, and scalability.",
    link: "https://www.credential.net/credential-template",
    imageUrl: "/placeholder.svg?height=400&width=400"
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    issuedBy: "Microsoft",
    issueDate: "March 2023",
    description: "Validates the ability to design, build, test, and maintain cloud applications and services on Microsoft Azure.",
    link: "https://learn.microsoft.com/en-us/certifications/azure-developer/",
    imageUrl: "/placeholder.svg?height=400&width=400"
  },
  {
    title: "Certified Kubernetes Administrator",
    issuedBy: "Cloud Native Computing Foundation",
    issueDate: "February 2023",
    description: "Demonstrates proficiency in Kubernetes administration and cluster management.",
    link: "https://www.cncf.io/certification/cka/",
    imageUrl: "/placeholder.svg?height=400&width=400"
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    issuedBy: "HashiCorp",
    issueDate: "January 2023",
    description: "Validates ability to implement Infrastructure as Code using HashiCorp Terraform.",
    link: "https://www.hashicorp.com/certification/terraform-associate",
    imageUrl: "/placeholder.svg?height=400&width=400"
  },
  {
    title: "Docker Certified Associate",
    issuedBy: "Docker",
    issueDate: "December 2022",
    description: "Validates expertise in Docker containerization and orchestration technologies.",
    link: "https://training.mirantis.com/certification/dca-certification-exam/",
    imageUrl: "/placeholder.svg?height=400&width=400"
  }
]

const CertificationCard = ({ 
  certification,
  onSelect
}: { 
  certification: Certification
  onSelect: (cert: Certification) => void
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative aspect-[1.5/1] bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer group"
      onClick={() => onSelect(certification)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      <div className="relative h-full">
        <Image
          src={certification.imageUrl || "/placeholder.svg"}
          alt={certification.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-xl font-bold text-white mb-2">{certification.title}</h3>
        <p className="text-white/80 text-sm font-medium">{certification.issuedBy}</p>
        <p className="text-white/60 text-sm font-medium">{certification.issueDate}</p>
      </div>
    </motion.div>
  )
}

const CertificationDialog = ({
  certification,
  isOpen,
  onClose
}: {
  certification: Certification | null
  isOpen: boolean
  onClose: () => void
}) => {
  if (!certification) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-black/80 backdrop-blur-md border-gray-800/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {certification.title}
          </DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video mb-4">
          <Image
            src={certification.imageUrl || "/placeholder.svg"}
            alt={certification.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-white/90 mb-6 font-medium">{certification.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white/80 font-medium">Issued by: {certification.issuedBy}</p>
            <p className="text-white/80 font-medium">Date: {certification.issueDate}</p>
          </div>
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors font-medium"
          >
            View Credential
            <ExternalLink size={16} />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)

  return (
    <main className="relative min-h-screen bg-[#0f0f0f] py-24 px-8 md:px-16 lg:px-24">
      <div className="noise" />
      <div className="gradient-bg absolute inset-0 opacity-30" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-white"
        >
          All Certifications
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CertificationCard
                certification={cert}
                onSelect={setSelectedCert}
              />
            </motion.div>
          ))}
        </div>

        <CertificationDialog
          certification={selectedCert}
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      </div>
    </main>
  )
}

