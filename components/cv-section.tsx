import { Button } from "@/components/ui/button"
import { FileDown } from 'lucide-react'

export default function CVSection() {
  return (
    <section id="cv" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-purple-400 neon-text font-mono">Digital Blueprint</h2> {/* Update applied here */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl mx-auto neon-border">
          <h3 className="text-2xl font-semibold mb-4 text-purple-300">John Doe</h3>
          <p className="text-gray-300 mb-4">Full Stack Developer</p>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-purple-200">Summary</h4>
            <p className="text-gray-400">
              Experienced full stack developer with a passion for creating efficient, scalable, and user-friendly web applications. Proficient in modern web technologies and frameworks.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-purple-200">Key Skills</h4>
            <ul className="list-disc list-inside text-gray-400">
              <li>JavaScript (React, Node.js, Express)</li>
              <li>Python (Django, Flask)</li>
              <li>Database Management (SQL, MongoDB)</li>
              <li>DevOps (Docker, Kubernetes, CI/CD)</li>
            </ul>
          </div>
          <Button className="w-full" onClick={() => window.open('/path-to-your-cv.pdf', '_blank')}>
            <FileDown className="mr-2 h-4 w-4" /> Download Full CV
          </Button>
        </div>
      </div>
    </section>
  )
}

