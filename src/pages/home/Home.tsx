import { UserIcon } from '@heroicons/react/16/solid';

import { Button, HomeLayout, SearchBar } from 'components';
import { NoGame } from './NoGame';
import { IGame } from 'types';
import { GAMES } from 'data';
import { GamesList } from './GamesList';

const UserProfileButton = () => (
  <UserIcon
    className="h-6 w-6 text-customWhite cursor-pointer"
    onClick={() => console.log('hello from back button')}
  />
);

export const Home = () => {
  const games: IGame[] = GAMES;
  return (
    <HomeLayout navIcons={[UserProfileButton()]}>
      <div className="container mx-auto flex justify-center mt-10 flex-col">
        <div className="w-full flex justify-between">
          <SearchBar />
          <Button
            className="bg-brightPink text-customWhite hover:bg-darkPink min-w-[200px]"
            label="Create a new game"
            onClick={() => {}}
          />
        </div>
        {games.length <= 0 && <NoGame />}
        {games.length > 0 && <GamesList games={games} />}
      </div>
    </HomeLayout>
  );
};
