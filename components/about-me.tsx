import Image from 'next/image'

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-400 font-['Orbitron'] neon-text">Digital Persona</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Developer's portrait"
              width={400}
              height={400}
              className="rounded-lg shadow-lg neon-border"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi there! I'm a passionate full-stack developer with a keen eye for design and a love for clean, efficient code. With over 5 years of experience in web development, I've had the pleasure of working on a wide range of projects, from small business websites to large-scale enterprise applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              My expertise lies in JavaScript ecosystems, particularly React and Node.js, but I'm always excited to learn new technologies and tackle challenging problems. When I'm not coding, you can find me exploring the great outdoors, reading tech blogs, or contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

