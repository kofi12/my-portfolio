/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="flex gap-4 relative mb-4">
      <div className="flex flex-col gap-10 relative w-1/2 shadow-md rounded-md p-10">
        <h1 className="text-slate-500 font-extrabold text-5xl uppercase">
          Turn Visitors Into Customers.
        </h1>
        <p>
          Websites aren't just digital brochures — they're powerful tools for
          building trust, increasing sales, and unlocking new growth
          opportunities.
        </p>
        <Link href="">
          <button>Let's Work Together</button>
        </Link>
      </div>
      <div className="relative w-1/2 shadow-md rounded-md p-10">
        <Image
          src="/hero.png"
          alt="Modern Website Screenshot"
          width={800}
          height={700}
          priority
          className="mask-gradient object-cover rounded-md z-10"
        />
      </div>
    </section>
  );
}

export default Hero;
