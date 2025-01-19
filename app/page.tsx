import React from 'react'
import HeroSection from '../components/hero-section'
import AboutSection from '../components/about-section'
import ExperienceSection from '../components/experience-section'
import ProjectsSection from '../components/projects-section'
import CertificationsSection from '../components/certifications-section'
import ContactSection from '../components/contact-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <div className="noise" />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  )
}

