import { Github, ExternalLink, Calendar } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl: string;
  repoUrl: string;
  period?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  repoUrl,
  period,
}: ProjectCardProps) {
  // Function to generate logo path based on title
  const getLogoPath = (title: string) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    return `/images/${slug}-logo.png`;
  };

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg">
      <div className="overflow-hidden h-48 bg-muted/30 flex items-center justify-center p-4">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={getLogoPath(title) || '/placeholder.svg'}
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
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
