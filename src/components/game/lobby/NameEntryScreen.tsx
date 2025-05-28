import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FC } from 'react';

interface NameEntryScreenProps {
  playerName: string;
  setPlayerName: (name: string) => void;
  createGame: (name: string) => void;
  isCreating: boolean;
  onJoinClick: () => void;
}

const NameEntryScreen: FC<NameEntryScreenProps> = ({
  playerName,
  setPlayerName,
  createGame,
  isCreating,
  onJoinClick,
}) => (
  <div className="flex flex-col items-center justify-center min-h-[70vh] w-full p-4">
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create or Join a Game</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label htmlFor="player-name">Your Name</Label>
          <Input
            id="player-name"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button
          className="w-full"
          variant="outline"
          disabled={!playerName}
          onClick={() => createGame(playerName)}
        >
          {isCreating ? 'Creating...' : 'Create New Game'}
        </Button>
        <Button className="w-full" disabled={!playerName} onClick={onJoinClick}>
          Join Game
        </Button>
      </CardFooter>
    </Card>
  </div>
);

export default NameEntryScreen;
