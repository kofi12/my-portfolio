'use client';

import Link from 'next/link'
import React, {useState, useEffect} from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 5)
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <header className="flex justify-center sticky top-0">
      <nav className={`mx-2 my-2 p-2 rounded-lg flex gap-4 w-1/2 transition-all duration-200 z-50 ${scrolled ? 'bg-white text-slate-500 bg-opacity-45 backdrop-blur-sm' : 'bg-slate-500 text-white' }`}>
        <Link className={`rounded-md px-2 py-1 transition duration-200 ease-in-out border border-transparent ${scrolled ? 'hover:border-slate-500 hover:ring-1 hover:ring-slate-500' : 'hover:border-white hover:ring-1 hover:ring-white'}`} href="#">AKHAIZEL</Link>
        <Link className={`rounded-md px-2 py-1 transition duration-200 ease-in-out border border-transparent ${scrolled ? 'hover:border-slate-500 hover:ring-1 hover:ring-slate-500' : 'hover:border-white hover:ring-1 hover:ring-white'}`} href="#">About</Link>
        <Link className={`rounded-md px-2 py-1 transition duration-200 ease-in-out border border-transparent ${scrolled ? 'hover:border-slate-500 hover:ring-1 hover:ring-slate-500' : 'hover:border-white hover:ring-1 hover:ring-white'}`} href="#">Skills</Link>
        <Link className={`rounded-md px-2 py-1 transition duration-200 ease-in-out border border-transparent ${scrolled ? 'hover:border-slate-500 hover:ring-1 hover:ring-slate-500' : 'hover:border-white hover:ring-1 hover:ring-white'}`} href="#">Contact</Link>
      </nav>
    </header>
  )
}

export default Navbar