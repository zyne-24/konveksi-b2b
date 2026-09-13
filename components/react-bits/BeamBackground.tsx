"use client"

import React from 'react'
import { motion } from 'framer-motion'

export function BeamBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Top Left: Deep Forest Green Glow */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] rounded-full bg-emerald-600/15 blur-[130px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      />
      
      {/* Bottom Right: Warm Sage & Olive Mix */}
      <motion.div
        className="absolute bottom-0 right-0 w-[900px] h-[900px] rounded-full bg-lime-600/10 blur-[150px]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 2.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Center Accent: Soft Earthy Warmth */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[120px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
