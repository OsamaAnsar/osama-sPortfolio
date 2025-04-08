"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { type Group, MathUtils } from "three"
import { Card, CardContent } from "@/components/ui/card"

interface Skill3DProps {
  name: string
  color: string
}

function SkillText({ name, color }: Skill3DProps) {
  const textRef = useRef<Group>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = MathUtils.lerp(textRef.current.rotation.y, hovered ? Math.PI * 2 : 0, 0.1)
    }
  })

  return (
    <Float floatIntensity={hovered ? 2 : 0.5} rotationIntensity={hovered ? 2 : 0.5} speed={hovered ? 5 : 2}>
      <group ref={textRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <mesh>
          <boxGeometry args={[1.5, 0.5, 0.1]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[1.4, 0.4]} />
          <meshBasicMaterial color="white" />
        </mesh>
      </group>
    </Float>
  )
}

export function SkillCard3D({ name, color = "#ffffff" }: Skill3DProps) {
  return (
    <Card className="overflow-hidden h-32">
      <CardContent className="p-0 h-full">
        <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SkillText name={name} color={color} />
          <mesh position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]}>
            <textGeometry args={[name, { size: 1, height: 0.1 }]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Canvas>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-medium text-sm">{name}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default SkillCard3D

