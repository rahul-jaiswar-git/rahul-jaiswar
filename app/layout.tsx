import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Navigation from '@/components/navigation'
import InteractiveBackground from '@/components/interactive-background'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Rahul Jaiswar - Developer Portfolio',
  description: 'Full Stack Developer and UI/UX Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${spaceGrotesk.className} min-h-screen bg-background text-foreground md:pl-24`}>
        <InteractiveBackground />
        <Navigation />
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  )
}

