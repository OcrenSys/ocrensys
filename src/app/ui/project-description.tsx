'use client';
import React from 'react';
import { motion } from 'framer-motion';

const PorjectDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <motion.h1
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="text-primery text-center text-4xl mb-8"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
        className="text-grey text-center text-lg mb-8"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default PorjectDescription;
