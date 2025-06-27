import React from 'react';
import { ServiceCard } from './ServiceCard';
import { LuChartSpline } from 'react-icons/lu';
import { LuBringToFront } from "react-icons/lu";
import { LuHandshake } from "react-icons/lu";
import { LuUnplug } from "react-icons/lu";

export function Services() {
  return (
    <section className="flex flex-col gap-6">
      <span className="text-slate-500 text-3xl text-center font-heading text-shadow-sm">
        Services
      </span>
      <div className="flex flex-wrap justify-center gap-4">
        <ServiceCard
          heading="SEO"
          icon={
            <LuChartSpline />
          }
          description="Enhance your visibility on search engines and attract more visitors."
        />
        <ServiceCard
          heading="Responsive Web Development"
          icon={
            <LuBringToFront />
          }
          description="Ensure seamless functionality across desktops, tablets, and phones."
        />
        <ServiceCard
          heading="Website Maintenance and Support"
          icon={
            <LuUnplug />
          }
          description="Ongoing support and updates — focus on your business, not technical issues."
        />
        <ServiceCard
          heading="Conversion-Focused Design"
          icon={
            <LuHandshake />
          }
          description="Use targeted design strategies to convert visitors into customers."
        />
      </div>
    </section>
  );
}

