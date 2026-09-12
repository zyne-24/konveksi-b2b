import { SplitText } from "@/components/react-bits/SplitText"
import { Navbar } from "@/components/Navbar"
import { PortfolioGrid } from "@/components/PortfolioGrid"
import { OrderForm } from "@/components/OrderForm"
import { HeroCarousel } from "@/components/HeroCarousel"
import { MaterialDisplay } from "@/components/MaterialDisplay"
import { FadeInSection } from "@/components/react-bits/FadeInSection"

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
            <a href="#order" className="bg-zinc-950 text-white px-8 py-4 rounded-lg font-medium text-sm hover:bg-zinc-900 transition-all inline-block">
              Mulai Pesanan Custom
            </a>
          </div>
          
          <HeroCarousel />
        </div>
      </section>
      
      <section id="portfolio" className="py-24 max-w-7xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold tracking-tighter text-zinc-950 mb-12">Hasil Produksi Terpilih</h2>
        </FadeInSection>
        <PortfolioGrid />
      </section>

      <section id="materials" className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
            <FadeInSection>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2 block">Pilihan Kain Berkualitas Tinggi</span>
              <h2 className="text-3xl font-bold tracking-tighter text-zinc-950 mb-12">Spesifikasi Material Terperinci</h2>
            </FadeInSection>
            <MaterialDisplay />
        </div>
      </section>

      <section id="faq" className="py-24 max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="max-w-xl mb-16">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2 block">Pertanyaan Umum</span>
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-950">Frequently Asked Questions</h2>
          </div>
        </FadeInSection>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <FadeInSection delay={0.1}>
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
                <h3 className="font-bold text-base text-zinc-950 mb-2">Berapa minimum pemesanan (MOQ)?</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">Minimum pemesanan adalah 12 pcs per desain/kategori, bisa dikombinasikan dalam berbagai pilihan ukuran (S, M, L, XL, XXL, XXXL).</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
                <h3 className="font-bold text-base text-zinc-950 mb-2">Bagaimana sistem pembayarannya?</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">Kami menerapkan termin aman: Down Payment (DP) 50% di awal setelah deal quotation, dan pelunasan 50% sisa setelah QC & foto fisik barang jadi dikirim.</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
                <h3 className="font-bold text-base text-zinc-950 mb-2">Berapa lama estimasi waktu produksi?</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">Estimasi pengerjaan berkisar antara 14 sampai 21 hari kerja tergantung jumlah pesanan dan antrean produksi.</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
                <h3 className="font-bold text-base text-zinc-950 mb-2">Apakah bisa membuat sampel fisik dulu?</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">Bisa. Untuk pesanan skala besar (di atas 100 pcs), kami menyediakan pembuatan sampel terlebih dahulu sebelum produksi massal.</p>
              </div>
            </FadeInSection>
        </div>
      </section>

      <section id="order" className="py-24 bg-zinc-50 border-t border-zinc-200">
        <FadeInSection>
          <OrderForm />
        </FadeInSection>
      </section>
    </main>
  )
}
