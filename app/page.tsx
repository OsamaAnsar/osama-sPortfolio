import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { ScrollLink } from "@/components/scroll-link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 py-2">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Osama Ansar</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <ScrollLink href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </ScrollLink>
            <ScrollLink href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </ScrollLink>
            <ScrollLink href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </ScrollLink>
            <ScrollLink href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </ScrollLink>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:contact@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Hi, I'm <span className="text-primary">Osama Ansar</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                A passionate JavaScript developer building modern web applications with React, Angular, Vue, and
                Node.js.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <ScrollLink href="#projects">View My Work</ScrollLink>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <ScrollLink href="#contact">Contact Me</ScrollLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Developer portrait"
                  className="rounded-lg mx-auto shadow-lg"
                  width={400}
                  height={400}
                />
              </div>
              <div>
                <p className="text-lg mb-4">
                  I'm a full-stack JavaScript developer specializing in React, Angular, Vue, and Node.js. I build
                  responsive, user-friendly web applications with modern frameworks and libraries.
                </p>
                <p className="text-lg mb-4">
                  My journey in web development started when I built my first website in college. Since then, I've
                  worked with startups and established companies to create intuitive and performant applications using
                  various JavaScript frameworks.
                </p>
                <p className="text-lg mb-6">
                  When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                  projects.
                </p>
                <Button asChild>
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                { name: "JavaScript", icon: "js" },
                { name: "TypeScript", icon: "ts" },
                { name: "React", icon: "react" },
                { name: "Angular", icon: "angular" },
                { name: "Vue.js", icon: "vue" },
                { name: "Next.js", icon: "next" },
                { name: "Node.js", icon: "node" },
                { name: "Express", icon: "express" },
                { name: "MongoDB", icon: "mongodb" },
                { name: "PostgreSQL", icon: "postgres" },
                { name: "GraphQL", icon: "graphql" },
                { name: "Redux", icon: "redux" },
                { name: "Tailwind CSS", icon: "tailwind" },
                { name: "Git", icon: "git" },
                { name: "Jest", icon: "jest" },
              ].map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce Platform",
                  description:
                    "A full-stack e-commerce application with payment processing, user authentication, and product management.",
                  tags: ["React", "Node.js", "MongoDB", "Stripe"],
                  imageUrl: "/placeholder.svg?height=200&width=400",
                  demoUrl: "https://example.com",
                  repoUrl: "https://github.com",
                },
                {
                  title: "Task Management App",
                  description:
                    "A collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.",
                  tags: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL"],
                  imageUrl: "/placeholder.svg?height=200&width=400",
                  demoUrl: "https://example.com",
                  repoUrl: "https://github.com",
                },
                {
                  title: "Weather Dashboard",
                  description:
                    "A weather application that displays current and forecasted weather data with interactive maps and charts.",
                  tags: ["React", "Redux", "Weather API", "Chart.js"],
                  imageUrl: "/placeholder.svg?height=200&width=400",
                  demoUrl: "https://example.com",
                  repoUrl: "https://github.com",
                },
                {
                  title: "Social Media Dashboard",
                  description:
                    "An analytics dashboard for social media managers with data visualization and reporting features.",
                  tags: ["React", "D3.js", "Firebase", "Material UI"],
                  imageUrl: "/placeholder.svg?height=200&width=400",
                  demoUrl: "https://example.com",
                  repoUrl: "https://github.com",
                },
                {
                  title: "Recipe Finder",
                  description:
                    "A recipe search application with filtering options, user reviews, and saved favorites functionality.",
                  tags: ["Next.js", "Tailwind CSS", "Food API", "Auth0"],
                  imageUrl: "/placeholder.svg?height=200&width=400",
                  demoUrl: "https://example.com",
                  repoUrl: "https://github.com",
                },
                {
                  title: "Code Snippet Library",
                  description:
                    "A platform for developers to save, share, and discover code snippets with syntax highlighting and tagging.",
                  tags: ["React", "Node.js", "MongoDB", "Prism.js"],
                  imageUrl: "/placeholder.svg?height=200&width=400",
                  demoUrl: "https://example.com",
                  repoUrl: "https://github.com",
                },
              ].map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  imageUrl={project.imageUrl}
                  demoUrl={project.demoUrl}
                  repoUrl={project.repoUrl}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Osama Ansar. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:contact@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

