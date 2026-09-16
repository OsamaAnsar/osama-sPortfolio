"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollLink } from "./scroll-link"

const NODE_COUNT = 150
const LINK_DIST = 1.55
const INDIGO = new THREE.Color("#818cf8")
const CYAN = new THREE.Color("#22d3ee")
const DIM = new THREE.Color("#2a2f5e")

/** A drifting cloud of nodes wired into a graph — an embedding space that keeps re-indexing itself. */
function Constellation() {
  const group = useRef<THREE.Group>(null!)
  const mesh = useRef<THREE.InstancedMesh>(null!)
  const lines = useRef<THREE.LineSegments>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const nodes = useMemo(() => {
    const arr: { base: THREE.Vector3; phase: number; speed: number }[] = []
    for (let i = 0; i < NODE_COUNT; i++) {
      const r = 2.1 + Math.random() * 2.9
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr.push({
        base: new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta) * 0.7,
          r * Math.cos(phi),
        ),
        phase: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.35,
      })
    }
    return arr
  }, [])

  // Precompute which node pairs are close enough to wire together.
  const pairs = useMemo(() => {
    const p: [number, number][] = []
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (nodes[i].base.distanceTo(nodes[j].base) < LINK_DIST) p.push([i, j])
      }
    }
    return p
  }, [nodes])

  const linePositions = useMemo(() => new Float32Array(pairs.length * 6), [pairs])
  const live = useMemo(() => new THREE.Vector3(), [])
  const cur = useMemo(() => Array.from({ length: NODE_COUNT }, () => new THREE.Vector3()), [])
  const pulse = useRef({ from: 0, to: 1, t: 0 })

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime
    if (group.current) {
      group.current.rotation.y = time * 0.05
      group.current.rotation.x = Math.sin(time * 0.15) * 0.12
    }

    // advance a travelling signal between two linked nodes
    pulse.current.t += delta * 0.8
    if (pulse.current.t >= 1) {
      pulse.current.t = 0
      pulse.current.from = pulse.current.to
      const linked = pairs.filter((pr) => pr[0] === pulse.current.from || pr[1] === pulse.current.from)
      const pick = linked[Math.floor(Math.random() * linked.length)] ?? pairs[Math.floor(Math.random() * pairs.length)]
      pulse.current.to = pick[0] === pulse.current.from ? pick[1] : pick[0]
    }

    for (let i = 0; i < NODE_COUNT; i++) {
      const n = nodes[i]
      const wob = Math.sin(time * n.speed + n.phase) * 0.18
      cur[i].copy(n.base).multiplyScalar(1 + wob * 0.06)
      cur[i].y += wob
      dummy.position.copy(cur[i])
      const near = i === pulse.current.from || i === pulse.current.to
      const s = near ? 0.14 : 0.055 + Math.abs(wob) * 0.04
      dummy.scale.setScalar(s)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
      mesh.current.setColorAt(i, near ? CYAN : i % 5 === 0 ? INDIGO : DIM)
    }
    mesh.current.instanceMatrix.needsUpdate = true
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true

    for (let k = 0; k < pairs.length; k++) {
      const [a, b] = pairs[k]
      linePositions.set([cur[a].x, cur[a].y, cur[a].z, cur[b].x, cur[b].y, cur[b].z], k * 6)
    }
    lines.current.geometry.attributes.position.needsUpdate = true

    // the bright travelling dot
    live.lerpVectors(cur[pulse.current.from], cur[pulse.current.to], pulse.current.t)
  })

  return (
    <group ref={group}>
      <instancedMesh ref={mesh} args={[undefined, undefined, NODE_COUNT]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>

      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#4f46e5" transparent opacity={0.16} toneMapped={false} />
      </lineSegments>

      <TravellingDot pos={live} />
    </group>
  )
}

function TravellingDot({ pos }: { pos: THREE.Vector3 }) {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame(() => {
    if (ref.current) ref.current.position.copy(pos)
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshBasicMaterial color="#67e8f9" toneMapped={false} />
    </mesh>
  )
}

/** Faint additive dust for depth. */
function Dust({ count = 700 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      a[i * 3] = (Math.random() - 0.5) * 22
      a[i * 3 + 1] = (Math.random() - 0.5) * 14
      a[i * 3 + 2] = (Math.random() - 0.5) * 14
    }
    return a
  }, [count])
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.012
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8b93d8"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function Rig() {
  const { camera } = useThree()
  const target = useRef(new THREE.Vector2())
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.set((e.clientX / window.innerWidth - 0.5) * 2, (e.clientY / window.innerHeight - 0.5) * 2)
    }
    window.addEventListener("pointermove", onMove)
    return () => window.removeEventListener("pointermove", onMove)
  }, [])
  useFrame(() => {
    camera.position.x += (target.current.x * 1.1 - camera.position.x) * 0.03
    camera.position.y += (-target.current.y * 0.7 - camera.position.y) * 0.03
    camera.lookAt(0, 0, 0)
  })
  return null
}

function Scene() {
  return (
    <>
      <Rig />
      <Constellation />
      <Dust />
    </>
  )
}

const HERO_COPY = {
  status: "Open to opportunities — remote",
  eyebrow: "Lahore, Pakistan · UTC+5 · Available Oct 2026",
  body:
    "Senior Software Engineer, 7+ years. I build TypeScript retrieval-augmented generation systems, agentic pipelines, and LLM evaluation infrastructure — each one shipped with real tests and a live demo.",
}

export interface HeroStat {
  value: string
  label: string
}

export function AiHero({
  resumeDownloadUrl,
  emailHref,
  stats,
}: {
  resumeDownloadUrl: string
  emailHref: string
  stats: HeroStat[]
}) {
  const [mounted, setMounted] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-[#06070d]">
      {/* 3D backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, #10132e 0%, #0a0b16 45%, #06070d 100%)",
        }}
      >
        {mounted && !reduced ? (
          <Canvas
            camera={{ position: [0, 0, 9], fov: 42 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, powerPreference: "high-performance" }}
          >
            <Scene />
          </Canvas>
        ) : null}
        {/* legibility wash + vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06070d]/10 via-transparent to-[#06070d]" />
        <div className="absolute inset-0 [background:radial-gradient(78%_58%_at_50%_44%,transparent,rgba(6,7,13,0.68))]" />
        {/* feather into the page below */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex flex-col items-center gap-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200/90 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)]" />
              {HERO_COPY.status}
            </p>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-200/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.7)]" />
              {HERO_COPY.eyebrow}
            </p>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(129,140,248,0.35)] md:text-6xl">
            Osama Ansar
          </h1>
          <p className="mt-3 bg-gradient-to-r from-indigo-300 via-sky-300 to-cyan-300 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
            AI / RAG Engineer
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {HERO_COPY.body}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-indigo-500 text-white shadow-[0_8px_30px_-6px_rgba(99,102,241,0.6)] hover:bg-indigo-400"
            >
              <ScrollLink href="#ai-projects">View AI Projects</ScrollLink>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:text-white"
            >
              <Link href={resumeDownloadUrl} download="Osama-Ansar-Resume.pdf">
                Download Résumé
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/50">
            or{" "}
            <Link href={emailHref} className="text-white/70 underline underline-offset-4 hover:text-cyan-300">
              email me directly
            </Link>
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center backdrop-blur"
              >
                <div className="text-2xl font-bold text-white md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs leading-snug text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <span className="animate-bounce text-white/40">↓</span>
      </div>
    </section>
  )
}

export default AiHero
