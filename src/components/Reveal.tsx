'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function Reveal({ children, delay = 0, className, style }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, delay, ease: [0.25, 1, 0.5, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
