'use client'

import { motion } from 'framer-motion'

interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
}

const timelineData: TimelineItem[] = [
  {
    year: "2023 - Present",
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    description: "Lead development of enterprise-level React and Node.js applications, mentoring junior developers and implementing best practices."
  },
  {
    year: "2021 - 2023",
    title: "Full Stack Developer",
    company: "WebSolutions Ltd.",
    description: "Developed and maintained multiple client websites and web applications using React, Next.js, and Express."
  },
  {
    year: "2019 - 2021",
    title: "Frontend Developer",
    company: "DesignTech",
    description: "Created responsive and interactive user interfaces for various web projects using React and Vue.js."
  },
  {
    year: "2018 - 2019",
    title: "Junior Web Developer",
    company: "StartUp Innovations",
    description: "Assisted in the development of company website and internal tools using HTML, CSS, and JavaScript."
  }
]

const TimelineItem: React.FC<TimelineItem & { index: number }> = ({ year, title, company, description, index }) => {
  const isEven = index % 2 === 0
  return (
    <motion.div
      className={`mb-8 flex justify-between items-center w-full ${isEven ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="order-1 w-5/12"></div>
      <motion.div 
        className="z-20 flex items-center order-1 bg-purple-600 shadow-xl w-8 h-8 rounded-full"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
      </motion.div>
      <motion.div
        className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4 neon-border"
        whileHover={{ scale: 1.03, boxShadow: "0 0 15px #ff00de" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="mb-3 font-bold text-purple-400 text-xl">{year}</h3>
        <h4 className="mb-3 font-bold text-white text-lg">{title}</h4>
        <h5 className="mb-3 text-white text-md">{company}</h5>
        <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">{description}</p>
      </motion.div>
    </motion.div>
  )
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">Temporal Odyssey</h2> {/* Update: Removed neon-text class */}
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-purple-400 h-full border" style={{left: '50%'}}></div>
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

