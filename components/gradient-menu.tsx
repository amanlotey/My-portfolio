"use client";

import React from "react";
import { IoHomeOutline, IoPersonOutline, IoCodeSlashOutline, IoMailOutline } from "react-icons/io5";

type MenuItem = {
  title: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  to: string;
};

const menuItems: MenuItem[] = [
  {
    title: "Home",
    icon: <IoHomeOutline />,
    gradientFrom: "#a955ff",
    gradientTo: "#ea51ff",
    to: "profile",
  },
  {
    title: "About",
    icon: <IoPersonOutline />,
    gradientFrom: "#56CCF2",
    gradientTo: "#2F80ED",
    to: "about",
  },
  {
    title: "Projects",
    icon: <IoCodeSlashOutline />,
    gradientFrom: "#FF9966",
    gradientTo: "#FF5E62",
    to: "projects",
  },
  {
    title: "Contact",
    icon: <IoMailOutline />,
    gradientFrom: "#80FF72",
    gradientTo: "#7EE8FA",
    to: "contact",
  },
];

interface GradientMenuProps {
  onItemClick?: (to: string) => void;
  activeSection?: string;
}

export default function GradientMenu({ onItemClick, activeSection }: GradientMenuProps) {
  return (
    <ul className="flex gap-3">
      {menuItems.map(({ title, icon, gradientFrom, gradientTo, to }) => {
        const isActive = activeSection === to;
        return (
          <li
            key={to}
            onClick={() => onItemClick?.(to)}
            style={
              {
                "--gradient-from": gradientFrom,
                "--gradient-to": gradientTo,
              } as React.CSSProperties
            }
            className={`
              relative h-[52px] rounded-full flex items-center justify-center
              transition-all duration-500 cursor-pointer shadow-lg
              group
              ${isActive ? "w-[160px] shadow-none" : "w-[52px] hover:w-[160px] hover:shadow-none"}
              bg-white/10 backdrop-blur-sm border border-white/10
            `}
          >
            {/* Gradient background */}
            <span
              className={`
                absolute inset-0 rounded-full
                bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))]
                transition-all duration-500
                ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
              `}
            />

            {/* Blur glow */}
            <span
              className={`
                absolute top-[10px] inset-x-0 h-full rounded-full
                bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))]
                blur-[15px] -z-10 transition-all duration-500
                ${isActive ? "opacity-40" : "opacity-0 group-hover:opacity-40"}
              `}
            />

            {/* Icon — hidden when active or hovered */}
            <span
              className={`
                relative z-10 transition-all duration-300
                ${isActive ? "scale-0" : "scale-100 group-hover:scale-0"}
              `}
            >
              <span className="text-xl text-white/60">{icon}</span>
            </span>

            {/* Title */}
            <span
              className={`
                absolute text-white text-[0.72rem] tracking-[0.12em] uppercase font-medium
                transition-all duration-300
                ${isActive ? "scale-100" : "scale-0 group-hover:scale-100 delay-100"}
              `}
            >
              {title}
            </span>
          </li>
        );
      })}
    </ul>
  );
}