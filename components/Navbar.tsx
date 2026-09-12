import React from 'react'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold tracking-wider text-sm">
            KB
          </div>
          <div>
            <span className="font-semibold tracking-tight text-zinc-900 text-lg block">KONVEKSI B2B</span>
            <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Bespoke & Corporate Uniforms</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <a href="#portfolio" className="hover:text-zinc-900 transition-colors">Portofolio</a>
          <a href="#timeline" className="hover:text-zinc-900 transition-colors">Alur Produksi</a>
          <a href="#materials" className="hover:text-zinc-900 transition-colors">Bahan & Spesifikasi</a>
          <a href="#faq" className="hover:text-zinc-900 transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#order" 
            className="bg-zinc-950 hover:bg-zinc-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all"
          >
            Pesan Custom
          </a>
        </div>
      </div>
    </header>
  )
}
