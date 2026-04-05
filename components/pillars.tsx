"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const pillars = [
  {
    number: "01",
    title: "Pelle Toscana",
    subtitle: "Conciata al vegetale",
    description: "Selezioniamo solo il 3% della produzione delle migliori concerie toscane. Una pelle che respira, si ammorbidisce e sviluppa una patina unica nel tempo.",
    image: "https://images.pexels.com/photos/5462330/pexels-photo-5462330.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    number: "02",
    title: "Ottone Massiccio",
    subtitle: "Finitura anticata",
    description: "Fibbie forgiate da un&apos;unica fusione, non stampate. Ogni pezzo è lucidato a mano e trattato per sviluppare carattere con l&apos;uso.",
    image: "https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    number: "03",
    title: "Comfort Felino",
    subtitle: "Peso piuma, vestibilità perfetta",
    description: "Ogni curva è studiata sull&apos;anatomia del gatto. Bordi arrotondati, interno morbido, chiusura a sgancio rapido di sicurezza.",
    image: "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
]

export function Pillars() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
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

  return (
    <section ref={sectionRef} className="py-32 md:py-48 px-6 md:px-12 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`flex items-center gap-6 mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
            03 — Artigianato
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12">
          {/* Left - Image */}
          <div className="lg:col-span-6">
            <div
              className={`relative aspect-[4/5] overflow-hidden transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {pillars.map((pillar, index) => (
                <Image
                  key={index}
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  unoptimized
                  className={`object-cover transition-all duration-700 ${
                    activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              
              {/* Image counter */}
              <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2">
                <span className="font-serif text-sm text-foreground">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(pillars.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* Right - Content Tabs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="space-y-0">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className={`border-b border-border py-8 cursor-pointer transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="flex items-start gap-6">
                    <span className={`font-serif text-4xl transition-colors duration-300 ${
                      activeIndex === index ? "text-foreground" : "text-foreground/20"
                    }`}>
                      {pillar.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-2">
                        <h3 className={`font-serif text-2xl transition-colors duration-300 ${
                          activeIndex === index ? "text-foreground" : "text-foreground/50"
                        }`}>
                          {pillar.title}
                        </h3>
                        <span className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                          activeIndex === index ? "text-accent" : "text-muted-foreground"
                        }`}>
                          {pillar.subtitle}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed transition-all duration-500 overflow-hidden ${
                        activeIndex === index 
                          ? "text-muted-foreground max-h-24 opacity-100" 
                          : "text-muted-foreground/50 max-h-0 opacity-0"
                      }`}>
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="font-serif text-5xl text-background/70 mix-blend-difference">
                    {pillar.number}
                  </span>
                </div>
              </div>
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-serif text-2xl text-foreground">{pillar.title}</h3>
                <span className="text-[10px] tracking-[0.2em] uppercase text-accent">
                  {pillar.subtitle}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
