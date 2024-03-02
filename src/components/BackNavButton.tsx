import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import { twMerge } from 'tailwind-merge';

interface BackNavButtonProps {
  className?: string;
}

export const BackNavButton = ({ className }: BackNavButtonProps) => (
  <ArrowLeftIcon
    className={twMerge('h-6 w-6 text-lightPurple cursor-pointer', className)}
    onClick={() => console.log('hello from back button')}
  />
);
