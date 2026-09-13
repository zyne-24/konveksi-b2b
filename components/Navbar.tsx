export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-forest text-cream flex items-center justify-center font-bold tracking-wider text-sm shadow-sm">
            KB
          </div>
          <div>
            <span className="font-semibold tracking-tight text-forest text-lg block">KONVEKSI B2B</span>
            <span className="text-xs text-teal/80 uppercase tracking-wider font-medium">Bespoke & Corporate Uniforms</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-forest/80">
          <a href="#portfolio" className="hover:text-teal transition-colors">Portofolio</a>
          <a href="#materials" className="hover:text-teal transition-colors">Material</a>
          <a href="#faq" className="hover:text-teal transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#order" 
            className="bg-forest hover:bg-teal text-cream text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all inline-block"
          >
            Pesan Custom
          </a>
        </div>
      </div>
    </header>
  )
}