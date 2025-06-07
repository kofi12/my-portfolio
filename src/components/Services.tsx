import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="text-center text-slate-500 font-bold text-7xl">
      Services
      <ServiceCard
        heading="Title"
        icon={<svg></svg>}
        description="Descriptive Paragraph"
      />
      <ServiceCard
        heading="Title"
        icon={<svg></svg>}
        description="Descriptive Paragraph"
      />
      <ServiceCard
        heading="Title"
        icon={<svg></svg>}
        description="Descriptive Paragraph"
      />
    </section>
  );
}

export default Services;
