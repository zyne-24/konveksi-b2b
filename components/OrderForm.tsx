"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export function OrderForm() {
  const [category, setCategory] = useState('Jas Almamater')
  const [qty, setQty] = useState(12)
  const [material, setMaterial] = useState('American Drill')
  const [customMaterial, setCustomMaterial] = useState('')
  const [notes, setNotes] = useState('')
  const [designFile, setDesignFile] = useState<File | null>(null)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (qty < 12) {
      setError('Minimum order adalah 12 pcs sesuai ketentuan konveksi.')
      return
    }
    setError('')

    const selectedMaterial = material === 'Lainnya' ? customMaterial : material
    const fileInfo = designFile ? `\n- File Desain Lampiran: ${designFile.name}` : '\n- File Desain: Tidak ada lampiran'

    const message = `Halo Konveksi B2B, saya ingin memesan konveksi custom dengan rincian berikut:
- Kategori: ${category}
- Jumlah: ${qty} Pcs
- Bahan: ${selectedMaterial}
- Catatan: ${notes || 'Tidak ada catatan'}${fileInfo}
- Info Pembayaran: Siap DP 50% di awal dan pelunasan 50% sebelum pengiriman.`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/6288985461525?text=${encodedMessage}`, '_blank')
  }

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit} 
      className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-bold tracking-tight text-zinc-950 mb-2">Form Kalkulasi & Order Custom</h3>
      <p className="text-sm text-zinc-500 mb-8">Isi spesifikasi pesanan Anda. Data akan langsung terhubung ke WhatsApp WhatsApp Business kami.</p>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
          {error}
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Kategori Produk</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          >
            <option value="Jas Almamater">Jas Almamater</option>
            <option value="Seragam Kantor">Seragam Kantor / PDH</option>
            <option value="Rompi Korporat">Rompi Korporat</option>
            <option value="Jaket / Almet Kampus">Jaket / Almet Kampus</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Jumlah Pesanan (Pcs)</label>
          <input 
            type="number" 
            min="1" 
            value={qty} 
            onChange={(e) => setQty(Number(e.target.value))}
            className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            required
          />
          <span className="text-xs text-zinc-500 mt-1.5 block">Minimum order: 12 pcs</span>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Pilihan Bahan</label>
          <select 
            value={material} 
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          >
            <option value="American Drill">American Drill (Standard Korporat)</option>
            <option value="Japan Drill">Japan Drill (Premium Tebal)</option>
            <option value="Taslan / Waterproof">Taslan (Anti Air / Outdoor)</option>
            <option value="Fleece Cotton">Fleece Cotton (Jaket / Hoodie)</option>
            <option value="Lainnya">Bahan Lainnya (Input Manual)</option>
          </select>
        </div>

        {material === 'Lainnya' && (
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">Sebutkan Nama Bahan Lainnya</label>
            <input 
              type="text" 
              value={customMaterial} 
              onChange={(e) => setCustomMaterial(e.target.value)}
              placeholder="Contoh: Kain Katun Toyobo"
              className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Upload Desain / Mockup Logo (Opsional)</label>
          <input 
            type="file" 
            onChange={(e) => setDesignFile(e.target.files ? e.target.files[0] : null)}
            className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2.5 text-sm text-zinc-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-zinc-900 file:text-white hover:file:bg-zinc-800"
          />
          <span className="text-xs text-zinc-500 mt-1.5 block">Format: .ai, .cdr, .pdf, .png, .jpg (Maks. 10MB)</span>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Catatan Pesanan / Detail Ukuran</label>
          <textarea 
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Sebutkan detail tambahan seperti warna kain, posisi bordir logo, atau deadline."
            className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>

        <div className="pt-4 border-t border-zinc-200">
          <div className="bg-zinc-50 p-4 rounded-lg mb-6 text-xs text-zinc-600 space-y-1">
            <p className="font-semibold text-zinc-900">Ketentuan Pembayaran (Aman & Transparan):</p>
            <p>1. Down Payment (DP) 50% dibayar setelah deal quotation untuk pembelian bahan.</p>
            <p>2. Pelunasan 50% sisa dilakukan setelah QC & foto fisik barang jadi dikirim sebelum pengiriman.</p>
          </div>

          <button 
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-4 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
          >
            Kirim Order via WhatsApp
          </button>
        </div>
      </div>
    </motion.form>
  )
}
