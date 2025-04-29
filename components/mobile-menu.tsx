"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollLink } from "@/components/scroll-link"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>

      <div className={`mobile-menu ${isOpen ? "open" : "closed"} p-6`}>
        <div className="flex justify-end mb-8">
          <Button variant="ghost" size="icon" onClick={closeMenu} className="text-white">
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

        <div className="flex flex-col space-y-6 items-center text-center">
          <ScrollLink href="#about" className="text-lg font-medium text-white hover:text-blue" onClick={closeMenu}>
            About
          </ScrollLink>
          <ScrollLink href="#experience" className="text-lg font-medium text-white hover:text-blue" onClick={closeMenu}>
            Experience
          </ScrollLink>
          <ScrollLink href="#skills" className="text-lg font-medium text-white hover:text-blue" onClick={closeMenu}>
            Skills
          </ScrollLink>
          <ScrollLink href="#projects" className="text-lg font-medium text-white hover:text-blue" onClick={closeMenu}>
            Projects
          </ScrollLink>
          <ScrollLink href="#contact" className="text-lg font-medium text-white hover:text-blue" onClick={closeMenu}>
            Contact
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}
