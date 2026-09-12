"use client"

import React, { useRef } from 'react'
import { motion, useMotionValue, useMotionTemplate, useTransform } from 'framer-motion'

export function MagneticButton({ children, className = "", href, onClick }: { 
  children: React.ReactNode, 
  className?: string,
  href?: string,
  onClick?: () => void
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 0, 100], [15, 0, -15])
  const rotateY = useTransform(x, [-100, 0, 100], [-15, 0, 15])

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLButtonElement>) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    x.set(clientX - left - width / 2)
    y.set(clientY - top - height / 2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Component = href ? 'a' : 'button'

  return (
    <motion[Component]
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y, rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`relative overflow-hidden bg-zinc-950 text-white font-medium px-8 py-4 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100"
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion[Component]>
  )
}