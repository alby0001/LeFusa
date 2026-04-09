"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={heroRef}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Main Content Grid */}
      <div className="relative min-h-screen grid grid-cols-1 lg:grid-cols-12 items-center">
        
        {/* Left Column - Text */}
        <div className="lg:col-span-6 px-6 md:px-12 lg:px-16 pt-32 pb-12 lg:py-0 order-2 lg:order-1">
          {/* Overline */}
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-12 h-px bg-foreground/30" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
              Collezione 001
            </span>
          </div>

          {/* Main Headline - Split Typography */}
          <h1 className="mb-8">
            <span
              className={`block font-serif text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] text-foreground transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Il lusso
            </span>
            <span
              className={`block font-serif text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] text-foreground/40 italic transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              silenzioso
            </span>
            <span
              className={`block font-serif text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] text-foreground transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              del felino
            </span>
          </h1>

          {/* Subtext */}
          <p
            className={`max-w-md text-base md:text-lg text-muted-foreground leading-relaxed mb-10 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Collari in pelle italiana lavorata a mano. Per chi comprende 
            che l&apos;eleganza non ha bisogno di gridare.
          </p>

          {/* CTA Group */}
          <div
            className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={scrollToWaitlist}
              className="group relative px-8 py-4 bg-foreground text-background text-[11px] tracking-[0.25em] uppercase font-medium overflow-hidden"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                Entra nella lista
              </span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-[-8px]">
                &rarr;
              </span>
            </button>
            
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                87 posti rimanenti
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Image Composition */}
        <div className="lg:col-span-6 relative min-h-[60vh] h-[60vh] lg:h-screen order-1 lg:order-2">
          {/* Main Image */}
          <div
            className={`absolute inset-4 lg:inset-8 min-h-[200px] transition-all duration-1200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              transform: isVisible 
                ? `translate(${(mousePosition.x - 0.5) * 10}px, ${(mousePosition.y - 0.5) * 10}px)` 
                : undefined,
              transition: 'transform 0.3s ease-out, opacity 1.2s ease-out, scale 1.2s ease-out'
            }}
          >
            <Image
              src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Elegante gatto"
              fill
              className="object-cover"
              priority
              unoptimized
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
          </div>

          {/* Floating Label */}
          <div
            className={`absolute bottom-12 lg:bottom-24 left-4 lg:left-8 bg-background/90 backdrop-blur-sm px-6 py-4 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
              Materiali
            </span>
            <span className="block font-serif text-sm text-foreground">
              Pelle toscana · Medaglietta personalizzata
            </span>
          </div>

          </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 delay-800 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground">
          Scopri
        </span>
        <div className="w-px h-12 bg-foreground/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground/60 animate-scroll" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
