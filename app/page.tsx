import { Navbar } from "@/components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-32 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4 block">Minimum Order 12 Pcs</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-zinc-950 mb-6 leading-[1.1]">
              Produksi Seragam Premium untuk Kebutuhan Korporat Anda
            </h1>
            <p className="text-lg text-zinc-600 mb-10 max-w-[500px] leading-relaxed">
              Spesialisasi almamater, jas, rompi, dan seragam kantor dengan kualitas jahitan presisi, material terbaik, dan transparansi penuh.
            </p>
            <div className="flex items-center gap-4">
              <a href="#order" className="bg-zinc-950 text-white px-8 py-4 rounded-lg font-medium text-sm shadow-md hover:bg-zinc-900 transition-all">
                Mulai Pesanan Custom
              </a>
            </div>
          </div>
          
          <div className="aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden shadow-inner">
             {/* Replace with High-Res Product Photo */}
             <div className="w-full h-full flex items-center justify-center text-zinc-400">
                [Hero Garment Showcase]
             </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid Placeholder - Will be updated with dynamic grid component */}
      <section id="portfolio" className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-zinc-950 mb-12">Hasil Produksi Terpilih</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-square bg-zinc-100 rounded-lg shadow-sm"></div>
            <div className="aspect-square bg-zinc-100 rounded-lg shadow-sm"></div>
            <div className="aspect-square bg-zinc-100 rounded-lg shadow-sm"></div>
        </div>
      </section>
    </main>
  )
}
