"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function DarkModeIndicator() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium z-50">
      {theme === "dark" ? "Dark Mode" : "Light Mode"}
    </div>
  )
}
