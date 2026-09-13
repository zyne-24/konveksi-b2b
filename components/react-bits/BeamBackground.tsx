"use client"

import React from 'react'
import { motion } from 'framer-motion'

export function BeamBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Mint Glow */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] rounded-full bg-mint/15 blur-[140px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Teal Glow */}
      <motion.div
        className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full bg-teal/15 blur-[160px]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 2.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  )
}