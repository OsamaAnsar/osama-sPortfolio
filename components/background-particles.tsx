"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function Particles({ count = 2000 }) {
  const points = useRef<THREE.Points>(null!)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 20
      const z = (Math.random() - 0.5) * 10

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }

    return positions
  }, [count])

  useFrame((state) => {
    if (points.current && points.current.geometry.attributes.position) {
      const { clock } = state

      for (let i = 0; i < count; i++) {
        const i3 = i * 3

        if (points.current.geometry.attributes.position.array[i3 + 1] !== undefined) {
          // More complex movement pattern
          points.current.geometry.attributes.position.array[i3] += Math.sin(clock.elapsedTime * 0.2 + i * 0.01) * 0.002
          points.current.geometry.attributes.position.array[i3 + 1] +=
            Math.cos(clock.elapsedTime * 0.2 + i * 0.01) * 0.002
          points.current.geometry.attributes.position.array[i3 + 2] +=
            Math.sin(clock.elapsedTime * 0.1 + i * 0.01) * 0.001
        }
      }

      points.current.geometry.attributes.position.needsUpdate = true
      points.current.rotation.y = clock.elapsedTime * 0.05
    }
  })

  return (
    <Points ref={points}>
      <PointMaterial
        transparent
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
      />
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={Float32Array.from(
            new Array(count).fill(0).flatMap(() => [
              0.1 + Math.random() * 0.2, // r
              0.3 + Math.random() * 0.4, // g
              0.8 + Math.random() * 0.2, // b
            ]),
          )}
          itemSize={3}
        />
      </bufferGeometry>
    </Points>
  )
}

export function BackgroundParticles() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="fixed inset-0 -z-10 bg-background"></div>
  }

  return (
    <div className="fixed inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles count={1500} />
      </Canvas>
    </div>
  )
}

export default BackgroundParticles

