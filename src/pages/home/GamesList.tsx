import * as React from 'react';

import { IGame } from 'types';
import { Game } from './Game';

interface GamesListProps {
  games: IGame[];
}

export const GamesList: React.FC<GamesListProps> = ({ games }) => {
  return (
    <div className="mt-16 grid w-full xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 gap-4">
      {games.map((game, index) => {
        return <Game game={game} key={game.id} index={index + 1} />;
      })}
    </div>
  );
};
