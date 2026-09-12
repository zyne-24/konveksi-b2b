import { SplitText } from "@/components/react-bits/SplitText"
import { SpotlightCard } from "@/components/react-bits/SpotlightCard"
import { Navbar } from "@/components/Navbar"
import { PortfolioGrid } from "@/components/PortfolioGrid"
import { OrderForm } from "@/components/OrderForm"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-24 pb-32 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4 block">Minimum Order 12 Pcs</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-zinc-950 mb-6 leading-[1.1]">
              <SplitText text="Produksi Seragam Premium untuk Kebutuhan Korporat Anda" />
            </h1>
            <p className="text-lg text-zinc-600 mb-10 max-w-[500px] leading-relaxed">
              Spesialisasi almamater, jas, rompi, dan seragam kantor dengan kualitas jahitan presisi, material terbaik, dan transparansi penuh.
            </p>
            <a href="#order" className="bg-zinc-950 text-white px-8 py-4 rounded-lg font-medium text-sm hover:bg-zinc-900 transition-all">
              Mulai Pesanan Custom
            </a>
          </div>
          
          <SpotlightCard className="aspect-[4/3] flex items-center justify-center border border-zinc-200">
             <img src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=2000" alt="Konveksi" className="w-full h-full object-cover"/>
          </SpotlightCard>
        </div>
      </section>
      
      <section id="portfolio" className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-zinc-950 mb-12">Hasil Produksi Terpilih</h2>
        <PortfolioGrid />
      </section>

      <section id="materials" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-950 mb-12">Spesifikasi Material</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {['American Drill', 'Japan Drill', 'Taslan Waterproof'].map(m => (
                    <div key={m} className="bg-white p-6 rounded-2xl border">{m}</div>
                ))}
            </div>
        </div>
      </section>

      <section id="faq" className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-zinc-950 mb-12">FAQ</h2>
        <div className="space-y-4">
            {['Apakah ada min order?', 'Berapa lama pengerjaan?', 'Bisa minta sampel?'].map(q => (
                <div key={q} className="border-b pb-4">{q}</div>
            ))}
        </div>
      </section>

      <section id="order" className="py-24 max-w-7xl mx-auto px-6">
        <OrderForm />
      </section>
    </main>
  )
}
