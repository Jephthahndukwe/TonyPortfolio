"use client"

import type React from "react"

import type { ReactNode } from "react"

interface ScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function ScrollLink({ href, children, className }: ScrollLinkProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace(/.*#/, "")
    const elem = document.getElementById(targetId)

    if (elem) {
      const headerOffset = 80 // Adjust based on your header height
      const elementPosition = elem.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <a href={href} className={className} onClick={scrollToSection}>
      {children}
    </a>
  )
}
