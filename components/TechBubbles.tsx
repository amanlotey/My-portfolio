"use client"

import Image from "next/image"
import { Card, CardContent, CardTitle } from "@/components/ui/Card"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
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
        {/* Notes App */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="bg-[#111111] border border-purple-700/30 rounded-2xl shadow-xl p-6 md:p-10 transition-transform hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)] hover:scale-[1.02]">
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
              <div className="md:w-1/2 w-full text-center md:text-left">
                <CardTitle className="text-3xl md:text-4xl mb-4 text-purple-300 font-semibold">📝 Notes App</CardTitle>
                <p className="text-base text-gray-300 mb-5 max-w-lg leading-relaxed">
                  A personal notes app designed for clarity and ease. Features a seamless interface for writing and managing thoughts.
                </p>
                <div className="flex justify-center md:justify-start flex-wrap gap-3">
                  {["React", "Express", "MongoDB", "Tailwind", "Bootstrap"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-900/30 text-purple-200 font-medium text-xs px-3 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 w-full flex justify-center md:justify-end">
                <div className="relative w-[320px] h-[200px] md:w-[440px] md:h-[280px] shadow-2xl rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
                  <Image
                    src="/images/notes_generator.png"
                    alt="Notes App Screenshot"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Movies App */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="bg-[#111111] border border-purple-700/30 rounded-2xl shadow-xl p-6 md:p-10 transition-transform hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)] hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <div className="md:w-1/2 w-full flex justify-center md:justify-start">
                <div className="relative h-[270px] w-[340px] md:h-[330px] md:w-[400px]">
                  <div className="absolute top-0 left-0 rotate-[-10deg] z-10 shadow-2xl transition-transform duration-300 hover:scale-105">
                    <Image
                      src="/images/m_1.png"
                      alt="Movies App UI 1"
                      width={180}
                      height={360}
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="absolute top-6 left-10 rotate-[12deg] z-20 shadow-2xl transition-transform duration-300 hover:scale-105">
                    <Image
                      src="/images/m_2.png"
                      alt="Movies App UI 2"
                      width={180}
                      height={360}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full text-center md:text-left">
                <CardTitle className="text-3xl md:text-4xl mb-4 text-purple-300 font-semibold">🎬 Movies App</CardTitle>
                <p className="text-base text-gray-300 mb-5 max-w-lg leading-relaxed">
                  A clean and dynamic mobile interface for exploring trending films and keeping up with cinematic gems on the go.
                </p>
                <div className="flex justify-center md:justify-start flex-wrap gap-3">
                  {["React Native", "Appwrite", "Tailwind", "Expo"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-900/30 text-purple-200 font-medium text-xs px-3 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
