"use client"

import { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { SkillBadge } from "./skill-badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

// Simplified 3D skill card that doesn't use R3F hooks outside Canvas
function EnhancedSkillCard3D({ name, color }: { name: string; color: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden h-32 hover:shadow-lg transition-all duration-300 border-primary/20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardContent className="p-0 h-full">
        <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <spotLight position={[0, 5, 5]} angle={0.15} penumbra={1} />

          {/* Move the 3D rendering logic to a separate component used inside Canvas */}
          <SkillSphere color={color} hovered={hovered} />
        </Canvas>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-medium text-sm bg-background/70 px-3 py-1 rounded-full backdrop-blur-sm">{name}</span>
        </div>
      </CardContent>
    </Card>
  )
}

// This component is used inside the Canvas and can use R3F hooks
import { useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Float } from "@react-three/drei"
import { useRef } from "react"
import { type Mesh, MathUtils } from "three"

function SkillSphere({ color, hovered }: { color: string; hovered: boolean }) {
  const meshRef = useRef<Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime()
      meshRef.current.rotation.x = Math.sin(t / 2) * 0.1
      meshRef.current.rotation.y = Math.sin(t / 3) * 0.1

      if (hovered) {
        meshRef.current.scale.x = MathUtils.lerp(meshRef.current.scale.x, 1.2, 0.1)
        meshRef.current.scale.y = MathUtils.lerp(meshRef.current.scale.y, 1.2, 0.1)
        meshRef.current.scale.z = MathUtils.lerp(meshRef.current.scale.z, 1.2, 0.1)
      } else {
        meshRef.current.scale.x = MathUtils.lerp(meshRef.current.scale.x, 1, 0.1)
        meshRef.current.scale.y = MathUtils.lerp(meshRef.current.scale.y, 1, 0.1)
        meshRef.current.scale.z = MathUtils.lerp(meshRef.current.scale.z, 1, 0.1)
      }
    }
  })

  return (
    <Float floatIntensity={0.5} rotationIntensity={0.2} speed={2}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          speed={3}
          distort={hovered ? 0.4 : 0.2}
          radius={1}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

export function SkillsSection() {
  const [view, setView] = useState<"2d" | "3d">("3d")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    { name: "JavaScript", icon: "js", color: "#F7DF1E" },
    { name: "TypeScript", icon: "ts", color: "#3178C6" },
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "Angular", icon: "angular", color: "#DD0031" },
    { name: "Vue.js", icon: "vue", color: "#4FC08D" },
    { name: "Next.js", icon: "next", color: "#000000" },
    { name: "Node.js", icon: "node", color: "#68A063" },
    { name: "Express", icon: "express", color: "#000000" },
    { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    { name: "PostgreSQL", icon: "postgres", color: "#336791" },
    { name: "GraphQL", icon: "graphql", color: "#E535AB" },
    { name: "Redux", icon: "redux", color: "#764ABC" },
    { name: "Tailwind CSS", icon: "tailwind", color: "#38B2AC" },
    { name: "Git", icon: "git", color: "#F05032" },
    { name: "Jest", icon: "jest", color: "#C21325" },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills & Technologies</h2>

        <div className="flex justify-center mb-8">
          <Tabs defaultValue="3d" className="w-[200px]" onValueChange={(value) => setView(value as "2d" | "3d")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="3d">3D View</TabsTrigger>
              <TabsTrigger value="2d">2D View</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {view === "3d"
            ? skills.map((skill) => <EnhancedSkillCard3D key={skill.name} name={skill.name} color={skill.color} />)
            : skills.map((skill) => <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />)}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

