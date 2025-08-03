'use client'
import { useEffect, useRef } from 'react'

export default function MagneticCursor() {
  const innerRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const inner = innerRef.current
    const outer = outerRef.current

    let mouseX = 0, mouseY = 0
    let currentX = 0, currentY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (inner) {
        inner.style.left = `${mouseX}px`
        inner.style.top = `${mouseY}px`
      }
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15
      currentY += (mouseY - currentY) * 0.15

      if (outer) {
        outer.style.left = `${currentX}px`
        outer.style.top = `${currentY}px`
      }

      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div
        ref={outerRef}
        className="pointer-events-none fixed z-[9999] w-16 h-16 rounded-full border-2 opacity-70 -translate-x-1/2 -translate-y-1/2"
        style={{ borderColor: '#E8EDDF' }}
      />
      <div
        ref={innerRef}
        className="pointer-events-none fixed z-[9999] w-4 h-4 rounded-full  -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: '#E8EDDF' }}
      />
    </>
  )
}
