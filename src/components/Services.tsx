import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="flex flex-col gap-10">
      <span className="text-slate-500 text-7xl text-center font-heading text-shadow-sm">Services</span>
      <div className="flex flex-wrap justify-center gap-4">
        <ServiceCard
          heading="SEO"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
          description="Ever wondered why certain websites appear first in a google search?
          This is what good SEO can do for you. Nowadays, attention spans are short.
          The higher you are in a search the more likely someone is to visit your site"
        />
        <ServiceCard
          heading="Custom Website Design"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
          description="Stand out from the crowd with a design that reflects your unique business.
                      I build clean, modern websites tailored to your brand and goals — no cookie-cutter templates,
                      just strategic design that builds trust and keeps visitors engaged."
        />
        <ServiceCard
          heading="Responsive Web Development"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
          description="Your website should work beautifully everywhere.
          I ensure your site looks and performs flawlessly across desktops, tablets,
          and smartphones — so your customers get a seamless experience, no matter how they find you."
        />
        <ServiceCard
          heading="Performance and Speed Optimization"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
          description="Slow websites lose customers. I make yours fast.
          With optimized code, smart image loading, and modern best practices,
          I make sure your site loads fast, keeps users happy, and ranks higher on search engines."
        />
        <ServiceCard
          heading="Website Maintenance and Support"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
          description="Never worry about website issues again.
          I provide ongoing support, updates,
          and fixes so you can focus on running your business — not troubleshooting your site."
        />
        <ServiceCard
          heading="Conversion-Focused Design"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
          description="A website should do more than look good — it should grow your business.
          I design with purpose: clear calls to action, persuasive layouts,
          and user journeys that turn visitors into loyal customers."
        />
        <ServiceCard
          heading="Managed Website Hosting"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
          description="Fast. Secure. Hassle-free.
          I take care of everything behind the scenes — your website is hosted on fast,
          reliable servers with built-in security, daily backups, and uptime monitoring.
          That means no technical headaches, no downtime worries — just peace of mind knowing your site is always online and performing at its best."
        />
      </div>
    </section>
  );
}

export default Services;
