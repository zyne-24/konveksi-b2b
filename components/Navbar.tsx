export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-950 text-white flex items-center justify-center font-bold tracking-wider text-sm">
            KB
          </div>
          <div>
            <span className="font-semibold tracking-tight text-emerald-950 text-lg block">KONVEKSI B2B</span>
            <span className="text-xs text-emerald-700/60 uppercase tracking-wider font-medium">Bespoke & Corporate Uniforms</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-emerald-900/70">
          <a href="#portfolio" className="hover:text-emerald-700 transition-colors">Portofolio</a>
          <a href="#materials" className="hover:text-emerald-700 transition-colors">Material</a>
          <a href="#faq" className="hover:text-emerald-700 transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#order" 
            className="bg-emerald-950 hover:bg-emerald-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all inline-block"
          >
            Pesan Custom
          </a>
        </div>
      </div>
    </header>
  )
}