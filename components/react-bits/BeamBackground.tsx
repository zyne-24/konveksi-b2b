"use client"

import React from 'react'
import { motion } from 'framer-motion'

export function BeamBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-zinc-900/5 blur-[200px]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-[600px] h-[600px] rounded-full bg-emerald-600/5 blur-[150px]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
      />
    </div>
  )
}