"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Building, Calendar } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface ProjectGalleryProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    tags: string[]
    period?: string
    images: string[]
    company?: string
    companyUrl?: string
    role?: string
    companyDescription?: string
  }
}

export function ProjectGallery({ isOpen, onClose, project }: ProjectGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>{project.title}</DialogTitle>
            {project.period && (
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span className="text-xs">{project.period}</span>
              </Badge>
            )}
          </div>
          {project.role && <div className="text-sm font-medium text-primary mt-1">{project.role}</div>}
          {project.company && (
            <div className="mt-1">
              <div className="flex items-center gap-1 text-sm">
                <Building className="h-3 w-3" />
                {project.companyUrl ? (
                  <Link
                    href={project.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline"
                  >
                    {project.company}
                  </Link>
                ) : (
                  <span>{project.company}</span>
                )}
              </div>
              {project.companyDescription && (
                <p className="text-xs text-muted-foreground mt-1">{project.companyDescription}</p>
              )}
            </div>
          )}
          <DialogDescription className="mt-2">{project.description}</DialogDescription>
        </DialogHeader>

        <div className="relative mt-4 overflow-hidden rounded-lg bg-muted/30 aspect-video">
          {project.images.length > 0 ? (
            <>
              <img
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {project.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Previous image</span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">Next image</span>
                  </Button>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentImageIndex ? "bg-primary" : "bg-muted-foreground/30"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">No images available</p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
