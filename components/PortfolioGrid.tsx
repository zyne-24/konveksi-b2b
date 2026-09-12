"use client"

import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type PortfolioItem = {
  id: string
  title: string
  category: string
  image_url: string
  description: string
}

export function PortfolioGrid() {
  const [items, setItems] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPortfolios() {
      const { data, error } = await supabase.from('portfolios').select('*').order('created_at', { ascending: false })
      if (!error && data) {
        setItems(data)
      }
      setLoading(false)
    }
    fetchPortfolios()
  }, [])

  if (loading) {
    return <div className="text-center py-12 text-zinc-500 text-sm">Memuat portofolio...</div>
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-16 bg-zinc-50 rounded-2xl border border-zinc-200">
        <p className="text-zinc-600 font-medium mb-2">Belum ada portofolio yang diunggah.</p>
        <p className="text-xs text-zinc-400">Silakan login ke halaman admin untuk mengunggah foto hasil produksi.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item) => (
        <div key={item.id} className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
          <div className="aspect-[4/3] bg-zinc-100 overflow-hidden relative">
            <img 
              src={item.image_url} 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-zinc-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {item.category}
            </span>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg text-zinc-950 mb-2">{item.title}</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
