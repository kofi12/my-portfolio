import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-500 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col justify-between items-center gap-4">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Aaron Haizel. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm">
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
