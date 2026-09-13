"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ITEMS = [
  { label: "Kapasitas Produksi", value: "50,000+ Pcs / Bulan", desc: "Didukung 45+ penjahit profesional & mesin otomatis." },
  { label: "Ketepatan Waktu", value: "99.4% On-Time", desc: "Garansi penalti jika molor dari deadline." },
  { label: "Standar QC", value: "Triple Inspection", desc: "Pengecekan benang, ukuran, dan packing ketat." }
]

export function MetricsAccordion() {
  const [active, setActive] = useState(0)

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {ITEMS.map((item, idx) => (
        <motion.div
          key={idx}
          onClick={() => setActive(idx)}
          className={`cursor-pointer p-6 rounded-2xl border transition-all ${
            active === idx ? 'bg-emerald-950 text-white border-emerald-950 shadow-xl' : 'bg-white text-emerald-950 border-emerald-900/10 hover:border-emerald-700/40'
          }`}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className={`text-xs font-mono uppercase tracking-widest block mb-2 ${active === idx ? 'text-emerald-300' : 'text-emerald-700/70'}`}>{item.label}</span>
          <h4 className="text-2xl font-bold tracking-tight mb-2">{item.value}</h4>
          <p className={`text-sm ${active === idx ? 'text-emerald-100/80' : 'text-emerald-950/60'}`}>{item.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}