import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-500 text-gray-300 py-8 px-4 sm:py-10 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <p className="text-xs sm:text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Aaron Haizel. All rights reserved.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm items-center justify-center md:justify-end">
          <Link href="#services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
