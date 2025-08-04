export default function Header() {
  return (
    <header className="sticky top-6 z-50 flex justify-center">
      <nav className="flex gap-4 px-6 py-2 rounded-full backdrop-blur-md bg-black/30 border border-white/10 shadow-xl">
        <a
          href="#profile"
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
          className="text-white px-5 py-2 rounded-full hover:bg-white/10 transition"
        >
          Contact
        </a>
      </nav>  
    </header>
  );
}
