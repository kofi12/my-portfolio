import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Headshot from '../../public/Headshot.jpeg'

function Hero() {
  return (
    <section className="flex justify-center space-x-4 h-[550px] bg-[#dee7e7]">
        <div className="flex items-center my-auto">
          <div className="flex-col">
            <h1 className="my-4 w-[659px] text-left text-[#3a445d] text-[48px]">
              Transform Ideas into Stunning Websites
            </h1>
            <p className="my-4 w-[558px] text-left text-[#3a445d] text-[40px]">
              Crafting modern, responsive, and high-performing web experiences for businesses and individuals.
            </p>
            <Link className=" bg-gradient-to-r from-slate-500  rounded-lg duration-300 hover:bg-slate-500 hover:outline-gray-400 hover:text-white my-4 p-2" href="#">Contact Me</Link>
          </div>
          <div>
            <Image className="rounded-full w-[266px] h-[400px]" src={Headshot} alt="Aaron's Headshot"/>
          </div>
        </div>
    </section>
  )
}

export default Hero