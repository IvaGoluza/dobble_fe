import React from 'react';
import { useGame } from '@/contexts/GameContext.tsx';
import { Button } from '@/components/ui/button.tsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { useGameScores } from '@/hooks/game/queries.ts';
import { Link, useNavigate } from 'react-router-dom';

const GameOverScreen: React.FC = () => {
  const { gameCode } = useGame();
  const { data: players, isPending } = useGameScores(gameCode);
  const navigate = useNavigate();

  const exitGame = () => {
    localStorage.removeItem('playerId');
    localStorage.removeItem('playerName');
    localStorage.removeItem('gameCode');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header
        className="py-4"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      >
        <div className=" px-8 mx-auto flex justify-between items-center">
          <Link to="/">
            <img src="/assets/logo.png" alt="Dobble" className="h-16" />
          </Link>
        </div>
      </header>

      <div className="flex flex-col items-center w-full max-w-md mx-auto p-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Game Over</CardTitle>
            <CardDescription>Final Scores</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isPending ? (
              <p>Loading results...</p>
            ) : (
              <div className="space-y-2">
                {players.map((player, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-3 rounded-md ${
                      index === 0
                        ? 'bg-amber-100 dark:bg-amber-800/30'
                        : 'bg-muted/30'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{index + 1}.</span>
                      <span className="font-medium">{player.name}</span>
                      {index === 0 && (
                        <span className="ml-2 text-amber-600">👑 Winner!</span>
                      )}
                    </div>
                    <span className="font-bold">{player.score} pts</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={exitGame}>
              Exit Game
            </Button>
          </CardFooter>
        </Card>
      </div>

      <footer className="p-4 border-t">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>💅🏼 Dobble - The fast-paced symbol matching game</p>
        </div>
      </footer>
    </div>
  );
};

export default GameOverScreen;
