"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="flex justify-center sticky top-0 z-10 w-full">
      <nav
        className={`font-para mx-2 my-2 mb-4 sm:mb-5 p-2 rounded-lg flex gap-2 sm:gap-4 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl transition-all duration-200 justify-between px-2 sm:px-5 text-sm sm:text-base md:text-lg ${
          scrolled
            ? "bg-gray-200 text-slate-500 bg-opacity-45 backdrop-blur-md z-10"
            : "bg-slate-500 text-white"
        }`}
      >
        <Link
          className={`rounded-md px-2 py-1 transition duration-200 ease-in-out border border-transparent ${
            scrolled
              ? "hover:border-slate-500 hover:ring-1 hover:ring-slate-500"
              : "hover:border-white hover:ring-1 hover:ring-white"
          }`}
          href="#"
        >
          AKHAIZEL
        </Link>
        <Link
          className={`rounded-md px-2 py-1 transition duration-200 ease-in-out border border-transparent ${
            scrolled
              ? "hover:border-slate-500 hover:ring-1 hover:ring-slate-500"
              : "hover:border-white hover:ring-1 hover:ring-white"
          }`}
          href="#"
        >
          {`Let's Work Together`}
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
