'use client';
import clsx from 'clsx';
import React from 'react';
import { ubuntu } from '../ui/fonts';
import Form from '../ui/form';
import FadeAnimation from '../ui/fadeAnimation';
import { ANIMATE } from '../lib/definitions';

const Contact = () => {
  return (
    <section className="h-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <FadeAnimation>
        <h1 className="max-w-md text-4xl font-bold text-center text-indigo-700 md:text-left lg:text-left xl:text-left my-1">
          {'Get in touch'}
        </h1>
        <h2
          className={clsx(
            ubuntu.className,
            'max-w-md text-white text-6xl text-center md:text-left lg:text-left xl:text-left font-semibold my-1',
          )}
        >
          {"Let's work together!"}
        </h2>
      </FadeAnimation>

      <FadeAnimation>
        <div></div>
        <div className="max-w-md border-1 rounded-2xl shadow-md flex items-center content-start">
          <Form></Form>
        </div>
      </FadeAnimation>
    </section>
  );
};

export default Contact;
