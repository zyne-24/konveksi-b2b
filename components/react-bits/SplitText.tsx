"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
}

export function SplitText({ text, className = "", delay = 0.04 }: SplitTextProps) {
  const words = text.split(" ")

  return (
    <div className={`inline-block overflow-hidden flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-flex overflow-hidden mr-[0.25em]">
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.5,
                delay: delay * (i * 3 + j),
                ease: [0.33, 1, 0.68, 1]
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  )
}
