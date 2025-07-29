import React from 'react'
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiRedux,
} from 'react-icons/si'

const icons = [
  <FaReact title="React" key="react" />,
  <SiNextdotjs title="Next.js" key="next" />,
  <SiRedux title="Redux" key="redux" />,
  <FaNodeJs title="Node.js" key="node" />,
  <SiTypescript title="TypeScript" key="ts" />,
  <SiJavascript title="JavaScript" key="js" />,
  <SiTailwindcss title="Tailwind CSS" key="tw" />,
  <FaHtml5 title="HTML5" key="html" />,
  <FaCss3Alt title="CSS3" key="css" />,
  <SiFirebase title="Firebase" key="firebase" />,
  <SiMongodb title="MongoDB" key="mongo" />,
  <SiPostgresql title="PostgreSQL" key="psql" />,
  <FaGitAlt title="Git" key="git" />,
  <FaGithub title="GitHub" key="gh" />,
  <FaDatabase title="DB" key="db" />,
]

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 text-center bg-black text-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm a software developer with hands-on experience building web and mobile applications using modern technologies like React, React Native, Node.js, Firebase, and Tailwind CSS. I enjoy turning ideas into real, user-friendly solutions — whether it’s a collaborative task manager, a budget tracking app, or helping a team debug and ship faster.
          <br /><br />
          I’m always looking to improve, learn new tools, and contribute to projects that make an impact. Whether I'm working solo or with a team, I focus on clean code, reliable performance, and a smooth user experience.
        </p>
      </div>

      <div className="relative w-[300px] h-[300px] mt-16">
        <div className="absolute inset-0 rounded-full animate-spinCircle">
          {icons.map((Icon, index) => {
            const angle = (360 / icons.length) * index
            const radius = 120
            const x = radius * Math.cos((angle * Math.PI) / 180)
            const y = radius * Math.sin((angle * Math.PI) / 180)
            return (
              <div
                key={index}
                className="absolute text-3xl text-purple-400 transition hover:scale-110"
                style={{
                  top: `calc(50% + ${y}px - 1rem)`,
                  left: `calc(50% + ${x}px - 1rem)`,
                }}
              >
                {Icon}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
