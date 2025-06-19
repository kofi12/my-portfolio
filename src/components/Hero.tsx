/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Hero() {

  return (
    <section className="flex flex-col items-center justify-evenly relative my-30 gap-20">
      <div className="flex flex-col items-center justify-evenly relative w-1/2 rounded-md gap-15 p-3">
        <h1 className="text-slate-500 font-extrabold text-5xl uppercase text-center font-heading">
          Turn Visitors Into Customers.
        </h1>
        <p className="text-2xl text-center font-para">
          Websites aren't just digital brochures — they're powerful tools for
          building trust, increasing sales, and unlocking new growth
          opportunities.
        </p>
        <Link className="shadow-xl rounded-lg" href="">
          <button className="font-para text-lg text-slate-500 inset-shadow-sm font-bold rounded-lg hover:border-2 hover:border-slate-500 py-3 px-2">
            Let's Work Together
          </button>
        </Link>
      </div>
      <div className="relative">
        <Image
          src="/hero.png"
          alt="Modern Website Screenshot"
          width={800}
          height={700}
          priority
          className="rounded-md shadow-md transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}

export default Hero;
