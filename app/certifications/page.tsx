"use client"

import { Award, Calendar, ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect } from "react"

export default function CertificationsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      title: "Master Data Management",
      issuer: "Tata Consultancy Services",
      date: "",
      description: "Covers master data management concepts, data governance, and implementation strategies, focusing on data quality and integration in enterprise systems.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPAWYqoR1E-YMPwd869I0X2WuToOjTrPXgQ&s",
      skills: ["Master Data Management", "Data Governance", "Data Quality", "Integration"],
      verifyLink: "https://drive.google.com/file/d/1Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Q/view?usp=drive_link"
    },
    {
      title: "Cyber Security",
      issuer: "Microsoft",
      date: "",
      description: "Demonstrates ability to design and implement cybersecurity strategies, including Zero Trust, GRC, and security operations, using Microsoft security technologies.",
      image: "https://learn.microsoft.com/en-us/media/open-graph-image.png",
      skills: ["Cybersecurity", "Zero Trust", "Security Operations", "Microsoft Security", "GRC"],
      verifyLink: "https://drive.google.com/file/d/1Qfngg9lhD0rzorV2FTw3OqVs9RidmzM9/view?usp=drive_link"
    },
    {
      title: "Accenture Nordics Software Engineering",
      issuer: "Accenture",
      date: "",
      description: "A job simulation program covering software architecture, programming, testing, security, and AI, providing hands-on experience in real-world software development environments.",
      image: "https://media.assettype.com/outlookbusiness/import/uploadimage/library/16_9/16_9_5/Accenture_1661863817.webp?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
      skills: ["Software Engineering", "Architecture", "Programming", "Testing", "Security", "AI"],
      verifyLink: "https://drive.google.com/file/d/1HGIAH0C4uAbmWRExScUXXIKbCd_W7cf-/view?usp=drive_link"
    },
    {
      title: "Accenture North America Coding",
      issuer: "Accenture",
      date: "",
      description: "Covers advanced coding, agile planning, and DevOps practices through a job simulation, including Java, Spring Boot, and Jenkins automation.",
      image: "https://media.assettype.com/outlookbusiness/import/uploadimage/library/16_9/16_9_5/Accenture_1661863817.webp?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
      skills: ["Java", "Spring Boot", "Jenkins", "Agile", "DevOps"],
      verifyLink: "https://drive.google.com/file/d/169TBFLrM5-t_tSWmG1jPrkyj50ourjPq/view?usp=drive_link"
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
      title: "Citi Technology",
      issuer: "Citi",
      date: "",
      description: "Focuses on technology innovation, digital transformation, and information security in the financial sector, with hands-on experience in cloud, APIs, and cybersecurity.",
      image: "https://tbcdn.talentbrew.com/company/287/v2_0/img/og_tags/1600x800techSRT_OG.jpg",
      skills: ["Information Security", "Cloud", "APIs", "Digital Transformation"],
      verifyLink: "https://drive.google.com/file/d/1JmhLdO4YTEVjLWufFd-uk-gKLG30j12s/view?usp=drive_link"
    },
    {
      title: "Deloitte Australia Technology",
      issuer: "Deloitte",
      date: "",
      description: "A virtual experience program covering data analytics, platform engineering, and coding, providing practical skills for real-world business scenarios.",
      image: "https://cdn.theforage.com/vinternships/companyassets/9PBTqmSxAf6zZTseP/hi756CWPD8rqxCQ8e/1625053949117/V4%20Forage%20X%20Deloitte%20Preview%20Tile%201000x560.png",
      skills: ["Data Analytics", "Platform Engineering", "Coding", "Business Insights"],
      verifyLink: "https://drive.google.com/file/d/1ZGb1CJI9-NNEKn_XAr-mncSen_N5KCxC/view?usp=drive_link"
    },
    {
      title: "Goldman Sachs",
      issuer: "Goldman Sachs",
      date: "",
      description: "Covers professional development and technical skills through online courses and job simulations, focusing on leadership, finance, and technology.",
      image: "https://techstory.in/wp-content/uploads/2023/05/Goldman-Sachs-workers.jpg",
      skills: ["Leadership", "Finance", "Technology", "Professional Development"],
      verifyLink: "https://drive.google.com/file/d/1Oy5Iy7dTG2yOXpju1vWNAiXP_aw-3ZON/view?usp=drive_link"
    },
    {
      title: "Hewlett Packard Enterprise Software Engineering",
      issuer: "Hewlett Packard Enterprise",
      date: "",
      description: "Covers DevOps, project management, and agile methodologies, focusing on continuous development, integration, and deployment in enterprise environments.",
      image: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/62c929fec8dc3_systemssoftware-engineer-i.jpeg?d=700x400",
      skills: ["DevOps", "Project Management", "Agile", "Continuous Deployment"],
      verifyLink: "https://drive.google.com/file/d/1vKHjeaZ1E8PJNAnW3CI3vk56mtegiL_3/view?usp=drive_link"
    },
    {
      title: "Jp Morgan Chase & Co.",
      issuer: "JP Morgan Chase & Co.",
      date: "",
      description: "Covers financial operations, cloud, and FinOps practices, with a focus on cost optimization and cloud financial management in enterprise environments.",
      image: "https://d8it4huxumps7.cloudfront.net/bites/wp-content/uploads/2020/06/19151230/What-I-learnt-during-my-internship-at-JP-Morgan-Chase-Co.-By-Anushka-Jain-from-KJ-SIMSR-1.png?d=700x400",
      skills: ["FinOps", "Cloud", "Financial Management", "Cost Optimization"],
      verifyLink: "https://drive.google.com/file/d/1JVHWVnPyprUgehZdvp_W_bDWY4JwLsct/view?usp=drive_link"
    },
    {
      title: "Tata Group Cybersecurity Analyst",
      issuer: "Tata Group",
      date: "",
      description: "A virtual job simulation program focused on identity and access management (IAM), cybersecurity strategy, and platform integration for enterprise security.",
      image: "https://cdn.uconnectlabs.com/wp-content/uploads/sites/258/2025/02/983ae2af1db0a672425bd240c8a5b692-TEMPLATE_PreviewTiles_Mockups-34.png",
      skills: ["Cybersecurity", "IAM", "Security Strategy", "Platform Integration"],
      verifyLink: "https://drive.google.com/file/d/1bwBaT1PZDJF24zP7Uf9q8ZrD6FKLjLse/view?usp=drive_link"
    },
    {
      title: "Tata Group Data Visualisation",
      issuer: "Tata Group",
      date: "",
      description: "A job simulation program on data analysis and visualization, focusing on business insights, effective communication, and practical use of tools like Tableau and Power BI.",
      image: "https://cdn.theforage.com/vinternships/companyassets/ifobHAoMjQs9s6bKS/5XsFFJu2oCLdmYJW2/1657039843307/tata_datavis_preview%20tile.png",
      skills: ["Data Visualization", "Business Insights", "Tableau", "Power BI"],
      verifyLink: "https://drive.google.com/file/d/1OyCHuKPn8aSTtD_oXdBppaIQd5xQEF05/view?usp=drive_link"
    }
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
              <Award className="w-8 h-8 text-purple-400 mr-3" />
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                <span className="text-purple-400">Certifications</span>
              </h1>
            </div>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Professional certifications that validate my expertise across various technologies and platforms.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
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

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

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
        </div>
      </div>
    </div>
  )
}
