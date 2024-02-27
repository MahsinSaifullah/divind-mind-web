import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { twMerge } from 'tailwind-merge';

interface SearchBarProps {
  containerStyles?: string;
  inputStyles?: string;
  iconStyles?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  containerStyles,
  inputStyles,
  iconStyles,
}) => {
  return (
    <form className={twMerge('max-w-[480px] w-full px-4', containerStyles)}>
      <div className="relative">
        <input
          type="text"
          name="search"
          className={twMerge(
            'w-full h-12 shadow p-4 rounded-full font-rubik text-brightPink focus:outline-none focus:border-brightPink focus:border-2 placeholder-brightPink placeholder-opacity-75',
            inputStyles
          )}
          placeholder="search"
        />
        <button type="submit">
          <MagnifyingGlassIcon
            className={twMerge(
              'text-brightPink h-5 w-5 absolute top-3.5 right-4',
              iconStyles
            )}
          />
        </button>
      </div>
    </form>
  );
};
