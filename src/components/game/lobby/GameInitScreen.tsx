import { FC } from 'react';
import { useGameInitScreen } from './useGameInitScreen.ts';
import NameEntryScreen from './NameEntryScreen.tsx';
import JoinGameScreen from './JoinGameScreen.tsx';
import GameLobbyScreen from './GameLobbyScreen.tsx';

const GameInitScreen: FC = () => {
  const {
    isCreator,
    setIsCreator,
    playerName,
    setPlayerName,
    gameCodeInput,
    setGameCodeInput,
    gameCode,
    joinGame,
    players,
    createGame,
    isCreateGamePending,
    startGame,
    isStartGamePending,
  } = useGameInitScreen();

  if (isCreator === undefined) {
    return (
      <NameEntryScreen
        playerName={playerName}
        setPlayerName={setPlayerName}
        createGame={createGame}
        isCreating={isCreateGamePending}
        onJoinClick={() => setIsCreator(false)}
      />
    );
  }

  if (isCreator === false && !gameCode) {
    return (
      <JoinGameScreen
        gameCodeInput={gameCodeInput}
        setGameCodeInput={setGameCodeInput}
        onJoin={() => joinGame({ gameCode: gameCodeInput, playerName })}
        disabled={!gameCodeInput}
      />
    );
  }

  return (
    <GameLobbyScreen
      players={players}
      gameCode={gameCode}
      isCreator={isCreator}
      playerName={playerName}
      onStartGame={() => startGame(gameCode)}
      isStartGamePending={isStartGamePending}
    />
  );
};

export default GameInitScreen;
