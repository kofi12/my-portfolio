import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <section className="sticky top-0 shadow-md z-10 bg-slate-600 max-w-full h-[102px] mx-2 my-2 rounded-lg p-4 py-8">
        <nav className="flex justify-between items-center text-white">
            <Link href="#" className="text-2xl font-bold">AKHAIZEL</Link>
            <div className="flex space-x-6">
                <Link className="rounded-md outline border-white outline-offset-4 duration-300 hover:outline-transparent" href="#">Projects</Link>
                <Link className="rounded-md outline outline-white outline-offset-4 duration-300 hover:outline-transparent"  href="#">Skills</Link>
                <Link className="rounded-md outline outline-white outline-offset-4 duration-300 hover:outline-transparent" href="#">Contact</Link>
            </div>
        </nav>
    </section>
  )
}

export default Header