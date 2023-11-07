'use client';
import React, { useEffect } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

const PorjectDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 7, { duration: 2 });

    return animation.stop;
  }, []);

  return (
    <div>
      <motion.h1
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        className="text-7xl font-bold text-center text-primery mb-8"
      >
        {rounded}
      </motion.h1>
      <motion.h1
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="text-5xl font-bold text-center text-primery mb-8"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
        className="text-grey text-center text-lg mb-16"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default PorjectDescription;
