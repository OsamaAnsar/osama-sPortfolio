import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Osama Ansar | AI / RAG Engineer & Senior Software Engineer",
  description:
    "Osama Ansar — AI / RAG Engineer and Senior Software Engineer (7+ years). Building TypeScript retrieval-augmented generation systems, agentic pipelines, and LLM evaluation infrastructure, each with real tests and a live demo. Open to remote (UTC+5).",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
