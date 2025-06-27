/* eslint-disable react/no-unescaped-entities */
import React from "react";

function About() {
  return (
    <section className="bg-white py-10 px-4 sm:py-16 sm:px-6 md:py-20 md:px-12 text-center">
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-500 text-shadow-sm mb-4 sm:mb-6">
        Your website is your first impression.
      </h2>
      <p className="font-para text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
      Today’s customers search online — not in phone books. If your business isn’t visible or looks outdated, you’re losing trust and sales to competitors. A modern website builds credibility, showcases your brand 24/7, and turns visitors into customers. In today’s market, it’s not optional — it’s essential.
      </p>
    </section>
  );
}

export default About;
