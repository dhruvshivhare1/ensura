"use client";

import React, { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {
  children: ReactNode;
  className?: string;
  // inputRange for the scroll progress mapping (default gives a smooth slide-up)
  inputRange?: [number, number, number];
  // outputRange for the translateY values
  outputRange?: [string, string, string];
};

export default function OverlapSection({
  children,
  className = '',
  inputRange = [0, 0.2, 0.6],
  outputRange = ['20vh', '6vh', '0vh'],
}: Props) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, inputRange, outputRange);

  return (
    <motion.section style={{ y }} className={`relative z-20 ${className}`}>
      {children}
    </motion.section>
  );
}
