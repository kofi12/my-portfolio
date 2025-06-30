'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="py-10 px-4">
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-lg mx-auto rounded-2xl border border-white/40 bg-white/40 shadow-[0_4px_24px_rgba(0,0,0,0.10),0_1.5px_4px_rgba(59,130,246,0.10)] w-full p-6 md:p-8 flex flex-col items-center overflow-hidden backdrop-blur-xl"
        style={{ WebkitBackdropFilter: 'blur(18px)', backdropFilter: 'blur(18px)' }}
      >
        {/* Frosted glass overlay for extra realism */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(120deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.10) 100%)',
            border: '1.5px solid rgba(255,255,255,0.18)',
            zIndex: 1,
          }}
        />
        <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4 text-center font-heading relative z-10">
          {`Let's Build Something Great`}
        </h2>
        <p className="text-slate-600 mb-6 md:text-2xl text-center font-para text-base relative z-10">
          {`Let's bring your business online — tell me what you need and I'll make it happen.`}
        </p>
        <form className="space-y-4 w-full relative z-10">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md p-3 bg-white/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md p-3 bg-white/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400"
            />
          </div>

          <input
            type="text"
            placeholder="Business Name"
            className="w-full border border-gray-300 rounded-md p-3 bg-white/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400"
          />

          <textarea
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full border border-gray-300 rounded-md p-3 bg-white/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400"
          ></textarea>

          <button
            type="submit"
            className="w-full sm:w-auto bg-transparent text-slate-500 border border-blue-400 shadow-xl shadow-blue-200 font-semibold py-3 px-5 rounded-md font-para"
          >
            Send Message
          </button>
        </form>
    </motion.div>
  </section>
  );
}
