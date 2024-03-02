import { twMerge } from 'tailwind-merge';

import { Button } from 'components';

export const Form = () => {
  return (
    <form className="w-full flex justify-center items-center flex-col mt-16 gap-4">
      <input
        type="text"
        name="code"
        className={twMerge(
          'w-1/2 md:w-1/4 h-12 shadow p-4 rounded-xl font-rubik text-brightPink focus:outline-none focus:border-brightPink focus:border-2 placeholder-brightPink placeholder-opacity-75'
        )}
        placeholder="unique code"
      />
      <input
        type="number"
        name="code"
        className={twMerge(
          'w-1/2 md:w-1/4 h-12 shadow p-4 rounded-xl font-rubik text-brightPink focus:outline-none focus:border-brightPink focus:border-2 placeholder-brightPink placeholder-opacity-75'
        )}
        placeholder="max player limit"
      />
      <Button
        className="bg-darkPurple text-customWhite hover:bg-softPurple min-w-0 w-1/2 md:w-1/4 mt-5"
        label="Create"
        onClick={() => {}}
      />
    </form>
  );
};
