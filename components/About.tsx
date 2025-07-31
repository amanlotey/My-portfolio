'use client'

import React from 'react'
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDatabase,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiFirebase, SiTypescript, SiJavascript,
  SiMongodb, SiPostgresql, SiNextdotjs, SiRedux, SiMysql,
} from 'react-icons/si'

const techStack = [
  { name: 'React', icon: <FaReact />, color: 'text-blue-400', years: '3+ years' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white', years: '2 years' },
  { name: 'Redux', icon: <SiRedux />, color: 'text-purple-500', years: '2 years' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500', years: '3 years' },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600', years: '2+ years' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400', years: '4 years' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-400', years: '2+ years' },
  { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500', years: '4 years' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500', years: '4 years' },
  { name: 'Firebase', icon: <SiFirebase />, color: 'text-yellow-500', years: '2 years' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600', years: '2 years' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-800', years: '1 year' },
  { name: 'MySQL', icon: <SiMysql />, color: 'text-sky-500', years: '1+ year' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500', years: '3+ years' },
  { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-300', years: '3+ years' },
  { name: 'Databases', icon: <FaDatabase />, color: 'text-cyan-400', years: '3+ years' },
]

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14">
        {/* Left Side */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m a developer who thrives on turning abstract ideas into intuitive digital experiences. For me, writing code isn’t just about syntax — it’s about designing smooth flows, solving unseen problems, and leaving a touch of delight in every interface.
              <br /><br />
              I’ve spent the past few years immersed in modern web and mobile technologies, always exploring the edges of what's possible. Whether building something from scratch or refining something already good, I bring a blend of precision, curiosity, and creative instinct to the process. And when I’m not shipping features, you’ll probably find me dissecting UI patterns, optimizing backend flows, or sketching out “what if” ideas just for fun.
            </p>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.6)] rounded-xl flip-card"
            >
              <div className="flip-inner bg-[#0f0f0f] text-white rounded-xl h-full w-full">
                {/* Front */}
                <div className="flip-front flex flex-col items-center justify-center h-full">
                  <div className={`text-3xl mb-2 ${tech.color}`}>{tech.icon}</div>
                  <p className="text-sm font-semibold">{tech.name}</p>
                </div>
                {/* Back */}
                <div className="flip-back px-2 text-xs text-center">
                  <p>{tech.years} experience</p>
                  <p className="italic mt-1">Hands-on with real projects</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
