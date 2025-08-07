"use client"

import { Link } from "react-scroll"

export default function Header() {
  const navItems = [
    { name: "Home", to: "profile" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ]

  return (
    <header className="sticky top-6 z-50 flex justify-center">
      <nav className="flex gap-4 px-6 py-2 rounded-full backdrop-blur-md bg-black/30 border border-white/10 shadow-xl">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70} // adjust if you have a sticky header
            activeClass="bg-white/20"
            className="cursor-pointer text-white px-5 py-2 rounded-full hover:bg-white/10 transition"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}
