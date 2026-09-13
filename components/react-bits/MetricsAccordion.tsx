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
            active === idx ? 'bg-forest text-cream border-forest shadow-xl' : 'bg-cream text-forest border-teal/20 hover:border-teal/50'
          }`}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className={`text-xs font-mono uppercase tracking-widest block mb-2 ${active === idx ? 'text-mint' : 'text-teal'}`}>{item.label}</span>
          <h4 className="text-2xl font-bold tracking-tight mb-2">{item.value}</h4>
          <p className={`text-sm ${active === idx ? 'text-cream/80' : 'text-forest/70'}`}>{item.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}