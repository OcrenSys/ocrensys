'use client';
import React, { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

const ScrollAnimation = ({ children }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress: MotionValue<number> = useTransform<unknown, number>(
    scrollYProgress,
    [0, 1],
    [0.8, 1],
  );

  const opacityProgress: MotionValue<number> = useTransform<unknown, number>(
    scrollYProgress,
    [0, 1],
    [0.8, 1],
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
