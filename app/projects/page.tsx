"use client"

import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect } from "react"

// Add a type for the project objects
interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  external: string;
  image: string;
  featured?: boolean;
}

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects: Project[] = [
    {
      title: "Toxic Content Analyzer",
      description: "A web app that detects toxic or harmful content in text, images, audio, and video using the Perspective API. Multi-modal analysis in a user-friendly interface.",
      technologies: ["AI", "Web App", "Perspective API"],
      github: "https://github.com/rahul-jaiswar-git/Toxic-Content-Analyzer-with-Perspective-API",
      external: "#",
      image: "https://raw.githubusercontent.com/rahul-jaiswar-git/Toxic-Content-Analyzer-with-Perspective-API/main/resources/Hate.jpg",
      featured: true,
    },
    {
      title: "ReferNet",
      description: "A referral management system with real-time updates, secure user authentication, and an interactive dashboard. Streamlines job referrals and enhances user experience.",
      technologies: ["ReactJS", "JavaScript", "ExpressJS", "CSS", "MongoDB"],
      github: "https://github.com/rahul-jaiswar-git/Refernet",
      external: "#",
      image: "https://raw.githubusercontent.com/rahul-jaiswar-git/Refernet/main/home-page.png",
      featured: true,
    },
    {
      title: "Blockchain-Based Health Records System",
      description: "A decentralized system for secure healthcare record management on Ethereum. Enables doctors and patients to manage and access medical records with privacy and integrity.",
      technologies: ["Ethereum", "Blockchain", "Healthcare"],
      github: "https://github.com/rahul-jaiswar-git/Blockchain-Based-Health-Records-System",
      external: "#",
      image: "https://raw.githubusercontent.com/rahul-jaiswar-git/Blockchain-Based-Health-Records-System/main/home-page.png",
      featured: true,
    },
    {
      title: "Hate-Shield-AI",
      description: "A multi-modal hate speech detection system for Hinglish (Hindi-English code-mixed language). Detects hate speech in text, audio, video, and images using deep learning and NLP.",
      technologies: ["AI", "SaaS", "Hate Speech Detection"],
      github: "https://github.com/rahul-jaiswar-git/Hate-Shield-AI",
      external: "#",
      image: "https://raw.githubusercontent.com/rahul-jaiswar-git/Hate-Shield-AI/main/Frontend/models.gif",
    },
    {
      title: "CollegeCloud",
      description: "A modern, cloud-based College Management System built with Django. Streamline academic and administrative operations for colleges and universities.",
      technologies: ["Django", "Cloud", "Management System"],
      github: "https://github.com/rahul-jaiswar-git/CollegeCloud",
      external: "#",
      image: "https://raw.githubusercontent.com/rahul-jaiswar-git/CollegeCloud/main/Materials/CollegeCloud.jpg",
    },
    {
      title: "Violence Detection System",
      description: "This violence detection system leverages machine learning algorithms to analyze input data and accurately identify violent activities. It is designed for real-time monitoring and enhanced safety.",
      technologies: ["Machine Learning", "CNN", "TensorFlow", "Python"],
      github: "https://github.com/rahul-jaiswar-git/Violence-Detection-System",
      external: "#",
      image: "https://drive.google.com/uc?export=view&id=1dUwCHVP1qSmzz_oJoz1EgucmpZIKk-DK",
    },
    {
      title: "Code Box",
      description: "A sleek and responsive interface for managing code projects, offering intuitive navigation, customizable layouts, and seamless integration with development workflows.",
      technologies: ["ReactJS", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/rahul-jaiswar-git/Code-X",
      external: "#",
      image: "https://raw.githubusercontent.com/rahul-jaiswar-git/Code-X/main/screenshots/img.png",
    },
    {
      title: "Crop and Fertilizer Recommendation System",
      description: "Crop and Fertilizer Recommendation System using Machine Learning made for a 4-week internship.",
      technologies: ["Machine Learning", "Agriculture"],
      github: "https://github.com/rahul-jaiswar-git/Crop-and-Fertilizer-Recommendation-System",
      external: "#",
      image: "https://github.com/simran2097/Crop_and_Fertilizer_Recommandation_System/assets/47267975/95f6d9a2-6552-4de0-a757-025bbc00fe58",
    },
    {
      title: "Energy-Trading",
      description: "A decentralized energy trading system built on Ethereum blockchain. This CLI-based application allows users to register, send, and receive energy securely.",
      technologies: ["Ethereum", "Blockchain", "CLI"],
      github: "https://github.com/rahul-jaiswar-git/Energy-Trading",
      external: "#",
      image: "https://raw.githubusercontent.com/rahul-jaiswar-git/Energy-Trading/main/home-page.png",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RJ</span>
              </div>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-slate-300 hover:text-cyan-400">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              All <span className="text-cyan-400">Projects</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A comprehensive collection of my work, from web applications to mobile apps and everything in between.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-cyan-400/10 text-cyan-400 border-cyan-400">Featured</Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="bg-slate-700 text-slate-400 text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        <a href={project.github} className="text-slate-400 hover:text-cyan-400 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href={project.external} className="text-slate-400 hover:text-cyan-400 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
