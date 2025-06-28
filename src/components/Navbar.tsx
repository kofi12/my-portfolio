'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="flex justify-center sticky top-0 z-10">
      <nav
        className={`font-para my-2 mb-5 p-2 rounded-lg flex gap-4 w-full transition-all duration-200 justify-between px-5
          ${scrolled
            ? 'bg-white/40 text-slate-500 border border-white/40 shadow-[0_4px_24px_rgba(0,0,0,0.10),0_1.5px_4px_rgba(59,130,246,0.10)] backdrop-blur-xl'
            : 'bg-slate-500 text-white'}
        `}
        style={scrolled ? { WebkitBackdropFilter: 'blur(18px)', backdropFilter: 'blur(18px)' } : {}}
      >
        <Link
          className={`rounded-md px-2 py-1 transition duration-200 ease-in-out border border-transparent ${
            scrolled
              ? 'hover:border-slate-500 hover:ring-1 hover:ring-slate-500'
              : 'hover:border-white hover:ring-1 hover:ring-white'
          } relative z-10`}
          href="#"
        >
          AKHAIZEL
        </Link>
        <Link
          className={`rounded-md px-2 py-1 transition duration-200 ease-in-out border border-transparent ${
            scrolled
              ? 'hover:border-slate-500 hover:ring-1 hover:ring-slate-500'
              : 'hover:border-white hover:ring-1 hover:ring-white'
          } relative z-10`}
          href="#"
        >
          {`Let's Work Together`}
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
