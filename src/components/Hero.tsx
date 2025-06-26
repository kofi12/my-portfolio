/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Hero() {

  return (
    <section className="flex flex-col items-center justify-evenly relative my-10 gap-10 md:my-20 md:gap-16 lg:my-30 lg:gap-20 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col items-center justify-evenly relative w-full max-w-xl rounded-md gap-6 p-4 sm:gap-10 sm:p-6 md:w-3/4 lg:w-1/2 lg:gap-15 lg:p-8">
        <h1 className="text-slate-500 font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-center font-heading text-shadow-sm">
          Turn Visitors Into Customers.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center font-para">
          Websites aren't just digital brochures — they're powerful tools for
          building trust, increasing sales, and unlocking new growth
          opportunities.
        </p>
        <Link className="shadow-xl rounded-lg w-full sm:w-auto" href="">
          <button className="w-full sm:w-auto font-para text-base sm:text-lg bg-gray-100/20 border shadow-xl shadow-blue-200 border-blue-400 text-slate-500 inset-shadow-sm font-bold rounded-lg py-3 px-2">
            Book a Free Consult
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 relative font-para font-bold italic w-full max-w-3xl">
        <Image
          src="/hero.png"
          alt="Modern Website Screenshot"
          width={800}
          height={700}
          priority
          className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl rounded-md shadow-md transition-transform duration-500 hover:scale-105"
        />
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-center">Get a website that builds trust, drives traffic, and makes your business look as good as it is.</h2>
      </div>
    </section>
  );
}

export default Hero;
