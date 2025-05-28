import { Link } from 'react-router-dom';
import { FC } from 'react';

interface GameBoardHeaderProps {
  playerName: string;
  score: number;
}

const GameBoardHeader: FC<GameBoardHeaderProps> = ({ playerName, score }) => (
  <header className="py-2 sm:py-4">
    <div className="px-8 mx-auto flex justify-between items-center">
      <Link to="/">
        <img src="/assets/logo.png" alt="Dobble" className="h-10 sm:h-16" />
      </Link>
      <div className="relative">
        <div className="flex flex-col items-start bg-black text-white py-1 pl-2 pr-14 rounded-lg w-fit">
          <div className="flex gap-1 justify-center">
            <img
              src="/assets/gamer.png"
              alt="Gamer"
              className="w-7 h-5 translate-y-1"
            />
            <span className="text-lg font-semibold">{playerName}</span>
          </div>
          <div className="flex gap-1 justify-center">
            <span className="text-xl w-7 h-5 flex justify-center">💎</span>
            <span className="text-lg text-start font-semibold">{score}</span>
          </div>
        </div>
        <img
          src="/dobbleHand.png"
          alt="Dobble Hand"
          className="h-16 w-12 absolute -right-6 -bottom-3"
        />
      </div>
    </div>
  </header>
);

export default GameBoardHeader;
