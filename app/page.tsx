import { Navbar } from "@/components/Navbar"
import { PortfolioGrid } from "@/components/PortfolioGrid"
import { OrderForm } from "@/components/OrderForm"

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
          
          <div className="aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center border border-zinc-200">
             <div className="text-center p-8">
               <span className="text-sm font-semibold text-zinc-800 block mb-1">Garansi Jahitan & Kualitas</span>
               <p className="text-xs text-zinc-500">Termin DP 50% Aman · QC Foto Sebelum Kirim</p>
             </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid Section (Dynamic from Supabase) */}
      <section id="portfolio" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2 block">Galeri Hasil Produksi</span>
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-950">Portofolio Pekerjaan</h2>
          </div>
        </div>
        <PortfolioGrid />
      </section>

      {/* Timeline / Milestone Section */}
      <section id="timeline" className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2 block">Transparansi Penuh</span>
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-950">Alur Produksi & Keamanan Pembayaran</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
              <span className="text-xs font-mono text-zinc-400 block mb-3">01</span>
              <h4 className="font-bold text-zinc-950 mb-2">Konsultasi & DP 50%</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">Deal spesifikasi pesanan, lalu bayar DP 50% untuk pembelian bahan baku resmi.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
              <span className="text-xs font-mono text-zinc-400 block mb-3">02</span>
              <h4 className="font-bold text-zinc-950 mb-2">Produksi & Progres</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">Proses jahit, bordir, dan finishing dikerjakan dengan update foto fisik berkala.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
              <span className="text-xs font-mono text-zinc-400 block mb-3">03</span>
              <h4 className="font-bold text-zinc-950 mb-2">QC & Pelunasan</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">Foto & video QC hasil jadi dikirim. Klien melunasi sisa 50% sebelum barang dikirim.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
              <span className="text-xs font-mono text-zinc-400 block mb-3">04</span>
              <h4 className="font-bold text-zinc-950 mb-2">Pengiriman Aman</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">Barang dikemas rapi dan dikirim via ekspedisi terpercaya langsung ke lokasi Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2 block">Pesan Sekarang</span>
          <h2 className="text-3xl font-bold tracking-tighter text-zinc-950 mb-4">Kalkulator & Form Order Custom</h2>
          <p className="text-sm text-zinc-600">Minimum pemesanan 12 pcs. Data akan otomatis terhubung ke WhatsApp WhatsApp Business kami.</p>
        </div>
        <OrderForm />
      </section>

      {/* Footer */}
      <footer className="bg-zinc-955 bg-zinc-950 text-white py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white text-zinc-950 flex items-center justify-center font-bold tracking-wider text-xs">
              KB
            </div>
            <span className="font-semibold text-sm tracking-tight">KONVEKSI B2B KORPORAT</span>
          </div>
          <p className="text-xs text-zinc-400">© 2026 Konveksi B2B. Semua Hak Dilindungi. Aman, Transparan, Profesional.</p>
        </div>
      </footer>
    </main>
  )
}
