/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Hero() {

  return (
    <section className="flex flex-col items-center justify-evenly relative my-30 gap-20">
      <div className="flex flex-col items-center justify-evenly relative w-full rounded-md gap-15 p-3">
        <h1 className="text-slate-500 font-extrabold text-7xl uppercase text-center font-heading text-shadow-sm">
          Turn Visitors Into Customers.
        </h1>
        <p className="text-3xl text-center font-para max-w-1/2">
          Websites aren't just digital brochures — they're powerful tools for
          building trust, increasing sales, and unlocking new growth
          opportunities.
        </p>
        <Link className="shadow-xl rounded-lg" href="">
          <button className="font-para text-lg bg-gray-100/20 border shadow-xl shadow-blue-200 border-blue-400 text-slate-500 inset-shadow-sm font-bold rounded-lg py-3 px-2">
            Book a Free Consult
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 relative font-para font-bold">
        <Image
          src="/hero.png"
          alt="Modern Website Screenshot"
          width={800}
          height={700}
          priority
          className="rounded-md shadow-md transition-transform duration-500 hover:scale-105"
        />
        <h2 className="italic">Get a website that builds trust, drives traffic, and makes your business look as good as it is.</h2>
      </div>
    </section>
  );
}

export default Hero;
