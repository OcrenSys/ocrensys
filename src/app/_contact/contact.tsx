'use client';
import clsx from 'clsx';
import React from 'react';
import { ubuntu } from '../ui/fonts';
import { motion } from 'framer-motion';
import Form from '../ui/form';
import useContact from './useContact';

const Contact = () => {
  const {
    containerForm,
    containerTitle,
    containerTitleItem,
  } = useContact();

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <motion.div
        variants={containerTitle}
        initial="initial"
        whileInView="animate"
        className="w-full mb-8 flex items-center content-end"
      >
        <div className="w-full">
          <motion.h1
            variants={containerTitleItem}
            className="text-5xl font-bold text-center text-indigo-700 md:text-left lg:text-left xl:text-left my-1"
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
        whileInView="animate"
        className="max-w-md border-1 rounded-2xl shadow-md  flex iten-center content-start"
      >
        <Form></Form>
      </motion.div>
    </section>
  );
};

export default Contact;
