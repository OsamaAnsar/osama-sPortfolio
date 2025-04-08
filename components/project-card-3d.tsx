"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Text } from "@react-three/drei"
import { type Mesh, MathUtils } from "three"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl: string
  repoUrl: string
}

function ProjectModel({ title, isHovered }: { title: string; isHovered: boolean }) {
  const mesh = useRef<Mesh>(null!)

  useFrame((state) => {
    if (mesh.current) {
      const t = state.clock.getElapsedTime()
      mesh.current.rotation.x = MathUtils.lerp(mesh.current.rotation.x, isHovered ? Math.PI / 12 : 0, 0.1)
      mesh.current.rotation.y =
        MathUtils.lerp(mesh.current.rotation.y, isHovered ? Math.PI / 6 : 0, 0.1) + Math.sin(t / 2) * 0.05
      mesh.current.position.z = MathUtils.lerp(mesh.current.position.z, isHovered ? 0.2 : 0, 0.1)
    }
  })

  return (
    <Float floatIntensity={isHovered ? 2 : 0.5} rotationIntensity={0.2} speed={2}>
      <mesh ref={mesh}>
        <planeGeometry args={[2.5, 1.2, 32, 32]} />
        <MeshDistortMaterial
          color={isHovered ? "#4f46e5" : "#3b82f6"}
          speed={5}
          distort={isHovered ? 0.4 : 0.2}
          radius={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <Text
        position={[0, 0, 0.1]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter_Bold.json"
      >
        {title}
      </Text>
    </Float>
  )
}

export function ProjectCard3D({ title, description, tags, imageUrl, demoUrl, repoUrl }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg border-primary/20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="h-48 overflow-hidden">
        <Canvas camera={{ position: [0, 0, 2], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <spotLight position={[0, 5, 5]} angle={0.15} penumbra={1} intensity={1} />
          <ProjectModel title={title} isHovered={hovered} />
        </Canvas>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 hover:bg-primary/20">
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
  )
}

export default ProjectCard3D

