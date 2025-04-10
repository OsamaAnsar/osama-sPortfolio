import { Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { ScrollLink } from "@/components/scroll-link"
import { ThemeToggle } from "@/components/theme-toggle"
import { DarkModeIndicator } from "@/components/dark-mode-indicator"

export default function Home() {
  // Resume link from Google Drive
  const resumeUrl = "https://drive.google.com/file/d/1vuqQV00s07JJqIFJ0CabMj9OeGN0rvWe/view?usp=sharing"

  // Social media links
  const socialLinks = {
    github: "https://github.com/osamaansar",
    linkedin: "https://www.linkedin.com/in/osama-ansar-93271a144/",
    email: "mailto:osama.ansar.pk@gmail.com",
  }

  // Project data
  const projects = [
    {
      title: "Truckpedia",
      description:
        "Led frontend development using Angular, React, and Vue. Optimized scalability, enhanced user performance, and implemented real-time updates across multiple devices.",
      tags: ["Angular", "React", "Vue", "Real-time"],
      imageUrl: "/truckpedia-logo.png",
      demoUrl: "https://truckpedia.com",
      repoUrl: socialLinks.github,
      period: "Feb 2024 - Present",
      company: "Truckpedia",
      companyUrl: "https://truckpedia.com",
      role: "Software Engineer",
      companyDescription:
        "A leading platform providing comprehensive solutions for the trucking industry, including fleet management, logistics optimization, and real-time data analytics.",
      images: [
        "/truckpedia-logo.png",
        "/images/truckpedia/1.png?height=600&width=800&text=Truckpedia+Dashboard",
        "/images/truckpedia/2.png?height=600&width=800&text=Truckpedia+Dashboard",
        "/images/truckpedia/3.png?height=600&width=800&text=Truckpedia+Dashboard",
        "/images/truckpedia/4.png?height=600&width=800&text=Truckpedia+Dashboard",
        "/images/truckpedia/5.png?height=600&width=800&text=Truckpedia+Dashboard",
        "/images/truckpedia/6.png?height=600&width=800&text=Truckpedia+Dashboard",

      ],
    },
    {
      title: "Ink Platform",
      description:
        "Developed custom UI components for the Ink platform using Angular, React, Vue, and SignalR for real-time UX. Improved component reusability and reduced code duplication.",
      tags: ["Angular", "React", "Vue", "SignalR"],
      imageUrl: "/omnivex-logo.png",
      demoUrl: "https://www.omnivex.com/platform/omnivex-ink",
      repoUrl: socialLinks.github,
      period: "May 2022 - Dec 2023",
      company: "Omnivex Corporation",
      companyUrl: "https://omnivex.com",
      role: "Software Engineer",
      companyDescription:
        "Canada-based digital signage company (since 1993) with franchises in USA, Norway, and Mexico. Specializes in real-time digital signage solutions with flagship products Ink and Moxie.",
      images: [
        "/omnivex-logo.png",
        "/images/omnivex/1.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex2.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex4.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex5.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex6.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex7.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex8.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex9.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex10.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex11.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex12.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex18.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex20.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex21.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex23.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex25.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex26.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex27.PNG?height=600&width=800&text=Omnivex+Ink+Platform",
        "/images/omnivex/omnivex31.PNG?height=600&width=800&text=Omnivex+Ink+Platform",

      ],
    },
    {
      title: "GoOrder",
      description:
        "Developed a Vue/Vuex food delivery application. Implemented user-friendly interfaces, order tracking, and payment processing features.",
      tags: ["Vue.js", "Vuex", "Food Delivery"],
      imageUrl: "/goorder-logo.png",
      demoUrl: "https://contrivesol.com",
      repoUrl: socialLinks.github,
      period: "Jan 2020 - Jun 2022",
      company: "Contrive Solutions",
      companyUrl: "https://contrivesol.com",
      role: "Senior JavaScript Developer",
      companyDescription:
        "A software development company specializing in custom web and mobile applications, enterprise solutions, and digital transformation services for businesses across various industries.",
      images: [
        "/goorder-logo.png",
        "/images/goorder/1.png?height=600&width=800&text=GoOrder+Restaurant+Listing",
        "/images/goorder/2.png?height=600&width=800&text=GoOrder+Checkout+Process",
      ],
    },
    {
      title: "Arena - Soundblock",
      description:
        "Built reusable UI components across 7 products. Focused on consistency, performance, and maintainability across the product ecosystem including Soundblock as the primary product.",
      tags: ["UI Components", "Reusability", "Cross-product"],
      imageUrl: "/soundblock-logo.png",
      demoUrl: "https://contrivesol.com",
      repoUrl: socialLinks.github,
      period: "Jan 2020 - Jun 2022",
      company: "Contrive Solutions",
      companyUrl: "https://contrivesol.com",
      role: "Senior JavaScript Developer",
      companyDescription:
        "A software development company specializing in custom web and mobile applications, enterprise solutions, and digital transformation services for businesses across various industries.",
      images: [
        "/soundblock-logo.png",
        "/images/soundblock/1.png?height=600&width=800&text=Arena+Component+Library",
        "/images/soundblock/2.png?height=600&width=800&text=Arena+Product+Integration",
      ],
    },
    {
      title: "Finlex",
      description:
        "Created shared Micro Frontend component libraries using Angular. Implemented scalable architecture and optimized performance for this insurance consultant company in Germany.",
      tags: ["Angular", "Microfrontends", "Component Libraries"],
      imageUrl: "/finlex-logo.png",
      demoUrl: "https://contrivesol.com",
      repoUrl: socialLinks.github,
      period: "Jan 2020 - Jun 2022",
      company: "Contrive Solutions",
      companyUrl: "https://contrivesol.com",
      role: "Senior JavaScript Developer",
      companyDescription:
        "A software development company specializing in custom web and mobile applications, enterprise solutions, and digital transformation services for businesses across various industries.",
      images: [
        "/finlex-logo.png",
        "/images/finlex/1.png?height=600&width=800&text=Finlex+MFE+Architecture",
        "/images/finlex/2.png?height=600&width=800&text=Finlex+MFE+Architecture",
        "/images/finlex/3.png?height=600&width=800&text=Finlex+MFE+Architecture",
        "/images/finlex/4.png?height=600&width=800&text=Finlex+MFE+Architecture",
        "/images/finlex/5.png?height=600&width=800&text=Finlex+MFE+Architecture",

      ],
    },
    {
      title: "Blunk",
      description:
        "Developed full-stack features for Blunk job-matching platform. Implemented React frontend with Redux and Semantic UI, and built backend using Node.js and MongoDB.",
      tags: ["React", "Redux", "Node.js", "MongoDB"],
      imageUrl: "/blunk-logo.png",
      demoUrl: "https://webicosoft.com",
      repoUrl: socialLinks.github,
      period: "May 2019 - Nov 2019",
      company: "Webicosoft",
      companyUrl: "https://webicosoft.com",
      role: "JavaScript Developer",
      companyDescription:
        "A software development company based in Pakistan that provides web and mobile application development services, specializing in custom solutions for startups and enterprises.",
      images: [
        "/blunk-logo.png",
      ],
    },
  ]

  // Skills data
  const skills = [
    { name: "JavaScript", icon: "js" },
    { name: "TypeScript", icon: "ts" },
    { name: "Angular", icon: "angular" },
    { name: "React", icon: "react" },
    { name: "Vue.js", icon: "vue" },
    { name: "Next.js", icon: "next" },
    { name: "Node.js", icon: "node" },
    { name: "Express.js", icon: "express" },
    { name: "Redux", icon: "redux" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgres" },
    { name: "Jest", icon: "jest" },
    { name: "Git", icon: "git" },
    { name: "AWS", icon: "aws" },
  ]

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
            <div className="border rounded-md p-1 mr-2">
              <ThemeToggle />
            </div>
            <Button variant="ghost" size="icon" asChild>
              <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={socialLinks.email}>
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="h-5 w-5" />
                <span className="sr-only">Resume</span>
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
                Software Engineer with 5+ years of experience delivering scalable, maintainable web applications with
                Angular, React, Vue, and Node.js.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <ScrollLink href="#projects">View My Work</ScrollLink>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </Link>
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
                  src="/osama-profile.jpg"
                  alt="Osama Ansar portrait"
                  className="rounded-lg mx-auto shadow-lg"
                  width={400}
                  height={400}
                />
              </div>
              <div>
                <p className="text-lg mb-4">
                  I'm a Software Engineer with 5+ years of experience delivering scalable, maintainable, and
                  high-performance web applications. I specialize in modern JavaScript frameworks (Angular, React, Vue)
                  with a strong focus on clean code, responsive design, and real-time functionality.
                </p>
                <p className="text-lg mb-4">
                  I'm known for cross-functional collaboration, UI/UX insight, and mentoring junior developers. My
                  experience spans across various industries including trucking industry, marketing industry, digital signage, food delivery, fintech, and job
                  matching platforms.
                </p>
                <p className="text-lg mb-6">
                  I hold a BS in Software Engineering from the University of Gujrat (2015-2019) with a CGPA of 3.7/4.0,
                  where I received multiple awards and recognitions for academic excellence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      View Resume
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  imageUrl={project.imageUrl}
                  demoUrl={project.demoUrl}
                  repoUrl={project.repoUrl}
                  period={project.period}
                  images={project.images}
                  company={project.company}
                  companyUrl={project.companyUrl}
                  role={project.role}
                  companyDescription={project.companyDescription}
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
              <div className="text-center mb-8">
                <p className="text-lg mb-4">Feel free to reach out to me directly:</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                  <Button variant="outline" asChild>
                    <Link href={`mailto:osama.ansar.pk@gmail.com`}>
                      <Mail className="mr-2 h-4 w-4" />
                      osama.ansar.pk@gmail.com
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`tel:+923484108105`}>
                      <span className="mr-2">📞</span>
                      +92 348 4108105
                    </Link>
                  </Button>
                </div>
              </div>
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
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild>
              <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={socialLinks.email}>
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="h-5 w-5" />
                <span className="sr-only">Resume</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
      <DarkModeIndicator />
    </div>
  )
}
