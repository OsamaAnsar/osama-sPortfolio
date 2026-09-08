"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Sparkles, X, ArrowUp } from "lucide-react"
import { aboutChunks } from "@/lib/about-me"

const TFJS_URL = "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3"
const EMBED_MODEL = "Xenova/all-MiniLM-L6-v2"
const TOP_K = 3
const SECOND_CHUNK_THRESHOLD = 0.08 // include chunk #2 only if it's nearly as relevant as #1

type Role = "user" | "agent"
interface Msg {
  role: Role
  text: string
  sources?: string[]
  pending?: boolean
}

const SUGGESTIONS = [
  "What are you looking for?",
  "Tell me about MELAI Engineering Lab",
  "Why hire you for a RAG role?",
  "What have you shipped recently?",
]

function cosine(a: number[], b: number[]): number {
  let dot = 0,
    na = 0,
    nb = 0
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i]
    na += a[i] * a[i]
    nb += b[i] * b[i]
  }
  return na && nb ? dot / (Math.sqrt(na) * Math.sqrt(nb)) : 0
}

// module-level caches so re-opening the panel is instant
let embedder: any = null
let chunkVectors: number[][] | null = null

export function AboutAgent() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState<string>("")
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "agent",
      text: "Ask me anything about Osama — his work, what he's looking for, how he builds. Retrieval runs in your browser over a short bio — it finds the most relevant passage and won't invent facts.",
    },
  ])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, open])

  const ensureRetriever = useCallback(async () => {
    const mod = await import(/* webpackIgnore: true */ TFJS_URL)
    mod.env.allowLocalModels = false
    if (!embedder) {
      setStatus("loading the retriever…")
      embedder = await mod.pipeline("feature-extraction", EMBED_MODEL)
    }
    if (!chunkVectors) {
      setStatus("indexing the bio…")
      const out = await embedder(
        aboutChunks.map((c) => `${c.title}. ${c.text}`),
        { pooling: "mean", normalize: true },
      )
      chunkVectors = out.tolist()
    }
    return mod
  }, [])

  const ask = useCallback(
    async (question: string) => {
      const q = question.trim()
      if (!q || busy) return
      setInput("")
      setBusy(true)
      setMessages((m) => [...m, { role: "user", text: q }, { role: "agent", text: "", pending: true }])

      try {
        await ensureRetriever()
        setStatus("retrieving…")
        const [qv] = (await embedder([q], { pooling: "mean", normalize: true })).tolist() as number[][]
        const ranked = aboutChunks
          .map((c, i) => ({ c, score: cosine(qv, chunkVectors![i]) }))
          .sort((a, b) => b.score - a.score)
          .slice(0, TOP_K)

        const top = ranked[0]
        const weak = !top || top.score < 0.18
        let text: string
        if (weak) {
          text =
            "That's not something I've written about myself here — try asking about my projects, my experience, what I'm looking for, or how I build. Or email osama.ansar.pk@gmail.com."
        } else {
          text = top.c.text
          const second = ranked[1]
          if (second && top.score - second.score < SECOND_CHUNK_THRESHOLD) {
            text += " " + second.c.text
          }
        }

        setMessages((m) => {
          const copy = [...m]
          copy[copy.length - 1] = {
            role: "agent",
            text,
            sources: weak ? undefined : ranked.filter((r) => r.score > 0.15).map((r) => r.c.title),
            pending: false,
          }
          return copy
        })
      } catch (err) {
        setMessages((m) => {
          const copy = [...m]
          copy[copy.length - 1] = {
            role: "agent",
            text:
              "The in-browser retriever couldn't load (it needs a modern browser and a little bandwidth). " +
              "In short: I'm an AI / RAG engineer, open to remote or relocation, who ships every project with real tests and a live demo. Email osama.ansar.pk@gmail.com.",
          }
          return copy
        })
      } finally {
        setStatus("")
        setBusy(false)
      }
    },
    [busy, ensureRetriever],
  )

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0d1030] px-4 py-2.5 text-sm font-medium text-white shadow-[0_10px_40px_-8px_rgba(79,70,229,0.6)] backdrop-blur transition-transform hover:scale-[1.03]"
        >
          <Sparkles className="h-4 w-4 text-cyan-300" />
          Ask about me
        </button>
      )}

      {open && (
        <div className="fixed bottom-5 right-5 z-50 flex h-[540px] w-[min(92vw,400px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0b1a] text-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                Ask my RAG agent
              </div>
              <div className="mt-0.5 text-[11px] text-white/45">
                chunk → embed → retrieve → answer, all in your browser
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md p-1 text-white/50 hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : ""}>
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-sm bg-indigo-500 px-3 py-2"
                      : "max-w-[92%] rounded-2xl rounded-bl-sm bg-white/5 px-3 py-2 leading-relaxed text-white/90"
                  }
                >
                  {m.pending ? (
                    <span className="text-white/50">{status || "…"}</span>
                  ) : (
                    <>
                      {m.text}
                      {m.sources && m.sources.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {m.sources.map((s) => (
                            <span
                              key={s}
                              className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-cyan-200/70"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => ask(s)}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70 hover:bg-white/10"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              ask(input)
            }}
            className="flex items-center gap-2 border-t border-white/10 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Osama…"
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/30 focus:border-white/25"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="rounded-lg bg-indigo-500 p-2 text-white disabled:opacity-40 hover:bg-indigo-400"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default AboutAgent
