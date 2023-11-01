import clsx from 'clsx';
import React from 'react';
import { ubuntu } from '../ui/fonts';
import Form from '../ui/form';

const Contact = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="max-w-sm mb-8 flex items-center content-center">
        <div className="w-full">
          <h1 className="text-indigo-700 text-3xl text-center md:text-left lg:text-left xl:text-left font-medium my-1">
            {'Get in touch'}
          </h1>
          <h2
            className={clsx(
              ubuntu.className,
              ' text-white text-6xl text-center md:text-left lg:text-left xl:text-left font-semibold my-1',
            )}
          >
            {"Let's work together!"}
          </h2>
        </div>
      </div>

      <div className="max-w-md border-1 rounded-2xl shadow-md ">
        <Form></Form>
      </div>
    </div>
  );
};

export default Contact;
