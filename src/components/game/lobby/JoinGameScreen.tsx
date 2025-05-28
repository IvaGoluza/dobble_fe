import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FC } from 'react';

interface JoinGameScreenProps {
  gameCodeInput: string;
  setGameCodeInput: (value: string) => void;
  onJoin: () => void;
  disabled: boolean;
}

const JoinGameScreen: FC<JoinGameScreenProps> = ({
  gameCodeInput,
  setGameCodeInput,
  onJoin,
  disabled,
}) => (
  <div className="flex flex-col items-center w-full max-w-md mx-auto p-4">
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Join the Game</CardTitle>
        <CardDescription>
          Play Dobble with friends. Join the game!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="game-id">Game ID</Label>
          <Input
            id="game-id"
            placeholder="Enter game ID"
            value={gameCodeInput}
            onChange={(e) => setGameCodeInput(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button className="w-full" onClick={onJoin} disabled={disabled}>
          Join Game
        </Button>
      </CardFooter>
    </Card>
  </div>
);

export default JoinGameScreen;
