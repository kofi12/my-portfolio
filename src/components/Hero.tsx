/* eslint-disable react/no-unescaped-entities */
'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

function Hero() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="flex flex-col items-center justify-evenly relative my-10 gap-20">
      <div className="flex flex-col items-center justify-evenly relative w-full rounded-md gap-15 p-3">
        <h1 className="text-slate-500 font-extrabold text-7xl uppercase text-center font-heading text-shadow-sm">
          Turn Visitors Into Customers.
        </h1>
        <p className="text-3xl text-center text-gray-900 font-para max-w-1/2">
          Websites aren't just digital brochures — they're powerful tools for
          building trust, increasing sales, and unlocking new growth
          opportunities.
        </p>
        <Link className="shadow-xl rounded-lg" href="">
          <button className="font-para text-lg bg-gray-100/20 border shadow-xl
           shadow-blue-200 border-blue-400 text-slate-500 inset-shadow-sm font-bold rounded-lg py-3 px-2">
            Book a Free Consult
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 relative font-para font-bold">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/Building Websites Illustration.svg"
            alt="Building Websites Illustration"
            width={700}
            height={700}
            priority
            className="rounded-md shadow-md transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
        <h2 className="italic text-gray-900">
          Get a website that builds trust, drives traffic, and makes your
          business look as good as it is.
        </h2>
      </div>
    </section>
  );
}

export default Hero;
