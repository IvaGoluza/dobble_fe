import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import {createGame, joinGame, startGame, takeTopCard} from '@/api/gameApi.ts';
import {GameCreateResponse, GameJoinResponse, TakeTopCardRequest} from '@/types/game.ts';

export const useCreateGame = (
    options?: UseMutationOptions<GameCreateResponse, Error, string>
) =>
    useMutation<GameCreateResponse, Error, string>({
        mutationFn: createGame,
        ...options,
    });

export const useJoinGame = (
    options?: UseMutationOptions<GameJoinResponse, Error, { gameCode: string; playerName: string }>
) =>
    useMutation<GameJoinResponse, Error, { gameCode: string; playerName: string }>({
        mutationFn: ({ gameCode, playerName }) => joinGame(gameCode, playerName),
        ...options,
        onError: ( error: Error) => {console.log(error)}
    });

export const useStartGame = (
    options?: UseMutationOptions<void, Error, string>
) =>
    useMutation<void, Error, string>({
        mutationFn: (gameCode: string) => startGame(gameCode),
        ...options,
    });

export const useTakeTopCard = (
    options?: UseMutationOptions<void, Error, TakeTopCardRequest>
) => {
    return useMutation({
        mutationFn: (takeTopCardRequest: TakeTopCardRequest) => takeTopCard(takeTopCardRequest),
        ...options
    });
};