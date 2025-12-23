"use client"

import Image from "next/image"
import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/Card"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import type { Variants } from "framer-motion"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

export default function Projects() {
  return (
    <section className="py-20 px-4 md:px-10 bg-black" id="projects">
      <h2 className="relative text-4xl md:text-5xl font-bold text-white text-center mb-20 group">
        Projects
        <span className="block h-1 w-24 mx-auto mt-2 bg-purple-500 transition-all duration-500 group-hover:w-36"></span>
      </h2>

      <div className="flex flex-col gap-20 max-w-6xl mx-auto">

        {/* SkillLens — NEW */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="bg-[#111111] border border-purple-700/30 rounded-2xl shadow-xl p-6 md:p-10 transition-transform hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)] hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              {/* Preview */}
              <div className="md:w-1/2 w-full flex justify-center md:justify-start">
                <div className="relative w-[90%] max-w-[420px] aspect-[16/10] md:w-[460px] md:h-[300px] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/skilllens.jpg"
                    alt="SkillLens App Screenshot"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 560px"
                    quality={100}    // Force max quality
                    priority         // Load immediately
                    unoptimized={false} // Let Next optimize, but at full quality
                  />
                </div>
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full text-center md:text-left">
                <CardTitle className="text-3xl md:text-4xl mb-4 text-purple-300 font-semibold">
                  SkillLens — AI Skills Gap Analyzer
                </CardTitle>
                <p className="text-base text-gray-300 mb-5 max-w-lg leading-relaxed mx-auto md:mx-0">
                  SkillLens compares a resume with a job description to surface matched and missing skills, and
                  generates a focused learning plan with resource links. Built with Next.js, TypeScript, Tailwind,
                  and Groq for fast, structured AI responses. Smooth micro-interactions via Framer Motion.
                </p>

                <div className="flex justify-center md:justify-start flex-wrap gap-3 mb-6">
                  {["Next.js", "TypeScript", "Tailwind", "Groq", "Framer Motion"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-900/30 text-purple-200 font-medium text-xs px-3 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <CardFooter className="px-0 pt-0 flex justify-center md:justify-start">
                  <a
                    href="https://github.com/amanlotey/SkillLens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition"
                  >
                    Source Code <FaGithub className="text-lg" />
                  </a>
                </CardFooter>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* MindVault */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="bg-[#111111] border border-purple-700/30 rounded-2xl shadow-xl p-6 md:p-10 transition-transform hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)] hover:scale-[1.02]">
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
              <div className="md:w-1/2 w-full text-center md:text-left">
                <CardTitle className="text-3xl md:text-4xl mb-4 text-purple-300 font-semibold">MindVault</CardTitle>
                <p className="text-base text-gray-300 mb-5 max-w-lg leading-relaxed mx-auto md:mx-0">
                  MindVault is a secure digital diary application built with the MERN stack, enabling users to privately document thoughts, feelings, and daily experiences. It features robust user authentication, encrypted entry storage, and a responsive interface for journaling.
                </p>

                <div className="flex justify-center md:justify-start flex-wrap gap-3 mb-6">
                  {["React", "Express", "MongoDB", "Tailwind", "Bootstrap"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-900/30 text-purple-200 font-medium text-xs px-3 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <CardFooter className="px-0 pt-0 flex justify-center md:justify-start">
                  <a
                    href="https://github.com/amanlotey/MindVault"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition"
                  >
                    Source Code <FaGithub className="text-lg" />
                  </a>
                </CardFooter>
              </div>

              <div className="md:w-1/2 w-full flex justify-center md:justify-end">
                <div className="relative w-[90%] max-w-[380px] aspect-[16/10] md:w-[440px] md:h-[280px] shadow-2xl rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
                  <Image
                    src="/images/notes_generator.jpg"
                    alt="MindVault App Screenshot"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* MovieRadar */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="bg-[#111111] border border-purple-700/30 rounded-2xl shadow-xl p-6 md:p-10 transition-transform hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)] hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <div className="md:w-1/2 w-full flex justify-center md:justify-start relative h-[400px]">
                <div className="relative w-[200px] h-[370px] sm:w-[180px] sm:h-[340px] md:w-[180px] md:h-[360px]">
                  <Image
                    src="/images/m_1.png"
                    alt="MovieRadar App UI 1"
                    fill
                    className="object-cover rounded-2xl shadow-xl transform rotate-[-10deg]"
                  />
                </div>
                <div className="absolute top-6 left-20 w-[200px] h-[370px] sm:w-[180px] sm:h-[340px] md:w-[180px] md:h-[360px]">
                  <Image
                    src="/images/m_2.png"
                    alt="MovieRadar App UI 2"
                    fill
                    className="object-cover rounded-2xl shadow-xl transform rotate-[12deg]"
                  />
                </div>
              </div>

              <div className="md:w-1/2 w-full text-center md:text-left">
                <CardTitle className="text-3xl md:text-4xl mb-4 text-purple-300 font-semibold">MovieRadar</CardTitle>
                <p className="text-base text-gray-300 mb-5 max-w-lg leading-relaxed mx-auto md:mx-0">
                  MovieRadar is a mobile-first film discovery app built with React Native, Expo, and Appwrite. It allows users to browse trending movies, explore by genres, and view detailed film information in real-time. Appwrite powers secure authentication, while Tailwind ensures an optimized UI.
                </p>    

                <div className="flex justify-center md:justify-start flex-wrap gap-3 mb-6">
                  {["React Native", "Appwrite", "Tailwind", "Expo"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-900/30 text-purple-200 font-medium text-xs px-3 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <CardFooter className="px-0 pt-0 flex justify-center md:justify-start">
                  <a
                    href="https://github.com/amanlotey/MovieRadar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition"
                  >
                    Source Code <FaGithub className="text-lg" />
                  </a>
                </CardFooter>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
