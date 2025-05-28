import { useGame } from '@/contexts/GameContext.tsx';
import { useStomp } from '@/contexts/StompContext.tsx';
import { useNavigate } from 'react-router-dom';
import { useTakeTopCard } from '@/hooks/game/mutations.ts';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { GameStartResponse } from '@/types/game.ts';

export const useGameBoardScreen = () => {
  const {
    gameCode,
    playerId,
    score,
    topCard,
    setTopCard,
    playerCard,
    setPlayerCard,
    playerName,
    setScore,
  } = useGame();
  const { subscribe, connected } = useStomp();
  const navigate = useNavigate();

  const { mutate: takeTopCard } = useTakeTopCard({
    onSuccess: () => {
      console.log('The top card is taken!');
    },
    onError: (err) => {
      console.error('Failed to take the top card. Move faster!', err);
    },
  });

  const onSymbolClick = (symbol: string) => {
    if (
      topCard.symbols.includes(symbol) &&
      playerCard.symbols.includes(symbol)
    ) {
      console.log(symbol);
      console.log('We have a match...but were you fast enough?');
      takeTopCard({
        gameCode: gameCode,
        playerId: playerId,
        playerSymbol: symbol,
      });
    }
  };

  useEffect(() => {
    if (!connected || !gameCode) return;

    const unsubscribe = subscribe(`/topic/game/${gameCode}`, (data) => {
      switch (data.type) {
        case 'card_won':
          console.log('Card taken by:', data.winnerName);
          console.log('New top card ID:', data.topCardId);
          console.log('New top card symbols:', data.topCardSymbols);

          setTopCard({ id: data.topCardId, symbols: data.topCardSymbols });
          if (playerName === data.winnerName) {
            setPlayerCard({
              id: data.prevTopCardId,
              symbols: data.prevTopCardSymbols,
            });
            setScore((prevScore: number) => prevScore + 1);
            toast.success('The card is yours! ⚡️👏🏼🎉✨', {
              duration: 1000,
            });
          } else {
            toast.error(
              'Too late... ' + data.winnerName + ' got the card! 😴👀',
              {
                duration: 1000,
              }
            );
          }
          break;

        case 'game_over':
          console.log(data.message);
          navigate('/gameOver');
          break;

        default:
          console.warn('Unknown message type:', data.type);
      }
    });

    return () => unsubscribe();
  }, [subscribe, connected, gameCode]);

  useEffect(() => {
    if (!connected || !gameCode || !playerId) return;

    // Subscribe to GAME RESUME message
    const unsubscribe = subscribe(
      `/topic/game/${gameCode}/player/${playerId}`,
      (data: GameStartResponse) => {
        if (data.type === 'reconnect_state') {
          console.log('Game Resumed:', data);
          setPlayerCard({
            id: data.playerCardId,
            symbols: data.playerCardSymbols,
          });
          setTopCard({ id: data.topCardId, symbols: data.topCardSymbols });
          setScore(data.playerScore);
        }
      }
    );

    return () => unsubscribe();
  }, [subscribe, connected, gameCode, playerId]);

  return {
    gameCode,
    playerId,
    playerName,
    score,
    topCard,
    playerCard,
    onSymbolClick,
  };
};
