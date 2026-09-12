"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=2000",
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000",
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000"
]

export function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-zinc-200">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={CAROUSEL_IMAGES[index]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover"
          alt="Konveksi Showcase"
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {CAROUSEL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-white w-6' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  )
}
