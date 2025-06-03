/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="flex relative mb-4 gap-4">
      <div className="flex flex-col items-center justify-evenly relative w-1/2 rounded-md gap-5 p-3">
        <h1 className="text-slate-500 font-extrabold text-5xl uppercase text-center">
          Turn Visitors Into Customers.
        </h1>
        <p className="text-2xl text-center">
          Websites aren't just digital brochures — they're powerful tools for
          building trust, increasing sales, and unlocking new growth
          opportunities.
        </p>
        <Link href="">
          <button className="text-lg text-slate-500 font-bold shadow-sm rounded-md hover:border-2 hover:border-slate-500 py-3 px-2">
            Let's Work Together
          </button>
        </Link>
      </div>
      <div className="relative w-1/2">
        <Image
          src="/hero.png"
          alt="Modern Website Screenshot"
          width={800}
          height={700}
          priority
          className="rounded-md shadow-md"
        />
      </div>
    </section>
  );
}

export default Hero;
