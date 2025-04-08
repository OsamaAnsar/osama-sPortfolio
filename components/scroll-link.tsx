"use client"

import type React from "react"

import { type ReactNode, useEffect, useState } from "react"

interface ScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function ScrollLink({ href, children, className }: ScrollLinkProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()

    // Remove the # from the href
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Update the URL without reloading the page
      window.history.pushState({}, "", href)
    }
  }

  if (!mounted) {
    // Return a non-interactive version during SSR or before hydration
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <a href={href} onClick={handleScroll} className={className}>
      {children}
    </a>
  )
}

