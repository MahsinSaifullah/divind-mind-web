import * as React from 'react';

import { Heading, SubHeading } from 'components';

export const Details = () => {
  return (
    <div className='flex justify-center h-[100%] w-[80%] items-center flex-col gap-8 text-center'>
      <Heading text='Welcome to Divine Mind' />
      <SubHeading text='Your all-in-one host for interactive quizes' />
    </div>
  );
};
