import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
}

export default function ProjectCard({ title, description, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <Image src={imageUrl || "/placeholder.svg"} alt={title} width={300} height={200} className="w-full" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a href={projectUrl} className="text-purple-400 hover:text-purple-300 transition-colors">
          View Project &rarr;
        </a>
      </div>
    </div>
  )
}

