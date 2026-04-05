"use client"

import { useState, useEffect } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      setScrolled(currentScrollY > 50)
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}>
          {/* Logo */}
          <a href="/" className="group flex items-center gap-3">
            <span className={`font-serif text-xl tracking-[0.12em] text-foreground transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "lg:opacity-100"
            }`}>
              LE FUSA
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
              Collezione
            </a>
            <a href="#" className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
              Artigianato
            </a>
            <a href="#" className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
              Storia
            </a>
          </nav>

          {/* CTA */}
          <button
            onClick={scrollToWaitlist}
            className={`group relative px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-300 overflow-hidden ${
              scrolled 
                ? "bg-foreground text-background hover:bg-foreground/90" 
                : "border border-foreground/30 text-foreground hover:border-foreground/60"
            }`}
          >
            <span className="relative z-10">Lista d&apos;attesa</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className={`h-px bg-border transition-opacity duration-300 ${
        scrolled ? "opacity-100" : "opacity-0"
      }`} />
    </header>
  )
}
