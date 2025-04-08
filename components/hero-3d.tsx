"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, PresentationControls, Environment, Text, MeshDistortMaterial, Sphere } from "@react-three/drei"
import { type Group, MathUtils } from "three"
import { ScrollLink } from "./scroll-link"
import { Button } from "@/components/ui/button"

// Enhanced 3D model with distortion effects
function EnhancedModel({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  const group = useRef<Group>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime()
      group.current.rotation.y = Math.sin(t / 2) / 4 + t * 0.1
      group.current.position.y = Math.sin(t / 1.5) / 6
    }
  })

  return (
    <group
      ref={group}
      position={position}
      scale={scale}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh>
        <torusKnotGeometry args={[0.8, 0.35, 100, 16]} />
        <MeshDistortMaterial
          color={hovered ? "#4f46e5" : "#3b82f6"}
          speed={2}
          distort={0.3}
          radius={1}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}

// Animated floating tech spheres with better visuals
function FloatingIcons() {
  const iconsRef = useRef<Group>(null!)
  const icons = [
    { name: "React", position: [-2.5, 0, 0], color: "#61DAFB" },
    { name: "Angular", position: [-1.5, 1.5, -1], color: "#DD0031" },
    { name: "Vue", position: [0, 2.5, 0], color: "#4FC08D" },
    { name: "Node", position: [1.5, 1.5, 1], color: "#68A063" },
    { name: "JS", position: [2.5, 0, 0], color: "#F7DF1E" },
  ]

  useFrame((state) => {
    if (iconsRef.current) {
      const t = state.clock.getElapsedTime()
      iconsRef.current.rotation.y = MathUtils.lerp(iconsRef.current.rotation.y, Math.sin(t / 10) * Math.PI, 0.025)
    }
  })

  return (
    <group ref={iconsRef}>
      {icons.map((icon, index) => (
        <Float
          key={icon.name}
          speed={1.5 + Math.random()}
          rotationIntensity={1}
          floatIntensity={2}
          position={icon.position as [number, number, number]}
        >
          <Sphere args={[0.4, 32, 32]}>
            <MeshDistortMaterial
              color={icon.color}
              speed={2}
              distort={0.2}
              metalness={0.8}
              roughness={0.2}
              emissive={icon.color}
              emissiveIntensity={0.4}
            />
          </Sphere>
          <Text
            position={[0, -0.6, 0]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Inter_Bold.json"
          >
            {icon.name}
          </Text>
        </Float>
      ))}
    </group>
  )
}

// Animated background elements
function AnimatedBackground() {
  const meshes = useRef<Group>(null!)

  useFrame((state) => {
    if (meshes.current) {
      meshes.current.children.forEach((mesh: any, i) => {
        const t = state.clock.getElapsedTime()
        mesh.position.y = Math.sin(t / 1.5 + i * 0.5) * 0.5
        mesh.rotation.x = Math.sin(t / 4 + i) * 0.3
        mesh.rotation.z = Math.sin(t / 4 + i * 0.5) * 0.3
      })
    }
  })

  return (
    <group ref={meshes}>
      {Array.from({ length: 15 }).map((_, i) => (
        <mesh
          key={i}
          position={[(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 5 - 5]}
          scale={0.1 + Math.random() * 0.3}
        >
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color={`hsl(${Math.random() * 90 + 180}, 70%, 60%)`} wireframe={true} />
        </mesh>
      ))}
    </group>
  )
}

function HeroContent() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none pt-16">
      <div className="container flex flex-col items-center text-center pointer-events-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
          Hi, I'm <span className="text-primary">Osama Ansar</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8 drop-shadow-md">
          A passionate JavaScript developer building modern web applications with React, Angular, Vue, and Node.js.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="shadow-lg">
            <ScrollLink href="#projects">View My Work</ScrollLink>
          </Button>
          <Button variant="outline" size="lg" asChild className="bg-background/20 backdrop-blur-sm shadow-lg">
            <ScrollLink href="#contact">Contact Me</ScrollLink>
          </Button>
        </div>
      </div>
    </div>
  )
}

export function Hero3D() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="h-[100vh] bg-gradient-to-b from-primary/20 to-background flex items-center justify-center pt-16">
        <div className="container">
          <HeroContent />
        </div>
      </section>
    )
  }

  return (
    <section className="h-[100vh] relative pt-16">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        className="bg-gradient-to-b from-primary/20 via-purple-500/10 to-background"
        dpr={[1, 2]}
      >
        <fog attach="fog" args={["#202030", 5, 20]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float rotationIntensity={0.4} floatIntensity={2}>
            <EnhancedModel position={[0, -0.5, 0]} scale={1} />
            <FloatingIcons />
          </Float>
        </PresentationControls>

        <AnimatedBackground />
        <Environment preset="sunset" />
      </Canvas>

      <HeroContent />
    </section>
  )
}

export default Hero3D

