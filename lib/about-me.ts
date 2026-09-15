/**
 * The knowledge base the "Ask about me" agent retrieves over. First person,
 * kept factual — the agent is instructed to answer only from these passages.
 */
export interface AboutChunk {
  id: string
  title: string
  text: string
}

export const aboutChunks: AboutChunk[] = [
  {
    id: "who",
    title: "Who I am",
    text: "I'm Osama Ansar, a Senior Software Engineer with 7+ years of experience, now focused on AI / RAG engineering. I'm based in Lahore, Pakistan (UTC+5). I build TypeScript retrieval-augmented generation systems, agentic pipelines, and LLM evaluation infrastructure, and I ship each one with real tests and a live demo rather than a slide.",
  },
  {
    id: "availability",
    title: "Availability and what I'm looking for",
    text: "I'm looking for an AI / RAG engineering role — retrieval, agents, evaluation, or applied LLM work. I'm open to fully remote positions and to relocation, including to Saudi Arabia. My hours (UTC+5) overlap US mornings and the full European working day. The nearest-term goal is a role by October 2026.",
  },
  {
    id: "background",
    title: "Engineering background",
    text: "Over seven years I've worked across the stack in TypeScript and JavaScript — React, Angular, Vue, Node and Express — on production web applications, most recently at MenuLogic K12. That foundation is why my AI work leans on strong typing, Zod validation at boundaries, provider SDKs kept behind interfaces, and reproducible experiments, instead of gluing libraries together.",
  },
  {
    id: "how-i-work",
    title: "How I work",
    text: "A few rules I hold to: every experiment is reproducible — I persist the fully-resolved request, config, model, prompt version and the pricing used at run time. I never fabricate numbers; token counts, latencies, costs and eval scores come from real runs. Provider SDKs stay behind interfaces so domain logic never imports a vendor SDK directly. And nothing ships without tests and a runnable demo.",
  },
  {
    id: "melai-what",
    title: "MELAI Engineering Lab — what it is",
    text: "MELAI Engineering Lab is my flagship build: a self-hosted lab bench that makes every part of an AI system measurable, comparable and reproducible — from a single model call to a full agent run. It's a pnpm + Turborepo monorepo with a Next.js web app, a Fastify API, and packages for the provider layer, shared types, and the database. It runs with zero API keys and zero Docker thanks to built-in mock providers and an in-process Postgres.",
  },
  {
    id: "melai-milestones",
    title: "MELAI Engineering Lab — progress",
    text: "MELAI shipped in six milestones, all complete. Model Comparison Lab runs one prompt across several models and shows answers, latency, tokens and cost side by side. RAG Lab does chunking, embeddings, and BM25 / vector / hybrid retrieval with the per-method rank and score behind every hybrid hit. Evaluation Lab scores a retrieval or generation config against a dataset with recall@k, precision@k, MRR, nDCG, hit-rate and LLM-as-judge, streamed case by case. Agents Lab gives an agent a system prompt and a toolset and streams its tool-calling loop live. Local-AI Observability merges every model call across every lab into one filterable trace feed, plus live Ollama VRAM/runtime telemetry. And a CLI + CI regression gate seeds a database, runs a generation eval, and fails the build on a regression — the same command runs locally or in CI. It's deployed live: web on Netlify, the API on Render, Postgres on Neon.",
  },
  {
    id: "melai-scratch",
    title: "MELAI — retrieval built from scratch",
    text: "In MELAI the retrieval core is hand-written, not a library import: Okapi BM25 (k1=1.5, b=0.75), Reciprocal Rank Fusion, cosine vector search, and sentence / fixed-size chunking all live in packages/ai-core/src/retrieval. The evaluation metrics — recall@k, precision@k, MRR, nDCG, hit-rate — are hand-written too, with hand-computed test fixtures. The point is to show the mechanism, not to demonstrate that I can call a framework.",
  },
  {
    id: "drape-pk",
    title: "Project: Drape PK",
    text: "Drape PK is a multi-brand AI fitting room for Pakistani menswear — one catalogue of 75 real listings cached from five labels (Outfitters, Breakout, Engine, Cougar, Charcoal). It has local CLIP visual search from an uploaded garment photo, a language-model stylist that turns a plain-English brief into a cross-brand three-piece look, virtual try-on on an uploaded full-body photo, and a wardrobe plus a digital-twin style profile so recommendations avoid duplicate purchases. Privacy is a design constraint: search images aren't stored and wardrobe photos never reach the language model. Live at fashionai-pakistan.netlify.app.",
  },
  {
    id: "retrieval-playground",
    title: "Project: Retrieval Playground",
    text: "Retrieval Playground is a single-page demo where you sentence-chunk a document and compare from-scratch BM25, dense embeddings, and their Reciprocal Rank Fusion — then score each against the chunks you mark relevant, with recall@k, precision@k, MRR, hit@k and nDCG@k. The embeddings model, all-MiniLM-L6-v2, runs entirely in the browser via Transformers.js; there is no backend. It's a Hugging Face Space, with the algorithms ported from MELAI.",
  },
  {
    id: "neural-atlas",
    title: "Project: Neural Atlas",
    text: "Neural Atlas is an interactive 'learn AI by exploring' site — around 35 lessons across seven tracks, each with a hands-on visual widget. I built the Retrieval & RAG track (embeddings, nearest-neighbour search, hybrid search and rank fusion, RAG, retrieval evaluation), an LLM decoding lesson, and an algorithm gallery covering binary search, merge sort, Dijkstra and PageRank. Live at neural-atlas-osamaansar.netlify.app.",
  },
  {
    id: "hnsw-visualized",
    title: "Project: HNSW Visualized",
    text: "HNSW Visualized is a from-scratch build of the Hierarchical Navigable Small World graph — the approximate nearest-neighbour index most vector databases use internally — in about 240 lines of dependency-free JavaScript: exponential level assignment, greedy descent, per-layer beam search, the neighbour-selection heuristic, bidirectional linking with symmetric pruning. Vectors are d-dimensional and the canvas is a fixed 2-D random projection. Every parameter change re-runs a 40-query held-out evaluation and reports mean recall@k against a brute-force baseline, mean distance calls, and the speed-up; widening efSearch trades distance calls for recall in front of you. Ten tests run under node --test. It is a static page, no backend, deployed as a Hugging Face Space, and it reuses the hand-written retrieval metrics from MELAI.",
  },
  {
    id: "gpu-visualized",
    title: "Project: GPU Visualized",
    text: "GPU Visualized is an interactive lecture aid walking through how a GPU actually executes a neural network — die, SM, warp, memory hierarchy — up to the two numbers that decide training speed: arithmetic intensity and where the data lives. Switch between A100, H100 and RTX 4090 and every diagram recomputes: an occupancy calculator, a coalescing demo, a tiling view, and a roofline plot with a transformer layer's kernels on it. Every spec is sourced from a vendor datasheet; a 30-test suite checks the spec table against itself, reproducing published TFLOPS to within 0.15%. Vanilla JS, no framework, no build step, deployed as a Hugging Face Space and on GitHub.",
  },
  {
    id: "langchain-rag-playground",
    title: "Project: LangChain RAG Playground",
    text: "LangChain RAG Playground is a RAG pipeline built on LangChain.js and LCEL, running almost entirely in the browser. Paste a document, watch it split and embed, ask a question, and see the retrieved context, the assembled prompt, and a streamed grounded answer. Embeddings run locally via Transformers.js — no server, no key; generation uses a user-supplied OpenAI key kept in localStorage only. The chain is about 60 lines and is unit-tested with LangChain's FakeListChatModel, so the logic is verified with no network at all.",
  },
  {
    id: "motion-atlas",
    title: "Project: Motion Atlas",
    text: "Motion Atlas is a self-hosted take on Runway or Kling: prompt or image in, MP4 out, running a Wan 2.2 diffusion model via ComfyUI on my own RTX 3070 rather than a hosted API. It's built around technical visibility — live inference stages over a WebSocket event channel, GPU telemetry sampled every two seconds, a real FIFO job queue, and full reproducible metadata per render. The full path from browser through Next.js and FastAPI to ComfyUI and back has run end to end on real hardware. A DEMO_MODE runs the entire stack with no GPU at all, via one provider interface the frontend never has to know is swapped.",
  },
  {
    id: "inference-atlas",
    title: "Project: Inference Atlas",
    text: "Inference Atlas is a self-hosted LLM inference playground that surfaces what is usually hidden. The playground streams responses over SSE with sampling presets and stop/regenerate, and reports per-request time-to-first-token, latency, tokens per second and an estimated infrastructure cost — labelled as gateway measurements, not GPU kernel timings. A GPU page polls utilisation, VRAM and throughput, and a CPU-only gateway reports those as unavailable rather than inventing them. The stack is a Next.js App Router frontend behind a same-origin proxy, a FastAPI gateway, Redis for fixed-window rate limiting and expiring request records, and a vLLM server that downloads Hugging Face weights at startup, with a documented path from a fully simulated demo to a real GPU deployment. No hosted model API is used; no cloud GPU has been provisioned yet, so demo numbers are explicitly not benchmarks, and the vLLM adapter is covered by a mocked upstream contract test.",
  },
  {
    id: "other-projects",
    title: "Other projects",
    text: "Refract is a flagship RAG project. DevSignal surfaces signal from developer activity. generative-ui-chat renders real UI components from AI SDK tool calls, and doc-chat-citations does grounded document chat with inline citations — both are live on Vercel. This portfolio's own 'ask about me' agent is a client-side RAG pipeline: chunk, embed with MiniLM, retrieve, and answer from context, all in the browser.",
  },
  {
    id: "open-source",
    title: "Open-source contributions",
    text: "I contribute scoped fixes to the vendor SDKs I actually use. My pull request adding a module-config builder to Weaviate's TypeScript client was approved by a maintainer, and I have several more open there. I've also sent fixes to Qdrant's JS client (a dropped reverse-proxy path prefix), Turso's libSQL client (a UTF-8 byte-limit bug and a base-URL path bug), and Google's Agent2Agent (A2A) JS SDK (REST pagination for push-notification configs). A real patch to a tool's SDK is a stronger signal than a résumé line.",
  },
  {
    id: "skills",
    title: "Skills and stack",
    text: "TypeScript and JavaScript first, then React, Next.js, Angular, Vue, Node and Express. For AI: RAG pipelines, vector databases and pgvector, embeddings, BM25 and hybrid search, ANN indexes like HNSW, LLM-as-judge evaluation, agentic tool use, the OpenAI and Anthropic SDKs, Transformers.js for in-browser models, self-hosted inference with vLLM and FastAPI, Drizzle ORM, Fastify, Zod, Vitest and Playwright. I deliberately avoid leaning on the Vercel AI SDK for provider abstraction because per-provider token, cost and cache differences are exactly what I want to keep visible.",
  },
  {
    id: "contact",
    title: "How to reach me",
    text: "Email me at osama.ansar.pk@gmail.com. I'm on GitHub as OsamaAnsar and on LinkedIn. My résumé is linked from this site. The fastest way to evaluate me is to open any project's live demo and its repository — every project has both.",
  },
  {
    id: "why-hire",
    title: "Why hire me for a RAG or agent role",
    text: "I've implemented retrieval and evaluation from first principles, not just called a framework — BM25, RRF, cosine search and the ranking metrics are all hand-written in my work. I care about the parts teams get wrong: correct per-provider cost and token accounting, reproducible experiments, evaluation methodology, and LLM-as-judge with a deterministic fake for CI. And I ship: every project on this site has real tests and a demo you can click right now.",
  },
]
