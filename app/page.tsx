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
      title: "MenuLogic K12",
      description:
        "Full-stack development (Angular 21 + .NET 10) on a school-nutrition SaaS used by school districts to manage menus, recipes, and pricing. Built the product's Model Context Protocol (MCP) server, exposing recipe/ingredient/district tools to AI agents (Claude in Chat/Cowork) with a custom OAuth 2.1 + PKCE authorization-code flow and tenant-scoped tool authorization that mirrors the REST API's own role system, so an agent only ever sees what the equivalent web-app user could.",
      tags: ["Angular", ".NET", "TypeScript", "MCP", "AI Agents", "OAuth 2.1"],
      imageUrl: "/images/menulogic-k12/logo.png",
      demoUrl: "https://menulogic.io",
      period: "Jan 2026 - Present",
      company: "MenuLogic K12",
      companyUrl: "https://menulogic.io",
      role: "Senior Software Engineer",
      companyDescription:
        "A SaaS platform for K-12 school nutrition programs: real-time profit/loss per menu item, labor and overhead analytics, and recipe/menu management for school districts.",
      images: ["/images/menulogic-k12/logo.png"],
    },
    {
      title: "GoStork",
      description:
        "A fertility services marketplace connecting intended parents with egg donor agencies, surrogacy agencies, IVF clinics, sperm banks, law firms, and adoption agencies. Built an AI-powered PDF extraction system using GPT-4 to automatically extract and structure agency profile data from unstructured PDFs, and built the platform's real-time messaging infrastructure (WebSocket chat). Also developed cost detail pages and maintained data scrapers.",
      tags: ["Node.js", "TypeScript", "OpenAI GPT-4", "PostgreSQL", "Kubernetes"],
      imageUrl: "/images/gostork/logo.png",
      demoUrl: "https://gostork.com",
      company: "GoStork",
      companyUrl: "https://gostork.com",
      role: "Freelance Full-Stack Developer",
      companyDescription:
        "A comprehensive fertility services marketplace using AI to transform unstructured agency data into searchable, structured profiles.",
      images: ["/images/gostork/logo.png"],
    },
    {
      title: "LiveArena",
      description:
        "An enterprise-grade pay-per-view live streaming platform (market-facing as LiveArena.io and IceCage.live) built to scale to 500,000 concurrent users via edge computing and intelligent caching. Built DRM-protected video streaming infrastructure (Widevine, PlayReady, FairPlay) and an event-based variant pricing engine, plus real-time payment celebrations via Pusher, dynamic watermarks, resumable S3 uploads via the TUS protocol, and seamless player switching during buffering. Also built a Kafka-consuming service for Studio, LiveArena's live broadcast-control app, that auto-generates video clips for a casino/iGaming client deployment.",
      tags: ["Next.js", "Cloudflare Workers", "DRM", "Hono.js", "Kafka"],
      imageUrl: "/images/streamflow/logo.svg",
      demoUrl: "https://livearena.io",
      company: "Broadcasting Platforms",
      companyUrl: "https://broadcastingplatforms.com",
      role: "Freelance Full-Stack Engineer",
      companyDescription:
        "Builds tailored live-streaming experiences and white-label platforms for brands across entertainment, sports, and iGaming — including LiveArena, a pay-per-view combat-sports streaming platform, and Studio, a live broadcast-control app.",
      images: ["/images/streamflow/logo.svg"],
    },
    {
      title: "Truckpedia",
      description:
        "Led frontend development using Angular, React, and Vue. Optimized scalability, enhanced user performance, and implemented real-time updates across multiple devices.",
      tags: ["Angular", "React", "Vue", "Real-time"],
      imageUrl: "/truckpedia-logo.png",
      demoUrl: "https://truckpedia.com",
      period: "Feb 2024 - Jan 2026",
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

  // AI / RAG engineering projects
  const aiProjects = [
    {
      title: "generative-ui-chat",
      description:
        "A chat assistant that streams back real, interactive React components instead of plain text — ask about revenue and get a live animated chart, ask to compare plans and get a real comparison table, ask to book a demo and get a working confirmation card. Built on the Vercel AI SDK's tool-calling pattern. The zero-cost public demo runs the exact same streamText pipeline as a real deployment — only the underlying model is swapped, using the AI SDK's own test-mocking primitives rather than a faked frontend.",
      tags: ["TypeScript", "Next.js", "Vercel AI SDK", "Generative UI", "Tool Calling"],
      imageUrl: "/images/generative-ui-chat/logo.svg",
      demoUrl: "https://generative-ui-chat-rouge.vercel.app",
      repoUrl: "https://github.com/OsamaAnsar/generative-ui-chat",
      period: "Aug 2026",
      role: "Independent Project",
      images: ["/images/generative-ui-chat/logo.svg"],
    },
    {
      title: "doc-chat-citations",
      description:
        "A documentation chat assistant where every claim is cited and clicking a citation jumps straight to the exact retrieved passage. From-scratch BM25 retrieval (no vector DB), a two-pane UI with a live-updating source panel, and streamed answers grounded in a demo knowledge base. This is the single most commonly requested AI feature on Upwork, built the way it should actually ship: with the citation trail intact end to end, not just in a log file.",
      tags: ["TypeScript", "RAG", "BM25", "Vercel AI SDK", "Citations"],
      imageUrl: "/images/doc-chat-citations/logo.svg",
      demoUrl: "https://doc-chat-citations.vercel.app",
      repoUrl: "https://github.com/OsamaAnsar/doc-chat-citations",
      period: "Aug 2026",
      role: "Independent Project",
      images: ["/images/doc-chat-citations/logo.svg"],
    },
    {
      title: "rag-eval-harness",
      description:
        "An LLM-judge evaluation harness for RAG pipelines: faithfulness, answer relevance, context precision, and context recall, with a CI regression gate. Correctly catches planted hallucinations in the sample dataset. Pluggable Judge interface (real OpenAI judge + a dependency-free FakeJudge for tests/CI), 9 unit tests with no API key required, auto-deployed live report on every push.",
      tags: ["TypeScript", "RAG", "LLM Evaluation", "Vitest", "GitHub Actions"],
      imageUrl: "/images/rag-eval-harness/logo.svg",
      demoUrl: "https://osamaansar.github.io/rag-eval-harness/",
      repoUrl: "https://github.com/OsamaAnsar/rag-eval-harness",
      period: "Aug 2026",
      role: "Independent Project",
      images: ["/images/rag-eval-harness/logo.svg"],
    },
    {
      title: "agentic-rag",
      description:
        "A multi-hop agentic RAG pipeline: decomposes complex questions into sub-questions, retrieves evidence per sub-question with a from-scratch BM25 implementation, checks answer sufficiency, and synthesizes a cited final answer. Zero framework dependency for the core BM25 ranking math. 7 unit tests, including hand-written mock LLMs exercising the sufficiency-loop and max-hop cutoff logic.",
      tags: ["TypeScript", "Agents", "BM25", "Multi-hop Retrieval", "Vitest"],
      imageUrl: "/images/agentic-rag/logo.svg",
      demoUrl: "https://osamaansar.github.io/agentic-rag/",
      repoUrl: "https://github.com/OsamaAnsar/agentic-rag",
      period: "Aug 2026",
      role: "Independent Project",
      images: ["/images/agentic-rag/logo.svg"],
    },
    {
      title: "hnsw-vector-index",
      description:
        "HNSW (Hierarchical Navigable Small World) — the approximate nearest-neighbor graph algorithm production vector databases use internally — implemented from scratch, no ANN library. Benchmarked against a brute-force exact baseline: recall@k climbs cleanly from 66% to 100% as efSearch increases, the textbook HNSW curve. 22 unit tests including recall correctness against brute-force ground truth on a clustered dataset.",
      tags: ["TypeScript", "Algorithms", "Vector Search", "HNSW", "Vitest"],
      imageUrl: "/images/hnsw-vector-index/logo.svg",
      demoUrl: "https://osamaansar.github.io/hnsw-vector-index/",
      repoUrl: "https://github.com/OsamaAnsar/hnsw-vector-index",
      period: "Aug 2026",
      role: "Independent Project",
      images: ["/images/hnsw-vector-index/logo.svg"],
    },
    {
      title: "Open Source: weaviate-client",
      description:
        "Diagnosed and fixed a silent data-loss bug in Weaviate's official TypeScript client: data.ingest() accepted the documented unwrapped input shape but stored it empty. Fix mirrors the existing insert() normalization pattern, with 5 new regression tests. Pull request submitted, pending review.",
      tags: ["Open Source", "TypeScript", "Weaviate", "Vector Database"],
      imageUrl: "/images/weaviate-oss/logo.svg",
      demoUrl: "https://github.com/weaviate/typescript-client/pull/464",
      repoUrl: "https://github.com/weaviate/typescript-client",
      period: "Aug 2026",
      role: "Open Source Contributor",
      images: ["/images/weaviate-oss/logo.svg"],
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
    { name: "OpenAI API", icon: "openai" },
    { name: "Vitest", icon: "vitest" },
    { name: "Vercel AI SDK", icon: "vercel" },
    { name: "LangChain.js", icon: "langchain" },
    { name: "RAG", icon: "rag" },
    { name: "Vector Databases", icon: "vectordb" },
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
            <ScrollLink href="#ai-projects" className="text-sm font-medium hover:text-primary transition-colors">
              AI Projects
            </ScrollLink>
            <ScrollLink href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
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
                Senior Software Engineer with 5+ years building scalable web applications, now focused on TypeScript
                RAG systems, agentic pipelines, and LLM evaluation infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <ScrollLink href="#ai-projects">View My Work</ScrollLink>
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
                  I'm a Senior Software Engineer with 5+ years of experience delivering scalable, maintainable, and
                  high-performance web applications across Angular, React, Vue, and Node.js — and I'm currently
                  focused on TypeScript-based RAG systems, agentic pipelines, and LLM evaluation infrastructure.
                </p>
                <p className="text-lg mb-4">
                  I'm known for cross-functional collaboration, UI/UX insight, and mentoring junior developers. My
                  experience spans across various industries including K-12 school nutrition, trucking, marketing,
                  digital signage, food delivery, fintech, and job matching platforms — and I now contribute to open-source AI
                  infrastructure (see the Weaviate TypeScript client below).
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

        {/* AI / RAG Engineering Section */}
        <section id="ai-projects" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-4 text-center">AI / RAG Engineering</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Independent projects and open-source contributions built to go deep on retrieval-augmented generation,
              agentic systems, and LLM evaluation — all TypeScript, all with real tests and live demos.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiProjects.map((project, index) => (
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
                  role={project.role}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-muted/50">
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
        <section id="contact" className="py-20">
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
