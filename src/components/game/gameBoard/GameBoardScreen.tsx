import { FC } from 'react';
import { useGameBoardScreen } from '@/components/game/gameBoard/useGameBoardScreen.ts';
import GameBoardHeader from './GameBoardHeader.tsx';
import CardSection from './CardSection.tsx';
import HowToPlay from './HowToPlay.tsx';

const GameBoardScreen: FC = () => {
  const {
    gameCode,
    playerId,
    playerName,
    score,
    topCard,
    playerCard,
    onSymbolClick,
  } = useGameBoardScreen();

  if (!gameCode || !playerId) return null;

  return (
    <div className="flex flex-col items-center w-full sm:px-4">
      <div className="sm:mb-6 w-full">
        <GameBoardHeader playerName={playerName} score={score} />
      </div>

      <div className="flex flex-col items-center md:flex-row md:space-y-0 md:space-x-2 w-full">
        <CardSection
          title="Center Card"
          card={topCard}
          onSymbolClick={onSymbolClick}
        />
        <CardSection
          title="Your Card"
          card={playerCard}
          onSymbolClick={onSymbolClick}
        />
      </div>

      <HowToPlay />
    </div>
  );
};

export default GameBoardScreen;
