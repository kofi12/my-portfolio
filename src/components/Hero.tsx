import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Headshot from '../../public/Headshot.jpeg';

function Hero() {
  return (
    <section className="flex justify-center space-x-4 h-[400px] m-10">
        <Image className="rounded-full w-[266px] h-[400px]" src={Headshot} alt="Aaron's Headshot"/>
        <div className="flex-col items-center my-auto">
            <h1 className="my-4">Big Hero Title Here</h1>
            <p className="my-4">Big Hero Paragraph here as well</p>
            <Link className=" bg-gradient-to-r from-slate-500  rounded-lg duration-300 hover:bg-slate-500 hover:outline-gray-400 hover:text-white my-4 p-2" href="#">Contact Me</Link>
        </div>
    </section>
  )
}

export default Hero