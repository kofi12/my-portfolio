/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import layer from '../../public/layer.png'

function About() {
  return (
    <section className="flex bg-slate-600 w-[100%] h-[431px]">
        <Image className="rounded-full w-[453px] h-[534px] mx-5 mt-5 z-20" src={layer} alt="Aaron's Headshot"/>
        <p className="text-[#dee7e7] text-[32px] text-right mx-5 mt-5">
          I'm a passionate freelance web developer with an eye for creating custom websites tailored to my clients needs. I specialize in building responsive, user-friendly, and visually appealing web solutions that not only look great but perform seamlessly. Whether you're a small business, an entrepreneur, or an individual, I'm here to bring your vision to life with a focus on detail, creativity, and functionality.
        </p>
    </section>
  )
}

export default About