import { SplitText } from "@/components/react-bits/SplitText"
import { SpotlightCard } from "@/components/react-bits/SpotlightCard"
import { BeamBackground } from "@/components/react-bits/BeamBackground"
import { MetricsAccordion } from "@/components/react-bits/MetricsAccordion"
import { FadeInSection } from "@/components/react-bits/FadeInSection"
import { Navbar } from "@/components/Navbar"
import { PortfolioGrid } from "@/components/PortfolioGrid"
import { OrderForm } from "@/components/OrderForm"
import { HeroCarousel } from "@/components/HeroCarousel"
import { MaterialDisplay } from "@/components/MaterialDisplay"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-emerald-50/50 relative overflow-hidden text-emerald-950">
      <BeamBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-32 border-b border-emerald-900/10 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-800 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Minimum Order 12 Pcs · Industrial B2B Solution
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-emerald-950 mb-6 leading-[1.1]">
              <SplitText text="Produksi Seragam Premium untuk Kebutuhan Korporat Anda" />
            </h1>
            
            <p className="text-lg text-emerald-900/60 mb-10 max-w-[500px] leading-relaxed">
              Spesialisasi almamater, jas, rompi, dan seragam kantor dengan kualitas jahitan presisi, material terbaik, dan transparansi penuh.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#order" className="bg-emerald-950 hover:bg-emerald-900 text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-emerald-950/20 transition-all inline-block">
                Mulai Pesanan Custom
              </a>
              <a href="#portfolio" className="border border-emerald-900/20 hover:border-emerald-700/40 bg-white/80 backdrop-blur-sm text-emerald-950 font-medium px-6 py-4 rounded-xl transition-all inline-block shadow-sm">
                Lihat Portofolio
              </a>
            </div>
          </div>
          
          <SpotlightCard className="p-2 bg-white/60 backdrop-blur-md shadow-xl border-emerald-900/10">
            <HeroCarousel />
          </SpotlightCard>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 max-w-7xl mx-auto px-6 border-b border-emerald-900/10">
        <FadeInSection>
          <MetricsAccordion />
        </FadeInSection>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="max-w-xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2 block">Galeri Karya</span>
            <h2 className="text-3xl font-bold tracking-tighter text-emerald-950">Hasil Produksi Terpilih</h2>
          </div>
        </FadeInSection>
        <PortfolioGrid />
      </section>

      {/* Material Specs */}
      <section id="materials" className="py-24 bg-white/80 border-y border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-6">
            <FadeInSection>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2 block">Pilihan Kain Berkualitas Tinggi</span>
              <h2 className="text-3xl font-bold tracking-tighter text-emerald-950 mb-12">Spesifikasi Material Terperinci</h2>
            </FadeInSection>
            <MaterialDisplay />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="max-w-xl mb-16">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-700 font-semibold mb-2 block">Pertanyaan Umum</span>
            <h2 className="text-3xl font-bold tracking-tighter text-emerald-950">Frequently Asked Questions</h2>
          </div>
        </FadeInSection>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <FadeInSection delay={0.1}>
              <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm">
                <h3 className="font-bold text-base text-emerald-950 mb-2">Berapa minimum pemesanan (MOQ)?</h3>
                <p className="text-sm text-emerald-900/60 leading-relaxed">Minimum pemesanan adalah 12 pcs per desain/kategori, bisa dikombinasikan dalam berbagai pilihan ukuran (S, M, L, XL, XXL, XXXL).</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm">
                <h3 className="font-bold text-base text-emerald-950 mb-2">Bagaimana sistem pembayarannya?</h3>
                <p className="text-sm text-emerald-900/60 leading-relaxed">Kami menerapkan termin aman: Down Payment (DP) 50% di awal setelah deal quotation, dan pelunasan 50% sisa setelah QC & foto fisik barang jadi dikirim.</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm">
                <h3 className="font-bold text-base text-emerald-950 mb-2">Berapa lama estimasi waktu produksi?</h3>
                <p className="text-sm text-emerald-900/60 leading-relaxed">Estimasi pengerjaan berkisar antara 14 sampai 21 hari kerja tergantung jumlah pesanan dan antrean produksi.</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm">
                <h3 className="font-bold text-base text-emerald-950 mb-2">Apakah bisa membuat sampel fisik dulu?</h3>
                <p className="text-sm text-emerald-900/60 leading-relaxed">Bisa. Untuk pesanan skala besar (di atas 100 pcs), kami menyediakan pembuatan sampel terlebih dahulu sebelum produksi massal.</p>
              </div>
            </FadeInSection>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="py-24 bg-white/80 border-t border-emerald-900/10">
        <FadeInSection>
          <OrderForm />
        </FadeInSection>
      </section>
    </main>
  )
}