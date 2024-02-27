import { UserIcon } from '@heroicons/react/16/solid';

import { Button, HomeLayout, SearchBar } from 'components';

const UserProfileButton = () => (
  <UserIcon
    className="h-6 w-6 text-customWhite cursor-pointer"
    onClick={() => console.log('hello from back button')}
  />
);

export const Home = () => {
  return (
    <HomeLayout navIcons={[UserProfileButton()]}>
      <div className="container mx-auto flex justify-center mt-10">
        <div className="w-full flex justify-between">
          <SearchBar />
          <Button
            className="bg-brightPink text-customWhite hover:bg-darkPink min-w-[200px]"
            label="Create a new game"
            onClick={() => {}}
          />
        </div>
      </div>
    </HomeLayout>
  );
};
