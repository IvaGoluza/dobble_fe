import GameInitScreen from '@/components/game/lobby/GameInitScreen';
import GameLayout from '@/components/layout/GameLayout';
import { FC } from 'react';

const GameInit: FC = () => {
  return (
    <GameLayout>
      <GameInitScreen />
    </GameLayout>
  );
};

export default GameInit;
