"use client"

import { useState } from "react"
import { ArrowUpRight, Github, Play } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface FeaturedDemoProps {
  title: string
  tagline: string
  description: string
  demoUrl: string
  repoUrl?: string
  tags: string[]
  logoUrl: string
}

export function FeaturedDemo({ title, tagline, description, demoUrl, repoUrl, tags, logoUrl }: FeaturedDemoProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="rounded-xl border bg-card overflow-hidden flex flex-col lg:flex-row">
      <div className="lg:w-2/5 p-6 md:p-8 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <img src={logoUrl || "/placeholder.svg"} alt={`${title} logo`} className="h-10 w-10 object-contain" />
          <div>
            <h3 className="text-xl font-bold leading-tight">{title}</h3>
            <p className="text-sm text-primary">{tagline}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
          <Button size="sm" asChild>
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              Open full demo <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          {repoUrl && (
            <Button size="sm" variant="outline" asChild>
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View code
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div className="lg:w-3/5 relative bg-muted/40 min-h-[320px] lg:min-h-[440px] border-t lg:border-t-0 lg:border-l">
        {loaded ? (
          <iframe
            src={demoUrl}
            title={`${title} live demo`}
            loading="lazy"
            className="absolute inset-0 h-full w-full"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="absolute inset-0 h-full w-full flex flex-col items-center justify-center gap-3 text-sm font-medium hover:bg-muted/60 transition-colors group"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-105">
              <Play className="h-6 w-6 translate-x-0.5" />
            </span>
            Load live demo
            <span className="text-xs text-muted-foreground">Runs the real deployed app, right here</span>
          </button>
        )}
      </div>
    </div>
  )
}
