"use client"

import { useEffect, useRef, useState } from "react"

export function WaitlistForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: ""
  })

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section
      ref={sectionRef}
      id="waitlist"
      className="py-32 md:py-48 px-6 md:px-12 lg:px-16 bg-foreground text-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {!isSubmitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Content */}
            <div>
              <div
                className={`flex items-center gap-6 mb-8 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-background/60 font-medium">
                  04 — Lista d&apos;attesa
                </span>
                <div className="w-12 h-px bg-background/20" />
              </div>

              <h2
                className={`font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 transition-all duration-1000 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Entra nel<br />
                <span className="text-background/40 italic">circolo</span>
              </h2>

              <p
                className={`text-background/70 leading-relaxed max-w-md mb-12 transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                La lista d&apos;attesa è l&apos;unico modo per accedere alla prima collezione. 
                I membri riceveranno accesso anticipato, prezzi riservati e la possibilità 
                di personalizzare il proprio pezzo.
              </p>

              {/* Benefits */}
              <div
                className={`space-y-4 transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {[
                  "Accesso 48h prima del lancio pubblico",
                  "Sconto esclusivo del 15% sul primo ordine",
                  "Possibilità di incisione personalizzata",
                  "Invito agli eventi riservati"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-5 h-px bg-background/30" />
                    <span className="text-sm text-background/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="flex flex-col justify-center">
              <form
                onSubmit={handleSubmit}
                className={`transition-all duration-1000 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="space-y-8">
                  {/* Nome Field */}
                  <div className="relative">
                    <label 
                      htmlFor="nome" 
                      className={`absolute left-0 transition-all duration-300 ${
                        focusedField === 'nome' || formData.nome 
                          ? '-top-6 text-[10px] tracking-[0.2em] uppercase text-background/60' 
                          : 'top-4 text-base text-background/50'
                      }`}
                    >
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('nome')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-0 py-4 bg-transparent border-b border-background/20 text-background focus:outline-none focus:border-background/60 transition-colors text-lg"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label 
                      htmlFor="email" 
                      className={`absolute left-0 transition-all duration-300 ${
                        focusedField === 'email' || formData.email 
                          ? '-top-6 text-[10px] tracking-[0.2em] uppercase text-background/60' 
                          : 'top-4 text-base text-background/50'
                      }`}
                    >
                      Indirizzo email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-0 py-4 bg-transparent border-b border-background/20 text-background focus:outline-none focus:border-background/60 transition-colors text-lg"
                    />
                  </div>

                  {/* Telefono Field */}
                  <div className="relative">
                    <label 
                      htmlFor="telefono" 
                      className={`absolute left-0 transition-all duration-300 ${
                        focusedField === 'telefono' || formData.telefono 
                          ? '-top-6 text-[10px] tracking-[0.2em] uppercase text-background/60' 
                          : 'top-4 text-base text-background/50'
                      }`}
                    >
                      Telefono (opzionale)
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('telefono')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-0 py-4 bg-transparent border-b border-background/20 text-background focus:outline-none focus:border-background/60 transition-colors text-lg"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-12 w-full py-5 bg-background text-foreground text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-background/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  <span className={`inline-block transition-transform duration-300 ${isSubmitting ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                    Unisciti alla lista esclusiva
                  </span>
                  {isSubmitting && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                    </span>
                  )}
                </button>

                {/* Counter */}
                <div className="mt-8 flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-background/60">
                      87 posti rimanenti
                    </span>
                  </div>
                  <div className="w-px h-4 bg-background/20" />
                  <span className="text-[10px] tracking-[0.15em] uppercase text-background/60">
                    213 iscritti
                  </span>
                </div>
              </form>
            </div>
          </div>
        ) : (
          /* Success State */
          <div
            className="max-w-2xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700"
          >
            {/* Checkmark Animation */}
            <div className="mb-10">
              <div className="w-24 h-24 mx-auto border border-background/30 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-background"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" className="animate-draw" style={{
                    strokeDasharray: 24,
                    strokeDashoffset: 24,
                    animation: 'draw 0.5s ease-out 0.3s forwards'
                  }} />
                </svg>
              </div>
            </div>

            <span className="text-[10px] tracking-[0.3em] uppercase text-background/60 block mb-4">
              Conferma ricevuta
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl text-background mb-6">
              Benvenuto, {formData.nome}
            </h2>
            
            <p className="text-background/70 leading-relaxed mb-10 max-w-lg mx-auto">
              Sei ora parte del circolo esclusivo AUREO. Riceverai una email di conferma 
              a <span className="text-background">{formData.email}</span> con i dettagli 
              sul tuo accesso anticipato.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-background/10">
              <span className="text-[10px] tracking-[0.2em] uppercase text-background/50">
                La tua posizione in lista
              </span>
              <span className="font-serif text-3xl text-background">
                #214
              </span>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  )
}
