"use client"

import { Github, Linkedin, Twitter, Mail, ExternalLink, Menu, X, Award, Trophy, Calendar } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [activeTab, setActiveTab] = useState(0)
  const [achievementTab, setAchievementTab] = useState("hackathons")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "achievements", "resume", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const companies = [
    {
      name: "CodeSpeedy Technologies",
      role: "Full Stack Developer",
      period: "Feb. 2025 – Mar. 2025",
      logo: "/CodeSpeedy-Logo.png",
      description: [
        "Designed and developed 6+ responsive websites and web applications, boosting client engagement by 40%.",
        "Created user-friendly UI/UX designs that enhanced user satisfaction by 25%.",
        "Streamlined the design-to-development process, reducing project turnaround time by 20%."
      ],
    },
    {
      name: "Forage (Virtual Internship Experience)",
      role: "Virtual Intern",
      period: "2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBugTjipDNyNUOOvjcmxx_qABgDtI0pw5Qw&s",
      description: [],
      certifications: [
        {
          title: "Amazon - AWS APAC Solutions Architecture",
          link: "https://drive.google.com/file/d/1yOGx9KHrF4sYTUMTtmwDRJYumQujbl_T/view?usp=drive_link"
        },
        {
          title: "JPMorgan Chase & Co. - Software Engineering Virtual Experience",
          link: "https://drive.google.com/file/d/1JVHWVnPyprUgehZdvp_W_bDWY4JwLsct/view?usp=drive_link"
        },
        {
          title: "Goldman Sachs - Software Engineering Virtual Experience",
          link: "https://drive.google.com/file/d/1Oy5Iy7dTG2yOXpju1vWNAiXP_aw-3ZON/view?usp=drive_link"
        },
        {
          title: "Tata Group Cybersecurity Analyst",
          link: "https://drive.google.com/file/d/1bwBaT1PZDJF24zP7Uf9q8ZrD6FKLjLse/view?usp=drive_link"
        },
        {
          title: "Deloitte - Technology Consulting Virtual Internship",
          link: "https://drive.google.com/file/d/1ZGb1CJI9-NNEKn_XAr-mncSen_N5KCxC/view?usp=drive_link"
        },
      ],
    },
  ]

  const hackathons = [
    {
      name: "Ace Hacks 2024",
      institute: "ACE Community",
      position: "Finalist",
      description: "Ace Hacks 2024 brought together creative minds to build impactful tech solutions. Participants collaborated on real-world challenges and showcased their innovation in a vibrant community.",
      date: "2024",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      certificate: "https://drive.google.com/file/d/1XbE66EfEZszjmXMn_9O1JNXIActUOyND/view?usp=drive_link"
    },
    {
      name: "DevFest 2.0",
      institute: "DevSoc",
      position: "4th Rank",
      description: "DevFest 2.0 is a week-long online fest by DevSoc, featuring hackathons, tech talks, and workshops. Teams solve real-world problems and learn from industry leaders.",
      date: "2024",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      certificate: "https://drive.google.com/file/d/1D3RKWBiKknuog3SmpQDlYNOdZHUW_7e6/view?usp=drive_link"
    },
    {
      name: "Ethon",
      institute: "Army Institute of Technology (AIT), Pune",
      position: "Participant",
      description: "Ethon is a student hackathon at AIT Pune, focusing on innovative tech solutions. It provides a platform for students to compete and showcase their skills.",
      date: "2024",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      certificate: "https://drive.google.com/file/d/192RCaWFQDh3TfxzohmEta7nQUKSpQM-F/view?usp=drive_link"
    },
    {
      name: "Unplugged 2.0",
      institute: "IETE-ISF, D. J. Sanghvi College of Engineering",
      position: "Participant",
      description: "Unplugged 2.0 is a 24-hour hardware hackathon for students. It encourages hands-on building and innovation to solve real-world problems.",
      date: "2024",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      certificate: "https://drive.google.com/file/d/1C0T1MTDfxFBaYFOV0LGQRBLQwQcTkF8P/view?usp=drive_link"
    },
  ]

  const certifications = [
    {
      title: "Android Bug Bounty Hunting: Hunt Like a Rat",
      issuer: "EC-Council",
      date: "",
      description: "Covers advanced Android bug bounty skills, including mobile vulnerability areas, IPC model, and practical exploitation techniques for real-world bug bounty programs.",
      image: "https://eccommonstorage.blob.core.windows.net/codered/uploads/Dh9NK2hYqoqMbIbfWTJQgUwXn5PpFEZFCYSohLlE.jpg",
      skills: ["Android Security", "Bug Bounty", "Mobile Exploitation", "Vulnerability Assessment"],
      verifyLink: "https://drive.google.com/file/d/1JO5TwLQTslUi9CXaR1UKYO6XcX0WlZag/view?usp=drive_link"
    },
    {
      title: "AWS APAC Solutions Architecture",
      issuer: "AWS",
      date: "",
      description: "Validates expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS. Recommended for professionals with hands-on experience in AWS cloud architecture.",
      image: "https://pages.awscloud.com/rs/112-TZM-766/images/AWS_Generic_Social_Image.jpg",
      skills: ["AWS", "Cloud Architecture", "Scalability", "Security", "Distributed Systems"],
      verifyLink: "https://drive.google.com/file/d/1yOGx9KHrF4sYTUMTtmwDRJYumQujbl_T/view?usp=drive_link"
    },
    {
      title: "Cyber Security",
      issuer: "Microsoft",
      date: "",
      description: "Demonstrates ability to design and implement cybersecurity strategies, including Zero Trust, GRC, and security operations, using Microsoft security technologies.",
      image: "https://learn.microsoft.com/en-us/media/open-graph-image.png",
      skills: ["Cybersecurity", "Zero Trust", "Security Operations", "Microsoft Security", "GRC"],
      verifyLink: "https://drive.google.com/file/d/1Qfngg9lhD0rzorV2FTw3OqVs9RidmzM9/view?usp=drive_link"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      {/* Animated Background Elements - Removed pulse animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/3 rounded-full filter blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - properly aligned with content */}
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all duration-300 hover:rotate-3">
                  <span className="text-white font-bold text-lg">RJ</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: "about", label: "01. About" },
                  { id: "experience", label: "02. Experience" },
                  { id: "projects", label: "03. Projects" },
                  { id: "achievements", label: "04. Achievements" },
                  { id: "contact", label: "05. Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-mono transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                      activeSection === item.id ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <Button
                className="bg-cyan-400/10 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 hover:scale-105 active:scale-95 transition-all duration-300"
                onClick={() => scrollToSection("resume")}
              >
                Resume
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:scale-110 active:scale-95 transition-transform duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: "about", label: "01. About" },
                { id: "experience", label: "02. Experience" },
                { id: "projects", label: "03. Projects" },
                { id: "achievements", label: "04. Achievements" },
                { id: "contact", label: "05. Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-mono text-slate-300 hover:text-cyan-400 w-full text-left transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  className="bg-cyan-400/10 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 w-full transition-all duration-300"
                  onClick={() => scrollToSection("resume")}
                >
                  Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Social Links - Mobile Optimized */}
      <div className="fixed left-4 sm:left-6 bottom-0 z-40 hidden lg:flex flex-col items-center space-y-6">
        <div className="flex flex-col space-y-4">
          <a
            href="https://github.com/rahul-jaiswar-git"
            className="text-slate-400 hover:text-cyan-400 active:text-cyan-300 transition-all duration-300 transform hover:scale-125 active:scale-110 hover:-translate-y-1"
            target="_blank" rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-jaiswar/"
            className="text-slate-400 hover:text-cyan-400 active:text-cyan-300 transition-all duration-300 transform hover:scale-125 active:scale-110 hover:-translate-y-1"
            target="_blank" rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-cyan-400 active:text-cyan-300 transition-all duration-300 transform hover:scale-125 active:scale-110 hover:-translate-y-1"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="mailto:rahuljaiswarofficial@gmail.com"
            className="text-slate-400 hover:text-cyan-400 active:text-cyan-300 transition-all duration-300 transform hover:scale-125 active:scale-110 hover:-translate-y-1"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <div className="w-px h-24 bg-slate-600"></div>
      </div>

      {/* Email - Right Side */}
      <div className="fixed right-6 bottom-0 z-40 hidden lg:flex flex-col items-center">
        <div className="transform rotate-90 origin-center mb-32">
          <a
            href="mailto:rahuljaiswarofficial@gmail.com"
            className="text-slate-400 hover:text-cyan-400 transition-all duration-300 font-mono text-sm hover:scale-110 active:scale-95"
          >
            rahuljaiswarofficial@gmail.com
          </a>
        </div>
        <div className="w-px h-24 bg-slate-600"></div>
      </div>

      {/* Hero Section - Mobile-friendly animations */}
      {/* Hero Section - Fixed and Visible */}
      <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative pt-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <div className="mb-6">
              <p className="text-cyan-400 font-mono text-base sm:text-lg mb-4 animate-in fade-in slide-in-from-top duration-1000 delay-200">
                Hi, my name is
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-in fade-in slide-in-from-top duration-1000 delay-400">
                <span className="text-slate-200">Rahul Jaiswar.</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-500 mb-8">
                I build things for the web.
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-top duration-1000 delay-800">
              I turn ideas into digital reality—one pixel, one line of code at a time. I love building things that make people smile, think, or say, "Whoa, that's cool!"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-top duration-1000 delay-1000">
              <Button
                size="lg"
                className="bg-cyan-400/10 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 transform hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-3 w-fit"
                onClick={() => scrollToSection("projects")}
              >
                Check out my work!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-white mr-4">
              <span className="text-cyan-400 font-mono">01.</span> About Me
            </h2>
            <div className="flex-1 h-px bg-slate-700 ml-4"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  I'm Rahul, a developer who loves turning ideas into real, working products. I started out just curious about how websites work, and that curiosity quickly became a drive to build things that are useful, beautiful, and easy to use.
                </p>
                <p>
                  I care about the details—clean code, smooth user experiences, and making sure what I build actually helps people. Whether it's a quick prototype or a full-scale app, I enjoy the challenge of solving problems and learning something new every day.
                </p>
                <p>
                  Outside of coding, you'll find me exploring new tech, diving into AI, or sketching out the next project idea. If you want to build something meaningful, I'm always up for a chat.
                </p>
                <p>Key Skills:</p>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-6">
                {["JavaScript", "TypeScript", "Python", "React", "Next.js", "Node.js", "MongoDB", "Docker", "Git", "UI/UX Design"].map((tech) => (
                  <div key={tech} className="flex items-center text-slate-300">
                    <span className="text-cyan-400 mr-2">▹</span>
                    <span className="font-mono text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Simplified border container */}
                <div className="relative w-72 h-72">
                  {/* Simple border on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 border-2 border-gradient-to-r from-purple-500 to-cyan-500 rounded-lg"></div>
                  </div>

                  {/* Main image container */}
                  <div className="absolute inset-4 rounded-lg overflow-hidden">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500"></div>

                    {/* Placeholder for actual image */}
                    <div className="absolute inset-3 bg-slate-900/20 rounded-lg flex items-center justify-center">
                      <span className="text-slate-400 text-sm">Your Photo Here</span>
                    </div>

                    {/* Simple hover overlay */}
                    <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Mobile Optimized */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-white mr-4">
              <span className="text-cyan-400 font-mono">02.</span> Where I've Worked
            </h2>
            <div className="flex-1 h-px bg-slate-700 ml-4"></div>
          </div>

          {/* Mobile Dropdown / Desktop Tabs */}
          <div className="flex flex-col lg:flex-row">
            {/* Mobile Card Layout */}
            <div className="lg:hidden space-y-4 mb-8">
              {companies.map((company, index) => (
                <button
                  key={company.name}
                  onClick={() => setActiveTab(index)}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                    activeTab === index
                      ? "border-cyan-400 bg-cyan-400/5"
                      : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      className="w-10 h-10 rounded-lg object-cover bg-slate-800 p-2"
                    />
                    <div>
                      <h4 className={`font-semibold ${activeTab === index ? "text-cyan-400" : "text-white"}`}>
                        {company.name}
                      </h4>
                      <p className="text-slate-400 text-sm font-mono">{company.role}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Desktop Tab buttons */}
            <div className="hidden lg:flex lg:flex-col lg:mr-12">
              <div className="flex flex-col border-l border-slate-700">
                {companies.map((company, index) => (
                  <button
                    key={company.name}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-4 text-left font-mono text-base border-l-2 transition-all duration-300 hover:scale-105 active:scale-95 ${
                      activeTab === index
                        ? "border-cyan-400 text-cyan-400 bg-cyan-400/5"
                        : "border-transparent text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50"
                    }`}
                  >
                    {company.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <div className="flex-1">
              <div className="space-y-4 animate-in fade-in slide-in-from-top duration-500">
                <div className="flex items-center space-x-4">
                  <img
                    src={companies[activeTab].logo || "/placeholder.svg"}
                    alt={`${companies[activeTab].name} logo`}
                    className="w-12 h-12 rounded-lg object-cover bg-slate-800 p-2 hover:scale-110 active:scale-95 transition-transform duration-300"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {companies[activeTab].role} <span className="text-cyan-400">@ {companies[activeTab].name}</span>
                    </h3>
                    <p className="text-slate-400 font-mono text-sm">{companies[activeTab].period}</p>
                  </div>
                </div>

                {/* Animated Responsibilities or Certifications */}
                <div key={activeTab} className="space-y-3">
                  {companies[activeTab].description.length > 0 ? (
                    companies[activeTab].description.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start animate-in fade-in slide-in-from-top duration-500"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="text-cyan-400 mr-3 mt-2 text-sm">▹</span>
                        <p className="text-slate-300 leading-relaxed">{item}</p>
                      </div>
                    ))
                  ) : companies[activeTab].certifications ? (
                    companies[activeTab].certifications.map((cert, idx) => (
                      <div
                        key={idx}
                        className="flex items-start animate-in fade-in slide-in-from-top duration-500"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <span className="text-cyan-400 mr-3 mt-2 text-sm">▹</span>
                        <p className="text-slate-300 leading-relaxed">
                          {cert.title} <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline ml-2">CERTIFICATE</a>
                        </p>
                      </div>
                    ))
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-white mr-4">
              <span className="text-cyan-400 font-mono">03.</span> Some Things I've Built
            </h2>
            <div className="flex-1 h-px bg-slate-700 ml-4"></div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-24">
            {[
              {
                title: "ReferNet",
                description: "A referral management system with real-time updates, secure user authentication, and an interactive dashboard. Streamlines job referrals and enhances user experience.",
                technologies: ["ReactJS", "JavaScript", "ExpressJS", "CSS", "MongoDB"],
                github: "https://github.com/rahul-jaiswar-git/Refernet",
                external: "#",
                image: "https://raw.githubusercontent.com/rahul-jaiswar-git/Refernet/main/home-page.png",
              },
              {
                title: "Toxic Content Analyzer",
                description: "A web app that detects toxic or harmful content in text, images, audio, and video using the Perspective API. Multi-modal analysis in a user-friendly interface.",
                technologies: ["AI", "Web App", "Perspective API"],
                github: "https://github.com/rahul-jaiswar-git/Toxic-Content-Analyzer-with-Perspective-API",
                external: "#",
                image: "https://raw.githubusercontent.com/rahul-jaiswar-git/Toxic-Content-Analyzer-with-Perspective-API/main/resources/Hate.jpg",
              },
              {
                title: "Blockchain-Based Health Records System",
                description: "A decentralized system for secure healthcare record management on Ethereum. Enables doctors and patients to manage and access medical records with privacy and integrity.",
                technologies: ["Ethereum", "Blockchain", "Healthcare"],
                github: "https://github.com/rahul-jaiswar-git/Blockchain-Based-Health-Records-System",
                external: "#",
                image: "https://raw.githubusercontent.com/rahul-jaiswar-git/Blockchain-Based-Health-Records-System/main/home-page.png",
              },
            ].map((project, index) => (
              <div key={index} className="grid lg:grid-cols-12 gap-8 items-center">
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative group">
                    <div className="bg-cyan-400/5 rounded-lg overflow-hidden border border-slate-800 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 active:scale-95">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 sm:h-80 object-cover transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                  <div className="space-y-4">
                    <p className="text-cyan-400 font-mono text-sm">Featured Project</p>
                    <h3 className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300">
                      <a href={project.external}>{project.title}</a>
                    </h3>

                    <div className="bg-slate-800/80 p-6 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 active:scale-95">
                      <p className="text-slate-300 leading-relaxed">{project.description}</p>
                    </div>

                    <div
                      className={`flex flex-wrap gap-3 text-sm font-mono text-slate-400 ${index % 2 === 1 ? "lg:justify-end" : ""}`}
                    >
                      {project.technologies.map((tech) => (
                        <span key={tech} className="hover:text-cyan-400 transition-colors duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={`flex space-x-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                      <a
                        href={project.github}
                        className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 active:scale-110"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.external}
                        className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 active:scale-110"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Link */}
          <div className="text-center mt-16">
            <Link href="/projects">
              <Button className="bg-cyan-400/10 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-3">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold text-white mr-4">
              <span className="text-cyan-400 font-mono">04.</span> Achievements
            </h2>
            <div className="flex-1 h-px bg-slate-700 ml-4"></div>
          </div>

          {/* Tab Buttons - Mobile Optimized */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 rounded-lg p-1 border border-slate-700 w-full max-w-md sm:w-auto">
              <div className="grid grid-cols-2 gap-1 sm:flex sm:gap-0">
                <button
                  onClick={() => setAchievementTab("hackathons")}
                  className={`px-3 sm:px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base ${
                    achievementTab === "hackathons"
                      ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400"
                      : "text-slate-400 hover:text-cyan-400"
                  }`}
                >
                  <Trophy className="w-4 h-4 inline mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Hackathons</span>
                  <span className="sm:hidden">Hacks</span>
                </button>
                <button
                  onClick={() => setAchievementTab("certifications")}
                  className={`px-3 sm:px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base ${
                    achievementTab === "certifications"
                      ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400"
                      : "text-slate-400 hover:text-cyan-400"
                  }`}
                >
                  <Award className="w-4 h-4 inline mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Certifications</span>
                  <span className="sm:hidden">Certs</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {achievementTab === "hackathons" && (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
                  {hackathons.slice(0, 4).map((hackathon, index) => (
                    <Card
                      key={index}
                      className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 group hover:scale-105 active:scale-95 hover:border-cyan-400/50"
                    >
                      <CardContent className="p-0 flex flex-col h-full">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img
                            src={hackathon.image || "/placeholder.svg"}
                            alt={hackathon.name}
                            className="w-full h-48 object-cover group-hover:scale-110 active:scale-95 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-cyan-400/10 text-cyan-400 border-cyan-400">{hackathon.position}</Badge>
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex flex-col gap-1">
                              <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                {hackathon.name}
                              </h4>
                              <span className="inline-block bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded mt-1 w-fit">{hackathon.institute}</span>
                            </div>
                          </div>
                          <p className="text-slate-300 mb-4 leading-relaxed">{hackathon.description}</p>
                          <div className="mt-auto flex justify-end">
                            {hackathon.certificate && (
                              <a href={hackathon.certificate} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-2 rounded bg-cyan-900/30 hover:bg-cyan-400/20 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 shadow-md">
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
                <div className="text-center">
                  <Link href="/hackathons">
                    <Button className="bg-cyan-400/10 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-3">
                      View All Hackathons
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {achievementTab === "certifications" && (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                  {certifications.slice(0, 3).map((cert, index) => (
                    <Card
                      key={index}
                      className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 group flex flex-col h-full hover:scale-105 active:scale-95 hover:border-purple-400/50"
                    >
                      <CardContent className="p-0 flex flex-col h-full">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img
                            src={cert.image || "/placeholder.svg"}
                            alt={cert.title}
                            className="w-full h-48 object-cover group-hover:scale-110 active:scale-95 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <Badge className="bg-purple-400/10 text-purple-400 border-purple-400 mb-2">{cert.issuer}</Badge>
                              <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                                {cert.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-slate-300 mb-4 leading-relaxed text-sm">{cert.description}</p>
                          {cert.skills && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {cert.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          )}
                          <div className="mt-auto flex justify-end">
                            {cert.verifyLink && (
                              <a
                                href={cert.verifyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-3 py-2 rounded bg-purple-900/30 hover:bg-purple-400/20 text-purple-400 hover:text-purple-300 transition-colors duration-200 shadow-md"
                              >
                                <ExternalLink className="w-5 h-5" />
                                <span className="text-xs font-mono">Verify</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center">
                  <Link href="/certifications">
                    <Button className="bg-cyan-400/10 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-3">
                      View All Certifications
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resume Section - Mobile Optimized */}
      <section id="resume" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-purple-400">Curriculum Vitae</span>
            </h2>
            <div className="w-16 h-1 bg-purple-400 mx-auto"></div>
          </div>

          {/* Resume Card - Mobile Optimized */}
          <div className="relative">
            {/* Static Gradient Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl sm:rounded-2xl opacity-75 hover:opacity-100 transition-opacity duration-300"></div>

            {/* Main Card */}
            <div className="relative bg-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-8 lg:p-12">
              {/* Mobile Header Layout */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 sm:mb-8">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">Rahul Jaiswar</h3>
                  <p className="text-lg sm:text-xl text-slate-400">Full Stack Developer</p>
                </div>

                {/* Download Button - Mobile Optimized */}
                <div className="w-full sm:w-auto">
                  <a
                    href="https://drive.google.com/file/d/1vP936tGdjAKQkVa4qo8ccIOea3oq5gZE/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white px-4 sm:px-6 py-2 rounded-lg flex items-center justify-center space-x-2 group hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                        />
                      </svg>
                      <span>Download CV</span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Description - Mobile Optimized */}
              <div className="mb-6 sm:mb-8">
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  A results-driven Full Stack Developer with experience in designing and developing responsive, user-friendly web applications. Proven ability to enhance client engagement and user satisfaction through thoughtful UI/UX design and efficient development processes. Passionate about leveraging modern technologies like React, Next.js, and machine learning to build innovative solutions.
                </p>
              </div>

              {/* Key Skills - Mobile Optimized */}
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-4 sm:mb-6">Key Skills</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                  {[
                    // Languages
                    "C/C++",
                    "Python",
                    "JavaScript",
                    "HTML5",
                    "CSS",
                    "PHP",
                    "MySQL",
                    "MongoDB",
                    // Frameworks
                    "NodeJS",
                    "ReactJS",
                    "NextJS",
                    // Developer Tools
                    "Docker",
                    "Google Cloud",
                    "GitHub",
                    "AWS"
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-slate-800/50 rounded-lg p-3 sm:p-2 text-center border border-slate-700 hover:border-purple-400/50 active:scale-95 transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-slate-300 text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <p className="text-cyan-400 font-mono text-lg mb-4">05. What's Next?</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-purple-400">Get In Touch</span>
            </h2>
            <div className="w-16 h-1 bg-purple-400 mx-auto mb-12"></div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">Let's Connect</h3>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
              I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just
              want to say hello, feel free to reach out!
            </p>
          </div>

          {/* Contact Cards Grid - No flickering animations */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-500 group hover:scale-105 active:scale-95 hover:border-purple-400/50">
              <div className="flex items-center space-x-4">
                <a
                  href="mailto:rahuljaiswarofficial@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300 hover:bg-purple-500/30"
                >
                  <Mail className="w-6 h-6 text-purple-400" />
                </a>
                <div className="text-left">
                  <h4 className="text-white font-semibold text-lg mb-1">Email</h4>
                  <p className="text-slate-400">rahuljaiswarofficial@gmail.com</p>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-500 group hover:scale-105 active:scale-95 hover:border-purple-400/50">
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/rahul-jaiswar-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300 hover:bg-purple-500/30"
                >
                  <Github className="w-6 h-6 text-purple-400" />
                </a>
                <div className="text-left">
                  <h4 className="text-white font-semibold text-lg mb-1">GitHub</h4>
                  <p className="text-slate-400">github.com/rahul-jaiswar-git</p>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-500 group hover:scale-105 active:scale-95 hover:border-purple-400/50">
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/rahul-jaiswar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300 hover:bg-purple-500/30"
                >
                  <Linkedin className="w-6 h-6 text-purple-400" />
                </a>
                <div className="text-left">
                  <h4 className="text-white font-semibold text-lg mb-1">LinkedIn</h4>
                  <p className="text-slate-400">linkedin.com/in/rahul-jaiswar</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-500 group hover:scale-105 active:scale-95 hover:border-purple-400/50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold text-lg mb-1">Location</h4>
                  <p className="text-slate-400">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 font-mono text-sm">Built with Next.js & Tailwind CSS. Deployed on Vercel.</p>
        </div>
      </footer>
    </div>
  )
}
