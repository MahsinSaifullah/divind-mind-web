import { twMerge } from 'tailwind-merge';

import { Button, Input } from 'components';

export const Form = () => {
  return (
    <form className="w-full flex justify-center items-center flex-col mt-16 gap-4">
      <Input
        type="text"
        name="name"
        placeholder="name"
        className="w-1/2 md:w-1/4"
      />
      <Input
        type="text"
        name="code"
        placeholder="unique code"
        className="w-1/2 md:w-1/4"
      />
      <Input
        type="number"
        name="maxPlayerLimit"
        placeholder="max player limit"
        className="w-1/2 md:w-1/4"
      />
      <Button
        className="bg-darkPurple text-customWhite hover:bg-softPurple min-w-0 w-1/2 md:w-1/4 mt-5"
        label="Create"
        onClick={() => {}}
      />
    </form>
  );
};
