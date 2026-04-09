"use client"

import { useEffect, useRef, useState } from "react"

export function Manifesto() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, 1 - (rect.top / window.innerHeight)))
        setScrollProgress(progress)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-48 px-6 md:px-12 lg:px-16 relative overflow-hidden"
    >
      {/* Large Background Text */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ opacity: 0.02 }}
      >
        <span className="font-serif text-[20vw] text-foreground whitespace-nowrap">
          LE FUSA
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Label */}
        <div
          className={`flex items-center gap-6 mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
            01 — Manifesto
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left - Large Quote */}
          <div className="lg:col-span-7">
            <blockquote
              className={`transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-foreground">
                <span 
                  className="inline-block transition-opacity duration-700"
                  style={{ opacity: isVisible ? 1 : 0.3 }}
                >
                  &ldquo;Non creiamo accessori.
                </span>
                <br />
                <span 
                  className="inline-block text-foreground/50 italic transition-opacity duration-700 delay-200"
                  style={{ opacity: isVisible ? 1 : 0.3 }}
                >
                  Creiamo eredità
                </span>
                <br />
                <span 
                  className="inline-block transition-opacity duration-700 delay-400"
                  style={{ opacity: isVisible ? 1 : 0.3 }}
                >
                  da indossare.&rdquo;
                </span>
              </p>
            </blockquote>
          </div>

          {/* Right - Body Text */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div
              className={`space-y-6 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-muted-foreground leading-relaxed">
                La maggior parte dei collari per gatti sono pensati per il padrone, 
                non per il gatto. Tessuti sintetici, fibbie di plastica, design che 
                ignorano la grazia naturale del felino.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                LE FUSA nasce da un&apos;idea diversa: che il tuo gatto meriti la stessa 
                cura artigianale che riservi a te stesso. Ogni collare è un atto 
                di rispetto verso la sua eleganza innata.
              </p>
              <div className="pt-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/60">
                  — Alberto, LE FUSA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className={`mt-24 pt-12 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "48h", label: "Lavorazione a mano" },
            { value: "100%", label: "Pelle italiana" },
            { value: "∞", label: "Garanzia a vita" },
            { value: "1", label: "Maestro artigiano" },
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <span className="block font-serif text-3xl md:text-4xl text-foreground mb-2">
                {stat.value}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
