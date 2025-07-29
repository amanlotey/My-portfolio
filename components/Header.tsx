export default function Header() {
  return (
    <header className="sticky top-6 z-50 flex justify-center">
      <nav className="flex gap-4 px-6 py-2 rounded-full backdrop-blur-md bg-black/30 border border-white/10 shadow-xl">
        <a
          href="#hero"
          className="text-white px-5 py-2 rounded-full hover:bg-white/10 transition"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-white px-5 py-2 rounded-full hover:bg-white/10 transition"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-white px-5 py-2 rounded-full hover:bg-white/10 transition"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="relative inline-flex items-center justify-center px-5 py-2 rounded-full text-white transition bg-black/20 overflow-hidden border border-transparent group"
        >
          <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 group-hover:blur-sm group-hover:opacity-100 opacity-70 transition-all duration-300" />
          <span className="relative z-10 bg-black/60 px-5 py-2 rounded-full">Contact</span>
        </a>
      </nav>
    </header>
  );
}
