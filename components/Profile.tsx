"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TypewriterText from "./TypeWriter";
import MeshBackground from "./ui/MeshBackground";

const Hero = () => {
  const smoothScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="profile"
      className="relative min-h-screen text-white overflow-hidden px-6 flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-black to-[#01162f]"
    >
       <MeshBackground />
      <div className="z-10 flex flex-col items-start gap-6 max-w-3xl">
        <div className="flex items-center gap-4">
          <span className="h-16 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded"></span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 glitch"
              data-text="Amandeep Singh"
            >
              Amandeep Singh
            </span>
          </h1>
        </div>

        <TypewriterText
          phrases={[
            "Crafting Scalable Web Apps",
            "Building Intuitive Mobile Experiences",
            "Designing Seamless User Journeys",
            "Turning Ideas into Products",
          ]}
          className="w-full text-center text-[#E8EDDF] text-lg sm:text-xl font-light"
        />
        <p className="text-gray-400 text-sm sm:text-base mt-2 tracking-wide text-center self-center">
          Full-Stack Developer crafting seamless web and mobile experiences
        </p>

        <a
          onClick={() => smoothScrollTo("projects")}
          className="cursor-pointer mt-6 self-center inline-block px-6 py-3 rounded-full bg-[#8fd3d5]  text-black font-semibold shadow-lg hover:opacity-70 transition"
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
  );
};

export default Hero;
