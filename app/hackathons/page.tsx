"use client"

import { Trophy, Calendar, ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect } from "react"

export default function HackathonsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const hackathons = [
    {
      name: "Ace Hacks 2024",
      institute: "ACE Community",
      position: "Finalist",
      date: "2024",
      image: "/placeholder.svg",
      demo: "https://drive.google.com/file/d/1XbE66EfEZszjmXMn_9O1JNXIActUOyND/view?usp=drive_link",
      description: "Ace Hacks 2024 brought together creative minds to build impactful tech solutions. Participants collaborated on real-world challenges and showcased their innovation in a vibrant community."
    },
    {
      name: "DevFest 2.0",
      institute: "DevSoc",
      position: "4th Rank",
      date: "2024",
      image: "/placeholder.svg",
      demo: "https://drive.google.com/file/d/1D3RKWBiKknuog3SmpQDlYNOdZHUW_7e6/view?usp=drive_link",
      description: "DevFest 2.0 is a week-long online fest by DevSoc, featuring hackathons, tech talks, and workshops. Teams solve real-world problems and learn from industry leaders."
    },
    {
      name: "Ethon",
      institute: "Army Institute of Technology (AIT), Pune",
      position: "Participant",
      date: "2024",
      image: "/placeholder.svg",
      demo: "https://drive.google.com/file/d/192RCaWFQDh3TfxzohmEta7nQUKSpQM-F/view?usp=drive_link",
      description: "Ethon is a student hackathon at AIT Pune, focusing on innovative tech solutions. It provides a platform for students to compete and showcase their skills."
    },
    {
      name: "Unplugged 2.0",
      institute: "IETE-ISF, D. J. Sanghvi College of Engineering",
      position: "Participant",
      date: "2024",
      image: "/placeholder.svg",
      demo: "https://drive.google.com/file/d/1C0T1MTDfxFBaYFOV0LGQRBLQwQcTkF8P/view?usp=drive_link",
      description: "Unplugged 2.0 is a 24-hour hardware hackathon for students. It encourages hands-on building and innovation to solve real-world problems."
    },
    {
      name: "Tech Savishkaar 3.0",
      institute: "Vasavi College of Engineering (VCE), Hyderabad",
      position: "Participant",
      date: "2024",
      image: "/placeholder.svg",
      demo: "https://drive.google.com/file/d/1xpKNWbIfLwDnE3osRnSECAknTU78uweX/view?usp=drive_link",
      description: "Tech Savishkaar 3.0 is a platform for students to innovate and present tech solutions. It features competitive events and networking opportunities."
    },
    {
      name: "INNOVATHON'24: IOT Based",
      institute: "Theem College of Engineering, Boisar",
      position: "Participant",
      date: "2024",
      image: "/placeholder.svg",
      demo: "https://drive.google.com/file/d/1GTH50uoXvSAUOhSVzV970fUB1JBhM4RY/view?usp=drive_link",
      description: "INNOVATHON'24 is an intercollege hackathon for creative problem-solving. Students collaborate on IoT-based projects and compete for prizes."
    },
    {
      name: "INNOVATHON'24: Open Source Model",
      institute: "Theem College of Engineering, Boisar",
      position: "Participant",
      date: "2024",
      image: "/placeholder.svg",
      demo: "https://drive.google.com/file/d/15aMdM5h_LJqMefjEPBF5xSJhJZNHRLqQ/view?usp=drive_link",
      description: "INNOVATHON'24 Open Source Model encourages students to build open-source solutions. The event fosters teamwork and technical creativity."
    },
    {
      name: "NationBuilding Case Study Competition 2025",
      institute: "N/A",
      position: "Participant",
      date: "2025",
      image: "/placeholder.svg",
      demo: "https://drive.google.com/file/d/1wcCPnFxlXEGVqOK33d5ZnaS3h8N6CRlB/view?usp=drive_link",
      description: "A national competition where participants analyze and present solutions to case studies on nation-building."
    },
    {
      name: "National Road Safety Hackathon",
      institute: "N/A",
      position: "Participant",
      date: "2025",
      image: "/placeholder.svg",
      demo: "https://drive.google.com/file/d/1RuggaNSYfV--MDFo6o2A3IOvkCgu0EF_/view?usp=drive_link",
      description: "A hackathon focused on road safety, encouraging innovative solutions to improve transportation and save lives."
    },
    {
      name: "Two Day CEO Challenge",
      institute: "IIT Delhi",
      position: "Participant",
      date: "2025",
      image: "/placeholder.svg",
      demo: "https://drive.google.com/open?id=1t5rtKQP8IiVzsq9Qe4Gf_06Brq0Yghpm&usp=drive_copy",
      description: "A business and entrepreneurship challenge at IIT Delhi, testing leadership and problem-solving skills in a competitive setting."
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
            <Link
              href="/#achievements"
              scroll={false}
              onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById("achievements")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }, 100)
              }}
            >
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
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-cyan-400 mr-3" />
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                <span className="text-cyan-400">Hackathons</span>
              </h1>
            </div>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A collection of my hackathon participations, wins, and the innovative solutions I've built under pressure.
            </p>
          </div>

          {/* Hackathons Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {hackathons.map((hackathon, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group flex flex-col h-full"
              >
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={hackathon.image || "/placeholder.svg"}
                      alt={hackathon.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-cyan-400/10 text-cyan-400 border-cyan-400">{hackathon.position}</Badge>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {hackathon.name}
                        </h3>
                        <span className="inline-block bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded mt-1 w-fit">{hackathon.institute}</span>
                      </div>
                      <div className="flex items-center text-slate-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {hackathon.date}
                      </div>
                    </div>
                    <p className="text-slate-300 mb-4 leading-relaxed">{hackathon.description}</p>
                    <div className="mt-auto flex justify-end">
                      {hackathon.demo && (
                        <a href={hackathon.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-2 rounded bg-cyan-900/30 hover:bg-cyan-400/20 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 shadow-md">
                          <ExternalLink className="w-5 h-5" />
                          <span className="text-xs font-mono">Certificate</span>
                        </a>
                      )}
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
