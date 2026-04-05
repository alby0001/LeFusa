"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const products = [
  {
    src: "https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Gatto elegante con collare",
    name: "Il Classico",
    material: "Pelle naturale",
    price: "€180"
  },
  {
    src: "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Dettaglio pelle lavorata",
    name: "Il Raffinato",
    material: "Pelle invecchiata",
    price: "€220"
  },
  {
    src: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Gatto con collare premium",
    name: "L&apos;Esclusivo",
    material: "Edizione limitata",
    price: "€340"
  }
]

export function ProductPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 md:py-48 px-6 md:px-12 lg:px-16 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div
              className={`flex items-center gap-6 mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
                02 — Collezione
              </span>
              <div className="w-12 h-px bg-border" />
            </div>
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl text-foreground transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Tre espressioni<br />
              <span className="text-foreground/40 italic">di eccellenza</span>
            </h2>
          </div>
          <p
            className={`max-w-sm text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Ogni pezzo è numerato e accompagnato da un certificato di autenticità firmato dal maestro artigiano.
          </p>
        </div>

        {/* Products Grid - Clean 3 Column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="group relative aspect-[3/4] overflow-hidden bg-muted cursor-pointer">
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  unoptimized
                  className={`object-cover transition-all duration-700 ${
                    hoveredIndex === index ? "scale-105" : "scale-100"
                  } ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-50" : "opacity-100"}`}
                />
                
                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-foreground/10 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`} />
                
                {/* Product Number - top right */}
                <div className="absolute top-6 right-6">
                  <span className="font-serif text-6xl text-background/90 mix-blend-difference font-light">
                    0{index + 1}
                  </span>
                </div>
                
                {/* Product Info - Revealed on hover */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent transition-all duration-500 ${
                  hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                  <span className="block font-serif text-2xl text-background mb-2">
                    {product.name}
                  </span>
                  <span className="block text-[11px] tracking-[0.2em] uppercase text-background/70">
                    {product.material}
                  </span>
                </div>
              </div>
              
              {/* Caption below image */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="block font-serif text-xl text-foreground">{product.name}</span>
                    <span className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
                      {product.material}
                    </span>
                  </div>
                  <span className="font-serif text-lg text-foreground">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className={`mt-20 flex justify-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-4 text-muted-foreground">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span className="text-[11px] tracking-[0.15em] uppercase">
              Spedizione assicurata in tutto il mondo
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
