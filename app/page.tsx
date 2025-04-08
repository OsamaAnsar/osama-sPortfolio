import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/project-card';
import { SkillBadge } from '@/components/skill-badge';
import { ContactForm } from '@/components/contact-form';
import { ScrollLink } from '@/components/scroll-link';

export default function Home() {
  // Resume link from Google Drive
  const resumeUrl =
    'https://drive.google.com/file/d/1vuqQV00s07JJqIFJ0CabMj9OeGN0rvWe/view?usp=sharing';

  // Social media links
  const socialLinks = {
    github: 'https://github.com/osamaansar',
    linkedin: 'https://linkedin.com/in/osamaansar',
    stackoverflow: 'https://stackoverflow.com/users/osamaansar',
    email: 'mailto:osama.ansar.pk@gmail.com',
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 py-2">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Osama Ansar</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <ScrollLink
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </ScrollLink>
            <ScrollLink
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </ScrollLink>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
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
                Software Engineer with 5+ years of experience delivering
                scalable, maintainable web applications with Angular, React,
                Vue, and Node.js.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <ScrollLink href="#projects">View My Work</ScrollLink>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  src="/placeholder.svg?height=400&width=400"
                  alt="Osama Ansar portrait"
                  className="rounded-lg mx-auto shadow-lg"
                  width={400}
                  height={400}
                />
              </div>
              <div>
                <p className="text-lg mb-4">
                  I'm a Software Engineer with 5+ years of experience delivering
                  scalable, maintainable, and high-performance web applications.
                  I specialize in modern JavaScript frameworks (Angular, React,
                  Vue) with a strong focus on clean code, responsive design, and
                  real-time functionality.
                </p>
                <p className="text-lg mb-4">
                  I'm known for cross-functional collaboration, UI/UX insight,
                  and mentoring junior developers. My experience spans across
                  various industries including digital signage, food delivery,
                  fintech, and job matching platforms.
                </p>
                <p className="text-lg mb-6">
                  I hold a BS in Software Engineering from the University of
                  Gujrat (2015-2019) with a CGPA of 3.7/4.0, where I received
                  multiple awards and recognitions for academic excellence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View Resume
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
            <h2 className="text-3xl font-bold mb-12 text-center">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                { name: 'JavaScript', icon: 'js' },
                { name: 'TypeScript', icon: 'ts' },
                { name: 'Angular', icon: 'angular' },
                { name: 'React', icon: 'react' },
                { name: 'Vue.js', icon: 'vue' },
                { name: 'Next.js', icon: 'next' },
                { name: 'Node.js', icon: 'node' },
                { name: 'Express.js', icon: 'express' },
                { name: 'Redux', icon: 'redux' },
                { name: 'Tailwind CSS', icon: 'tailwind' },
                { name: 'MongoDB', icon: 'mongodb' },
                { name: 'PostgreSQL', icon: 'postgres' },
                { name: 'Jest', icon: 'jest' },
                { name: 'Git', icon: 'git' },
                { name: 'AWS', icon: 'aws' },
              ].map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Professional Experience
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Truckpedia',
                  description:
                    'Led frontend development using Angular, React, and Vue. Optimized scalability, enhanced user performance, and implemented real-time updates across multiple devices.',
                  tags: ['Angular', 'React', 'Vue', 'Real-time'],
                  imageUrl:
                    '/placeholder.svg?height=200&width=400&text=Truckpedia',
                  demoUrl: 'https://truckpedia.com',
                  repoUrl: socialLinks.github,
                  period: 'Feb 2024 - Present',
                },
                {
                  title: 'Omnivex Corporation',
                  description:
                    'Developed custom UI components for the Ink platform using Angular, React, Vue, and SignalR for real-time UX. Improved component reusability and reduced code duplication.',
                  tags: ['Angular', 'React', 'Vue', 'SignalR'],
                  imageUrl:
                    '/placeholder.svg?height=200&width=400&text=Omnivex',
                  demoUrl: 'https://omnivex.com',
                  repoUrl: socialLinks.github,
                  period: 'May 2022 - Dec 2023',
                },
                {
                  title: 'S4 Salesforce',
                  description:
                    'Built bug-report automation with Node.js backend while working at Contrive Solutions. Implemented efficient tracking and reporting systems for Salesforce integration.',
                  tags: ['Node.js', 'Automation', 'Salesforce'],
                  imageUrl:
                    '/placeholder.svg?height=200&width=400&text=S4+Salesforce',
                  demoUrl: '#',
                  repoUrl: socialLinks.github,
                  period: 'Jan 2020 - Jun 2022',
                },
                {
                  title: 'GoOrder',
                  description:
                    'Developed a Vue/Vuex food delivery application at Contrive Solutions. Implemented user-friendly interfaces, order tracking, and payment processing features.',
                  tags: ['Vue.js', 'Vuex', 'Food Delivery'],
                  imageUrl:
                    '/placeholder.svg?height=200&width=400&text=GoOrder',
                  demoUrl: '#',
                  repoUrl: socialLinks.github,
                  period: 'Jan 2020 - Jun 2022',
                },
                {
                  title: 'Penmi',
                  description:
                    'Developed calendar and CRUD features in Angular while at Contrive Solutions. Created intuitive user interfaces and implemented efficient data management systems.',
                  tags: ['Angular', 'CRUD', 'Calendar'],
                  imageUrl: '/placeholder.svg?height=200&width=400&text=Penmi',
                  demoUrl: '#',
                  repoUrl: socialLinks.github,
                  period: 'Jan 2020 - Jun 2022',
                },
                {
                  title: 'Arena',
                  description:
                    'Built reusable UI components across 7 products at Contrive Solutions. Focused on consistency, performance, and maintainability across the product ecosystem.',
                  tags: ['UI Components', 'Reusability', 'Cross-product'],
                  imageUrl: '/placeholder.svg?height=200&width=400&text=Arena',
                  demoUrl: '#',
                  repoUrl: socialLinks.github,
                  period: 'Jan 2020 - Jun 2022',
                },
                {
                  title: 'Finlex',
                  description:
                    'Created shared Micro Frontend component libraries using Angular at Contrive Solutions. Implemented scalable architecture and optimized performance.',
                  tags: ['Angular', 'Microfrontends', 'Component Libraries'],
                  imageUrl: '/placeholder.svg?height=200&width=400&text=Finlex',
                  demoUrl: '#',
                  repoUrl: socialLinks.github,
                  period: 'Jan 2020 - Jun 2022',
                },
                {
                  title: 'Blunk',
                  description:
                    'Developed full-stack features for Blunk job-matching platform at Webicosoft. Implemented React frontend with Redux and Semantic UI, and built backend using Node.js and MongoDB.',
                  tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
                  imageUrl: '/placeholder.svg?height=200&width=400&text=Blunk',
                  demoUrl: '#',
                  repoUrl: socialLinks.github,
                  period: 'May 2019 - Nov 2019',
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
                  period={project.period}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Get In Touch
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-lg mb-4">
                  Feel free to reach out to me directly:
                </p>
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
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={socialLinks.stackoverflow}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 20.002V15h2v7.002H4V15h2v5.002h12zM15 15H9v-2h6v2zm.5-6.69l-1.52-.8 1.5-2.86 1.51.8-1.49 2.86zm-3.02-1.22L11 6.15l2.25-2.47.98.9L12.48 7.1z" />
                </svg>
                <span className="sr-only">Stack Overflow</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={socialLinks.email}>
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
