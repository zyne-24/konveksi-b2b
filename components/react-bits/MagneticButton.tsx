"use client"

import React from 'react'
import { motion } from 'framer-motion'

export function MagneticButton({ children, className = "", href, onClick }: { 
  children: React.ReactNode, 
  className?: string,
  href?: string,
  onClick?: () => void
}) {
  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative inline-flex items-center justify-center overflow-hidden bg-zinc-950 text-white font-medium px-8 py-4 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all ${className}`}
      >
        <span className="relative z-10">{children}</span>
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-flex items-center justify-center overflow-hidden bg-zinc-950 text-white font-medium px-8 py-4 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
