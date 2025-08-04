import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black/30 backdrop-blur-md text-gray-300 text-sm">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} Amandeep Singh. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/amanlotey"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/amandeep-singh-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:amanlotey0161@gmail.com"
            className="hover:text-purple-300 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
