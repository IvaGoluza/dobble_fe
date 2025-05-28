import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStomp } from '@/contexts/StompContext.tsx';
import { useGame } from '@/contexts/GameContext.tsx';
import { useLobbyPlayers } from '@/hooks/game/queries.ts';
import {
  useCreateGame,
  useJoinGame,
  useStartGame,
} from '@/hooks/game/mutations.ts';
import { GameCreateResponse, GameStartResponse } from '@/types/game.ts';

export const useGameInitScreen = () => {
  const [isCreator, setIsCreator] = useState<boolean | undefined>(undefined);
  const [players, setPlayers] = useState<string[]>([]);
  const [gameCodeInput, setGameCodeInput] = useState('');
  const navigate = useNavigate();
  const { subscribe, connected } = useStomp();
  const {
    playerName,
    setPlayerName,
    playerId,
    setPlayerId,
    gameCode,
    setGameCode,
    setPlayerCard,
    setTopCard,
    setScore,
  } = useGame();
  const { data: initLobbyPlayers } = useLobbyPlayers(gameCode);

  const { mutate: createGame, isPending: isCreateGamePending } = useCreateGame({
    onSuccess: (data: GameCreateResponse) => {
      setPlayerId(data.creatorPlayerId);
      setGameCode(data.gameCode);
      setIsCreator(true);
      localStorage.setItem('playerId', data.creatorPlayerId.toString());
      localStorage.setItem('playerName', playerName);
      localStorage.setItem('gameCode', data.gameCode);
    },
  });

  const { mutate: joinGame } = useJoinGame({
    onSuccess: (data) => {
      setPlayerId(data.playerId);
      setGameCode(gameCodeInput);
      setIsCreator(false);
      localStorage.setItem('playerId', data.playerId.toString());
      localStorage.setItem('playerName', playerName);
      localStorage.setItem('gameCode', gameCodeInput);
    },
  });

  const { mutate: startGame, isPending: isStartGamePending } = useStartGame({
    onSuccess: () => {
      console.log('Game started!');
    },
    onError: (err) => {
      console.error('Failed to start game', err);
    },
  });

  useEffect(() => {
    if (initLobbyPlayers) {
      setPlayers(initLobbyPlayers);
    }
  }, [initLobbyPlayers]);

  useEffect(() => {
    if (!connected || !gameCode) return;

    const unsubscribe = subscribe(`/topic/game/${gameCode}/lobby`, (data) => {
      setPlayers(data.players);
    });

    return () => unsubscribe();
  }, [subscribe, connected, gameCode]);

  useEffect(() => {
    if (!connected || !gameCode || !playerId) return;

    const unsubscribe = subscribe(
      `/topic/game/${gameCode}/player/${playerId}`,
      (data: GameStartResponse) => {
        if (data.type === 'reconnect_state' || data.type === 'game_start') {
          setPlayerCard({
            id: data.playerCardId,
            symbols: data.playerCardSymbols,
          });
          setTopCard({ id: data.topCardId, symbols: data.topCardSymbols });
          setScore(data.playerScore);
          navigate('/game');
        }
      }
    );

    return () => unsubscribe();
  }, [subscribe, connected, gameCode, playerId]);

  return {
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
  };
};
