"use client"

import React from 'react'
import { motion } from 'framer-motion'

export function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {children}
    </motion.div>
  )
}
