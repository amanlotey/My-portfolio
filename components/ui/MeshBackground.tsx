"use client";
import React from "react";

const MeshBackground = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* White grid pattern */}
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          {/* Vertical line */}
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="24"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="2"
          />

          <line
            x1="0"
            y1="0"
            x2="24"
            y2="0"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="2"
          />
        </pattern>

        {/* Wave distortion */}
        <filter id="distort">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01"
            numOctaves="2"
            seed="3"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="14s"
              values="0.008;0.012;0.008"
              repeatCount="indefinite"
            />
          </feTurbulence>

          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="35"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Soft dark fade for depth */}
        <linearGradient id="fade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.75" />
        </linearGradient>
      </defs>

      {/* White mesh */}
      <rect
        width="100%"
        height="100%"
        fill="url(#grid)"
        filter="url(#distort)"
      />

      {/* Depth overlay */}
      <rect width="100%" height="100%" fill="url(#fade)" />
    </svg>
  );
};

export default MeshBackground;
