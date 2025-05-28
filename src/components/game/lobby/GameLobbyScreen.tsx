import { FC } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface GameLobbyScreenProps {
  players: string[];
  gameCode: string;
  isCreator: boolean;
  playerName: string;
  onStartGame: () => void;
  isStartGamePending: boolean;
}

const GameLobbyScreen: FC<GameLobbyScreenProps> = ({
  players,
  gameCode,
  isCreator,
  playerName,
  onStartGame,
  isStartGamePending,
}) => (
  <div className="flex flex-col items-center w-full max-w-md mx-auto p-4">
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Game Lobby</CardTitle>
        <CardDescription>Game ID: {gameCode}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Players</h3>
          <div className="space-y-2">
            {players.map((player) => (
              <div
                key={player}
                className="flex justify-between items-center p-2 rounded-md bg-muted/30"
              >
                <div className="flex items-center font-medium">{player}</div>
                <div>
                  {player === playerName && isCreator ? (
                    <span className="text-sm text-yellow-600 font-medium">
                      Creator player
                    </span>
                  ) : (
                    <span className="text-sm text-green-600 font-medium">
                      Player
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        {isCreator && (
          <Button className="w-full" onClick={onStartGame}>
            {isStartGamePending ? 'Starting...' : 'Start Game'}
          </Button>
        )}
      </CardFooter>
    </Card>
  </div>
);

export default GameLobbyScreen;
