import React, { createContext, useContext, ReactNode, useState, Dispatch } from 'react';
import {CardType} from "@/types/game.ts";

interface GameContextType {
    playerName: string;
    setPlayerName: (name: string) => void;
    isCreator: boolean | undefined;
    setIsCreator: (isCreator: boolean) => void;
    gameCode?: string;
    setGameCode: (code: string) => void;
    playerId?: number;
    setPlayerId: (id: number) => void;
    topCard: CardType | undefined;
    setTopCard: (topCard: CardType) => void;
    playerCard: CardType | undefined;
    setPlayerCard:  Dispatch<React.SetStateAction<CardType>>;
    score: number;
    setScore: Dispatch<React.SetStateAction<number>>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
    const [playerName, setPlayerName] = useState<string>(() => {
        const stored = localStorage.getItem('playerName');
        return stored ? stored : '';
    });
    const [playerId, setPlayerId] = useState<number | undefined>(() => {
        const stored = localStorage.getItem('playerId');
        return stored ? Number(stored) : undefined;
    });
    const [isCreator, setIsCreator] = useState<boolean | undefined>();
    const [gameCode, setGameCode] = useState<string | undefined>(() => {
        return localStorage.getItem('gameCode') || undefined;
    });

    const [topCard, setTopCard] = useState<CardType | undefined>();
    const [playerCard, setPlayerCard] = useState<CardType | undefined>();
    const [score, setScore] = useState<number>(0);

    return (
        <GameContext.Provider
          value={{
              playerName,
              setPlayerName,
              isCreator,
              setIsCreator,
              gameCode,
              setGameCode,
              playerId,
              setPlayerId,
              topCard,
              setTopCard,
              playerCard,
              setPlayerCard,
              score,
              setScore,
          }}
        >
            {children}
       </GameContext.Provider>
   );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
