'use client';
import { easeIn, motion, useReducedMotion } from 'framer-motion';

type ServiceCardProps = {
  icon: React.ReactNode;
  heading: string;
  description: string;
};

export function ServiceCard({ icon, heading, description }: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.03 }}
      transition={{ duration: 0.6, ease: easeIn }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative rounded-2xl border border-white/40 bg-white/40
      shadow-[0_4px_24px_rgba(0,0,0,0.10),0_1.5px_4px_rgba(59,130,246,0.10)] p-6
      flex flex-col items-center gap-4
      transition-all duration-300 overflow-hidden"
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
      {/* Icon with no background, slate-500 color, and size 10 */}
      <div className="flex items-center justify-center w-14 h-14 mb-4 relative z-10 text-slate-500 text-4xl">
        {icon}
      </div>
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-700 mb-2 text-center relative z-10">
        {heading}
      </h2>
      <p className="font-para text-base text-slate-600 text-center sm:text-2xl relative z-10">
        {description}
      </p>
    </motion.div>
  );
}
