import React from 'react';
import { Spinner } from '@nextui-org/react';

export default function Loading() {
  return (
    <div className="flex w-full items-start justify-center gap-4">
      <Spinner label="Loading" color="primary" labelColor="foreground" />
    </div>
  );
}
