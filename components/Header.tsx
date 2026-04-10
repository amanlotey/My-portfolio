"use client";

import { useEffect, useState } from "react";
import GradientMenu from "../components/gradient-menu";

const sections = ["profile", "about", "projects", "contact"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("profile");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - 70,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto px-3 py-2 rounded-full backdrop-blur-md bg-black/20 border border-white/[0.08] shadow-2xl">
        <GradientMenu onItemClick={scrollTo} activeSection={activeSection} />
      </nav>
    </header>
  );
}