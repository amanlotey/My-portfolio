"use client";

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiRedux,
  SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const RadarChart = dynamic(() => import("@/components/RadarChart"), {
  ssr: false,
});

const techStack = [
  { name: "React", icon: <FaReact />, color: "text-blue-400", experience: "4+ years" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white", experience: "3 years" },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-500", experience: "3 years" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", experience: "3+ years" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600", experience: "2.5 years" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400", experience: "4+ years" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400", experience: "3 years" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", experience: "4+ years" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500", experience: "4+ years" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500", experience: "2+ years" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600", experience: "3+ years" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-800", experience: "2 years" },
  { name: "MySQL", icon: <SiMysql />, color: "text-sky-500", experience: "1.5 years" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500", experience: "4+ years" },
  { name: "GitHub", icon: <FaGithub />, color: "text-gray-300", experience: "4+ years" },
  { name: "Databases", icon: <FaDatabase />, color: "text-cyan-400", experience: "3+ years" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14">
        {/* Left Side */}
        <div className="lg:w-1/2">
          <h2 className="relative text-4xl md:text-5xl font-bold text-white text-center mb-20 group">
            About Me
            <span className="block h-1 w-24 mx-auto mt-2 bg-purple-500 transition-all duration-500 group-hover:w-36"></span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m a developer who thrives on turning abstract ideas into intuitive
            digital experiences. For me, writing code isn’t just about syntax — it’s
            about designing smooth flows, solving unseen problems, and leaving a touch
            of delight in every interface.
            <br /><br />
            I’ve spent the past few years immersed in modern web and mobile
            technologies, always exploring the edges of what's possible. Whether
            building something from scratch or refining something already good, I bring
            a blend of precision, curiosity, and creative instinct to the process.
          </p>
        </div>

        {/* Right Side - Tech Stack */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:w-1/2 grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              className="w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-300 transform hover:scale-110 rounded-xl flip-card group"
              onMouseEnter={(e) => {
                const iconEl = e.currentTarget.querySelector(".icon");
                if (iconEl instanceof Element) {
                  const color = getComputedStyle(iconEl).color;
                  e.currentTarget.style.boxShadow = `0 0 20px 4px ${color}`;
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="flip-inner bg-[#0f0f0f] text-white rounded-xl h-full w-full">
                {/* Front */}
                <div className="flip-front flex flex-col items-center justify-center h-full">
                  <div className={`text-3xl mb-2 icon ${tech.color}`}>
                    {tech.icon}
                  </div>
                  <p className="text-sm font-semibold">{tech.name}</p>
                </div>
                {/* Back */}
                <div className="flip-back px-2 text-xs text-center flex flex-col justify-center items-center h-full">
                  <p className="font-medium">{tech.experience}</p>
                  <p className="italic text-gray-400 mt-1">Hands-on Experience</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Radar Chart */}
      <section className="py-20 px-4 md:px-10 bg-black text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          🧠 Tech Radar
        </h2>
        <div className="max-w-4xl mx-auto">
          <RadarChart />
        </div>
      </section>
    </section>
  );
};

export default About;
