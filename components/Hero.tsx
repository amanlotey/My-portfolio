import React from 'react'

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-black via-[#0b0b1f] to-black text-white"
    >
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Hi, I'm Amandeep Singh
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-8">
        I'm a software developer who builds responsive web and mobile apps using modern technologies like React, React Native, Node.js, and Firebase.
      </p>
      <a
        href="#projects"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium transition hover:opacity-90"
      >
        View My Work
      </a>
    </section>
  )
}

export default Hero
