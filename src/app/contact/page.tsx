'use client';
import clsx from 'clsx';
import React from 'react';
import { ubuntu } from '../ui/fonts';
import Form from '../ui/form';
import { motion } from 'framer-motion';

const Contact = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const containerTitle = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      duration: 2,
      transition: {
        staggerChildren: 1,
        duration: 1,
      },
    },
  };

  const containerTitleItem = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const containerForm = {
    initial: {
      x: 400,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <motion.div
        variants={containerTitle}
        initial="initial"
        animate="animate"
        className="w-full mb-8 flex items-center content-end"
      >
        <div className="w-full">
          <motion.h1
            variants={containerTitleItem}
            className="text-indigo-700 text-3xl text-center md:text-left lg:text-left xl:text-left font-medium my-1"
          >
            {'Get in touch'}
          </motion.h1>
          <motion.h2
            variants={containerTitleItem}
            className={clsx(
              ubuntu.className,
              ' text-white text-6xl text-center md:text-left lg:text-left xl:text-left font-semibold my-1',
            )}
          >
            {"Let's work together!"}
          </motion.h2>
        </div>
      </motion.div>

      <motion.div
        variants={containerForm}
        initial="initial"
        animate="animate"
        className="max-w-md border-1 rounded-2xl shadow-md  flex iten-center content-start"
      >
        <Form></Form>
      </motion.div>
    </div>
  );
};

export default Contact;
