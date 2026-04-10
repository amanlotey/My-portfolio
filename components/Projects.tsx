"use client";

import { motion } from "framer-motion";
import { TestimonialCarousel } from "@/components/profile-card-testimonial-carousel";

export default function Projects() {
  return (
    <section className="py-28 px-4 bg-[#030303]" id="projects">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="text-center mb-20"
      >
        <p className="text-[0.65rem] tracking-[0.22em] uppercase text-white/25 mb-4">
          Selected Work
        </p>
        <h2
          className="font-display text-white leading-none"
          style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
        >
          Projects
        </h2>
        <div className="mt-4 h-px w-16 mx-auto bg-white/10" />
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <TestimonialCarousel />
      </motion.div>
    </section>
  );
}