'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null)

  const smoothScrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.pageYOffset
  window.scrollTo({
    top,
    behavior: 'smooth',
  })
}


  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: 0x0,
          cloudColor: 0x5d3aa9,
          sunColor: 0x0,
          sunGlareColor: 0xff6633,
          sunlightColor: 0xff9933,
          speed: 1.4,
        })
      )
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <section
      id="hero"
      ref={vantaRef}
      className="relative min-h-screen text-white overflow-hidden px-6 flex flex-col justify-center items-center text-center"
    >
      <div className="z-10 flex flex-col items-start gap-6 max-w-3xl">
        <div className="flex items-center gap-4">
          <span className="h-16 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded"></span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Amandeep Singh
            </span>
          </h1>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          I’m a passionate software developer who loves building modern, responsive web and mobile apps using tools like React, React Native, Node.js, and Firebase.
        </p>

        <a
          onClick={() => smoothScrollTo('projects')}
          className="cursor-pointer mt-6 self-center   inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
        >
          View My Work
        </a>

              </div>

      <div className="mt-12 w-full max-w-xs md:max-w-md z-10">
        <DotLottieReact
          src="https://lottie.host/deb4f684-c3d2-4890-aeca-2fe13a9fcd0f/aEL1Cxv18m.lottie"
          autoplay
          loop
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-[5]" />

    </section>
  )
}

export default Hero
