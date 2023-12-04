import React from 'react';
import { Button, Input, Textarea } from '@nextui-org/react';
import useForm from '../lib/hooks/useForm';
import { ToastContainer } from 'react-toastify';
import { TPropsForm } from '../lib/definitions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
  const {
    state,
    touched,
    handleChange,
    onBlur,
    onSubmit,
    isInvalidEmail,
  }: TPropsForm = useForm();

  const { values, isLoading, error } = state;

  return (
    <form className="px-2 md:px-4 pt-6 pb-8 mb-4 w-full">
      <div className="mb-4">
        <Input
          isRequired
          radius="lg"
          type="text"
          name="subject"
          label="Subject"
          variant="bordered"
          classNames={{
            label: 'text-black/50 dark:text-white/90',
            input: [
              'bg-transparent',
              'text-black/90 dark:text-white/90',
              'placeholder:text-default-700/50 dark:placeholder:text-white/60',
            ],
            innerWrapper: 'bg-transparent',
            inputWrapper: [
              'border-white/50',
              'hover:border-white',
              'shadow-xl',
              'bg-default-white',
              'dark:bg-default-white',
              'backdrop-blur-xl',
              'backdrop-saturate-100',
              'hover:bg-default-white',
              '!cursor-text',
            ],
          }}
          errorMessage={
            touched.subject && !values.subject
              ? 'You have to type a subject'
              : ''
          }
          isInvalid={touched?.subject && !values?.subject}
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
      </div>

      <div className="mb-4">
        <Input
          isRequired
          radius="lg"
          type="email"
          name="email"
          label="Email"
          variant="bordered"
          classNames={{
            label: 'text-black/50 dark:text-white/90',
            input: [
              'bg-transparent',
              'text-black/90 dark:text-white/90',
              'placeholder:text-default-700/50 dark:placeholder:text-white/60',
            ],
            innerWrapper: 'bg-transparent',
            inputWrapper: [
              'border-white/50',
              'hover:border-white',
              'shadow-xl',
              'bg-default-white',
              'dark:bg-default-white',
              'backdrop-blur-xl',
              'backdrop-saturate-100',
              'hover:bg-default-white',
              '!cursor-text',
            ],
          }}
          errorMessage={
            isInvalidEmail || (touched.email && !values.email)
              ? 'Type a valid email'
              : ''
          }
          isInvalid={isInvalidEmail || (touched.email && !values.email)}
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
      </div>

      <div className="mb-4">
        <Textarea
          isRequired
          radius="lg"
          type="text"
          name="message"
          label="Message"
          variant="bordered"
          classNames={{
            label: 'text-black/50 dark:text-white/90',
            input: [
              'bg-transparent',
              'text-black/90 dark:text-white/90',
              'placeholder:text-default-700/50 dark:placeholder:text-white/60',
            ],
            innerWrapper: 'bg-transparent',
            inputWrapper: [
              'border-white/50',
              'hover:border-white',
              'shadow-xl',
              'bg-default-white',
              'dark:bg-default-white',
              'backdrop-blur-xl',
              'backdrop-saturate-100',
              'hover:bg-default-white',
              '!cursor-text',
            ],
          }}
          errorMessage={
            touched.message && !values.message
              ? 'You have to type a little message before'
              : ''
          }
          isInvalid={touched.message && !values.message}
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
      </div>

      <div className="flex items-center justify-start max-w-md">
        <Button
          className="w-full md:w-auto "
          isLoading={isLoading}
          color="primary"
          variant="shadow"
          onClick={() => onSubmit()}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          &nbsp;
          Send
        </Button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Form;
