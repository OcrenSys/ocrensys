'use client';
import React from 'react';
import { Button, Input, Textarea } from '@nextui-org/react';
import useForm from '../lib/hooks/useForm';
import Toast from './toast';

const Form = (props: any) => {
  const {
    state,
    touched,
    handleChange,
    onBlur,
    onSubmit,
    isInvalidEmail,
  }: any = useForm();

  const { values, isLoading, error } = state;

  return (
    <form className="px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <Input
          isClearable
          type="text"
          name="name"
          label="Nombre"
          variant="bordered"
          errorMessage={
            touched.name && !values.name ? 'Debes ingresar un nombre' : ''
          }
          isInvalid={touched.name && !values.name}
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
          className="bg-transparent w-full py-2 px-3 leading-tight focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <Input
          isClearable
          type="email"
          name="email"
          label="Email"
          variant="bordered"
          errorMessage={
            isInvalidEmail || (touched.email && !values.email)
              ? 'Debes ingresar un email valido'
              : ''
          }
          isInvalid={isInvalidEmail || (touched.email && !values.email)}
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
          className="bg-transparent w-full py-2 px-3 leading-tight focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <Textarea
          isRequired
          type="text"
          name="message"
          label="Message"
          variant="bordered"
          errorMessage={
            touched.message && !values.message
              ? 'Debes ingresar un mensaje'
              : ''
          }
          isInvalid={touched.message && !values.message}
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
          className="bg-transparent w-full py-2 px-3 leading-tight focus:outline-none"
        />
      </div>

      <div className="flex items-center justify-start max-w-md px-3">
        <Button
          isLoading={isLoading}
          disabled={!values.name || !values.email || !values.message}
          color="primary"
          variant="shadow"
          onClick={() => onSubmit()}
        >
          Send
        </Button>
      </div>

      <Toast message="¡EMail enviado exitosamente!"></Toast>
    </form>
  );
};

export default Form;
