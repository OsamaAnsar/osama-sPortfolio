"use client"

import { useState } from "react"
import { ExternalLink, Calendar, ImageIcon, Building } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectGallery } from "./project-gallery"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl: string
  repoUrl: string
  period?: string
  images?: string[]
  company?: string
  companyUrl?: string
  role?: string
  companyDescription?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  repoUrl,
  period,
  images = [],
  company,
  companyUrl,
  role,
  companyDescription,
}: ProjectCardProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  // Default project images if none provided
  const projectImages =
    images.length > 0
      ? images
      : [
          imageUrl,
          `/placeholder.svg?height=600&width=800&text=${title}+Screenshot+1`,
          `/placeholder.svg?height=600&width=800&text=${title}+Screenshot+2`,
        ]

  return (
    <>
      <Card
        className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg cursor-pointer dark:hover:border-primary/50"
        onClick={() => setIsGalleryOpen(true)}
      >
        <div className="overflow-hidden h-48 bg-muted/30 flex items-center justify-center p-4 relative group">
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Button variant="secondary" size="sm" className="gap-2">
              <ImageIcon className="h-4 w-4" />
              View Gallery
            </Button>
          </div>
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={`${title} logo`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle>{title}</CardTitle>
            {period && (
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span className="text-xs">{period}</span>
              </Badge>
            )}
          </div>
          {role && <div className="text-sm font-medium text-primary mt-1">{role}</div>}
          {company && (
            <div className="flex flex-col gap-1 text-sm text-muted-foreground mt-1">
              <div className="flex items-center gap-1">
                <Building className="h-3 w-3" />
                {companyUrl ? (
                  <Link
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-primary hover:underline"
                  >
                    {company}
                  </Link>
                ) : (
                  <span>{company}</span>
                )}
              </div>
              {companyDescription && (
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{companyDescription}</p>
              )}
            </div>
          )}
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            size="sm"
            asChild
            onClick={(e) => e.stopPropagation()} // Prevent card click
          >
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Website
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <ProjectGallery
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        project={{
          title,
          description,
          tags,
          period,
          images: projectImages,
          company,
          companyUrl,
          role,
          companyDescription,
        }}
      />
    </>
  )
}
