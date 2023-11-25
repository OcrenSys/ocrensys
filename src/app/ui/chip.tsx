import React from 'react';
import { Chip as Content } from '@nextui-org/react';

export default function Chip(props: any) {
  const { label, icon, ...rest } = props;
  

  return (
    <div className="flex gap-4">
      <Content
        startContent={icon}
        variant="flat"
        color="primary"
        className='text-white'
      >
        {label}
      </Content>
    </div>
  );
}
