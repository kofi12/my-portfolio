/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function About() {
  return (
    <section className=" py-5 md:py-10 lg:py-20 text-center flex flex-col items-center justify-center  gap-3 md:gap-7 lg:gap-10">
      <h2 className="font-heading text-4xl md:text:6xl lg:text-7xl font-extrabold text-slate-500 text-shadow-sm">
        Your website is your first impression.
      </h2>
      <p className="font-para text-lg md:text-4xl max-w-3xl mx-auto text-gray-900">
        Today’s customers search online — not in phone books. If your business
        isn’t visible or looks outdated, you’re losing trust and sales to
        competitors. A modern website builds credibility, showcases your brand
        24/7, and turns visitors into customers. In today’s market, it’s not
        optional — it’s essential.
      </p>
    </section>
  );
}

export default About;
