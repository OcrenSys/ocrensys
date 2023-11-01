import { Button, Input, Textarea } from '@nextui-org/react';
import clsx from 'clsx';
import React from 'react';
import { ubuntu } from '../ui/fonts';

const Contact = () => {
  const isLoading: boolean = false;

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
        <form className="px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <Input
              isClearable
              type="email"
              label="Email"
              variant="bordered"
              placeholder=""
              className="bg-transparent w-full py-2 px-3 leading-tight focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <Textarea
              isRequired
              type="text"
              label="Message"
              variant="bordered"
              className="bg-transparent w-full py-2 px-3 leading-tight focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-start max-w-md px-3">
            <Button color="primary" variant="shadow" isLoading={isLoading}>
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
