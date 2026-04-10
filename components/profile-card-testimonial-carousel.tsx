"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  isDouble?: boolean;
  image2?: string;
}

const projects: Project[] = [
  {
    name: "VoiceDesk",
    tagline: "AI-Powered Business Assistant",
    description:
      "A customizable AI voice assistant handling inbound business calls over SIP in real time. Books reservations, checks calendars, and responds based on business-specific instructions configured through RAG pipelines and LLM prompt engineering.",
    imageUrl: "/images/voicedesk.jpg",
    tags: ["Next.js", "TypeScript", "OpenAI Realtime API", "SIP", "WebRTC", "RAG", "Node.js", "Calendar API"],
    githubUrl: "https://github.com/amanlotey/VoiceDesk",
  },
  {
    name: "SkillLens",
    tagline: "AI Skills Gap Analyzer",
    description:
      "Compares a resume with a job description to surface matched and missing skills, then generates a focused learning plan with resource links. Built with Next.js, TypeScript, Tailwind, and Groq for fast, structured AI responses.",
    imageUrl: "/images/skilllens.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Groq", "Framer Motion"],
    githubUrl: "https://github.com/amanlotey/SkillLens",
  },
  {
    name: "MindVault",
    tagline: "Secure Digital Diary",
    description:
      "A secure digital diary application built with the MERN stack, enabling users to privately document thoughts, feelings, and daily experiences. Features robust authentication, encrypted entry storage, and a responsive journaling interface.",
    imageUrl: "/images/notes_generator.jpg",
    tags: ["React", "Express", "MongoDB", "Tailwind", "Bootstrap"],
    githubUrl: "https://github.com/amanlotey/MindVault",
  },
  {
    name: "MovieRadar",
    tagline: "Mobile Film Discovery App",
    description:
      "A mobile-first film discovery app built with React Native, Expo, and Appwrite. Browse trending movies, explore by genres, and view detailed film info in real-time. Appwrite powers secure authentication with a smooth Tailwind UI.",
    imageUrl: "/images/m_1.png",
    image2: "/images/m_2.png",
    isDouble: true,
    tags: ["React Native", "Appwrite", "Tailwind", "Expo"],
    githubUrl: "https://github.com/amanlotey/MovieRadar",
  },
];

export function TestimonialCarousel({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((i) => (i + 1) % projects.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((i) => (i - 1 + projects.length) % projects.length);
  };

  const handleDotClick = (i: number) => {
    setDirection(i > currentIndex ? 1 : -1);
    setCurrentIndex(i);
  };

  const project = projects[currentIndex];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  const counter = `${String(currentIndex + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;

  const ImageContent = () => {
    if (project.isDouble) {
      return (
        <div className="relative w-full h-full flex items-center justify-center p-6">
          <div className="relative w-[130px] h-[280px] z-10">
            <Image
              src={project.imageUrl}
              alt={project.name}
              fill
              className="object-contain rounded-2xl shadow-xl"
              style={{ transform: "rotate(-10deg)" }}
            />
          </div>
          <div className="relative w-[130px] h-[280px] -ml-8 z-20">
            <Image
              src={project.image2 as string}
              alt={project.name + " 2"}
              fill
              className="object-contain rounded-2xl shadow-xl"
              style={{ transform: "rotate(12deg)" }}
            />
          </div>
        </div>
      );
    }
    return (
      <Image
        src={project.imageUrl}
        alt={project.name}
        width={420}
        height={440}
        className="w-full h-full object-contain"
        priority
        draggable={false}
      />
    );
  };

  const MobileImageContent = () => {
    if (project.isDouble) {
      return (
        <div className="relative w-full h-full flex items-center justify-center gap-4 p-4">
          <div className="relative w-[100px] h-[200px]">
            <Image
              src={project.imageUrl}
              alt={project.name}
              fill
              className="object-contain rounded-xl shadow-xl"
              style={{ transform: "rotate(-8deg)" }}
            />
          </div>
          <div className="relative w-[100px] h-[200px]">
            <Image
              src={project.image2 as string}
              alt={project.name + " 2"}
              fill
              className="object-contain rounded-xl shadow-xl"
              style={{ transform: "rotate(8deg)" }}
            />
          </div>
        </div>
      );
    }
    return (
      <Image
        src={project.imageUrl}
        alt={project.name}
        fill
        className="object-contain"
      />
    );
  };

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>

      {/* Desktop */}
      <div className="hidden md:flex relative items-stretch min-h-[440px]">

        {/* Image panel */}
        <div className="w-[420px] flex-shrink-0 rounded-3xl mr-4 overflow-hidden bg-[#0d0d0d] border border-white/[0.07]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.name + "-img"}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] as const }}
              className="w-full h-full mr-5"
            >
              <ImageContent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text panel */}
        <div className="bg-[#0d0d0d] border border-white/[0.07] rounded-3xl p-8 ml-[-1px] z-10 flex-1 flex flex-col justify-between">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.name + "-text"}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] as const }}
              className="flex flex-col h-full gap-5"
            >
              <div>
                <p className="text-[0.65rem] tracking-[0.18em] uppercase text-white/30 mb-2">
                  {counter}
                </p>
                <h2
                  className="font-display text-white leading-none mb-1"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  {project.name}
                </h2>
                <p className="text-sm text-white/40 tracking-wide">
                  {project.tagline}
                </p>
              </div>

              <p className="text-sm text-white/55 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.65rem] tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-white/[0.06] text-white/40 border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-1">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-[0.72rem] font-medium tracking-[0.08em] uppercase hover:opacity-80 transition-all duration-200 hover:scale-[1.02]"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source Code
                </a>
                {project.liveUrl != null && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/40 text-[0.72rem] tracking-[0.08em] uppercase hover:text-white transition-colors group"
                  >
                    Live Demo
                    <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={project.name + "-mobile"}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] as const }}
            className="bg-[#0d0d0d] border border-white/[0.07] rounded-3xl overflow-hidden"
          >
            <div className="w-full aspect-[16/9] bg-[#111] relative overflow-hidden">
              <MobileImageContent />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <div>
                <p className="text-[0.6rem] tracking-[0.16em] uppercase text-white/25 mb-1">
                  {counter}
                </p>
                <h2 className="font-display text-white text-3xl leading-none mb-1">
                  {project.name}
                </h2>
                <p className="text-xs text-white/40">{project.tagline}</p>
              </div>

              <p className="text-sm text-white/50 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.6rem] tracking-wide uppercase px-2 py-0.5 rounded-full bg-white/[0.05] text-white/35 border border-white/[0.07]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-[0.7rem] font-medium tracking-[0.08em] uppercase w-fit hover:opacity-80 transition"
              >
                <Github className="w-3.5 h-3.5" />
                Source Code
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          type="button"
          onClick={handlePrevious}
          aria-label="Previous project"
          className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white/60" />
        </button>

        <div className="flex gap-2 items-center">
          {projects.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => handleDotClick(i)}
              aria-label={`Go to project ${i + 1}`}
              className={cn(
                "rounded-full transition-all duration-300",
                i === currentIndex
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next project"
          className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-white/60" />
        </button>
      </div>
    </div>
  );
}