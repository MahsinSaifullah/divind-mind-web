import * as React from 'react';
import { TrashIcon } from '@heroicons/react/16/solid';

import { Button, Card, H2, H3, P } from 'components';
import { IGame } from 'types';

interface GameProps {
  game: IGame;
  index: number;
}

export const Game: React.FC<GameProps> = ({ game, index }) => {
  return (
    <Card className="flex justify-center flex-col items-center min-h-[250px] min-w-[200px] p-4 relative">
      <TrashIcon
        className="h-7 w-7 text-red-400 cursor-pointer absolute top-3 right-3 bg-red-100 rounded-full p-1"
        onClick={() => console.log('hello from back button')}
      />
      <H2 text={`Game #${index}`} className="text-md text-brightPink" />
      <img
        src="gamepad.png"
        className="h-20 w-20 mb-5"
        alt={`game with code: ${game.code}`}
      />
      <div className="bg-bluishWhite p-3 rounded-xl flex flex-col items-start">
        <div className="flex items-center gap-2 justify-center">
          <H3 text="Code:" className="text-md text-brightPink" />
          <P text={game.code} className="text-ellipsis text-darkGray" />
        </div>
        <div className="flex items-center gap-2 justify-center">
          <H3 text="Players Limit:" className="text-md text-brightPink" />
          <P
            text={`${game.maxPlayerLimit}`}
            className="text-ellipsis text-darkGray"
          />
        </div>
        <div className="flex items-center gap-2 justify-center">
          <H3 text="Quizes:" className="text-md text-brightPink" />
          <P
            text={`${game.quizes.length}`}
            className="text-ellipsis text-darkGray"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <Button
          className="bg-brightPink text-customWhite hover:bg-darkPink min-w-[100px]"
          label="Start game"
          onClick={() => {}}
        />
        <Button
          className="bg-softPurple text-customWhite hover:bg-darkPurple min-w-[100px]"
          label="Edit game"
          onClick={() => {}}
        />
      </div>
    </Card>
  );
};
