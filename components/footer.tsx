export function Footer() {
  return (
    <footer className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <span className="font-serif text-2xl tracking-[0.12em] text-foreground">
                LE FUSA
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Collari artigianali in pelle italiana per gatti che meritano il meglio.
            </p>
          </div>

          {/* Links Column */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-foreground mb-6">
              Scopri
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                La Collezione
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Il Processo
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                La Storia
              </a>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-foreground mb-6">
              Contatti
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="mailto:ciao@lefusa.it" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ciao@lefusa.it
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
            </nav>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-foreground mb-6">
              Legale
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Termini
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
            &copy; 2026 LE FUSA. Tutti i diritti riservati.
          </span>
          <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
            Fatto a mano in Toscana
          </span>
        </div>
      </div>
    </footer>
  )
}
