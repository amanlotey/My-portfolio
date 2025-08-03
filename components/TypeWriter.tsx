'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: '300',
})

type TypewriterProps = {
  phrases: string[]
  className?: string
  showCursor?: boolean
  typingSpeed?: number
  deletingSpeed?: number
  pause?: number
}

export default function Typewriter({
  phrases,
  className = '',
  showCursor = true,
  typingSpeed = 90,
  deletingSpeed = 40,
  pause = 1000,
}: TypewriterProps) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(phrases[index].substring(0, subIndex))

      if (!deleting && subIndex === phrases[index].length) {
        setTimeout(() => setDeleting(true), pause)
      } else if (deleting && subIndex === 0) {
        setDeleting(false)
        setIndex((prev) => (prev + 1) % phrases.length)
      } else {
        setSubIndex((prev) => prev + (deleting ? -1 : 1))
      }
    }, deleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [subIndex, deleting])

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev)
    }, 500)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <motion.div
      className={`${robotoMono.className} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <span className="inline-block">
        {text}
        {showCursor && (
          <span
            className={`${blink ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          >
            |
          </span>
        )}
      </span>
    </motion.div>
  )
}
