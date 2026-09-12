"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export function OrderForm() {
  const [category, setCategory] = useState('Jas Almamater')
  const [material, setMaterial] = useState('American Drill')
  const [customMaterial, setCustomMaterial] = useState('')
  const [notes, setNotes] = useState('')
  const [designFile, setDesignFile] = useState<File | null>(null)
  
  // Size Breakdown State
  const [sizes, setSizes] = useState({
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
    XXXL: 0
  })
  const [error, setError] = useState('')

  const totalQty = Object.values(sizes).reduce((a, b) => a + b, 0)

  const handleSizeChange = (size: keyof typeof sizes, val: number) => {
    setSizes(prev => ({ ...prev, [size]: Math.max(0, val) }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (totalQty < 12) {
      setError(`Total pesanan saat ini ${totalQty} pcs. Minimum order adalah 12 pcs.`)
      return
    }
    setError('')

    const selectedMaterial = material === 'Lainnya' ? customMaterial : material
    const fileInfo = designFile ? `\n- File Desain: ${designFile.name}` : '\n- File Desain: Tidak ada lampiran'
    const sizeDetails = `\n- Detail Ukuran:\n  * S: ${sizes.S}\n  * M: ${sizes.M}\n  * L: ${sizes.L}\n  * XL: ${sizes.XL}\n  * XXL: ${sizes.XXL}\n  * XXXL: ${sizes.XXXL}`

    const message = `Halo Konveksi B2B, saya ingin memesan konveksi custom dengan rincian berikut:
- Kategori: ${category}
- Total Jumlah: ${totalQty} Pcs${sizeDetails}
- Bahan: ${selectedMaterial}${fileInfo}
- Catatan: ${notes || 'Tidak ada catatan'}
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
      className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm max-w-2xl mx-auto text-zinc-900"
    >
      <h3 className="text-2xl font-bold tracking-tight text-zinc-950 mb-2">Form Kalkulasi & Order Custom</h3>
      <p className="text-sm text-zinc-500 mb-8">Tentukan jumlah per ukuran. Total otomatis dihitung dan wajib minimal 12 pcs.</p>

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
            className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          >
            <option value="Jas Almamater">Jas Almamater</option>
            <option value="Seragam Kantor">Seragam Kantor / PDH</option>
            <option value="Rompi Korporat">Rompi Korporat</option>
            <option value="Jaket / Almet Kampus">Jaket / Almet Kampus</option>
          </select>
        </div>

        {/* Size breakdown grid */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-zinc-700">Jumlah Pesanan Per Ukuran</label>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${totalQty >= 12 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
              Total: {totalQty} Pcs {totalQty < 12 && '(Kurang ' + (12 - totalQty) + ' pcs)'}
            </span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {(['S', 'M', 'L', 'XL', 'XXL', 'XXXL'] as const).map((sz) => (
              <div key={sz} className="bg-zinc-50 p-3 rounded-xl border border-zinc-200 text-center">
                <span className="text-xs font-bold text-zinc-600 block mb-1">{sz}</span>
                <input 
                  type="number"
                  min="0"
                  value={sizes[sz]}
                  onChange={(e) => handleSizeChange(sz, parseInt(e.target.value) || 0)}
                  className="w-full bg-white border border-zinc-300 rounded-md py-1.5 text-center text-sm font-semibold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Pilihan Bahan</label>
          <select 
            value={material} 
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900"
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
              className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900"
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
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Catatan Pesanan / Detail Ukuran</label>
          <textarea 
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Sebutkan detail tambahan seperti warna kain, posisi bordir logo, atau deadline."
            className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>

        <div className="pt-4 border-t border-zinc-200">
          <div className="bg-zinc-50 p-4 rounded-lg mb-6 text-xs text-zinc-600 space-y-1 border border-zinc-200">
            <p className="font-semibold text-zinc-950">Ketentuan Pembayaran (Aman & Transparan):</p>
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
