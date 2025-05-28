import {useQuery, UseQueryOptions} from "@tanstack/react-query";
import {getGameScores, getLobbyPlayers} from "@/api/gameApi.ts";
import {PlayerScoreResponse} from "@/types/game.ts";

export const useLobbyPlayers = (
    gameCode: string,
    options?: UseQueryOptions<string[], Error>
) => {
    return useQuery<string[], Error>({
        queryKey: ['lobbyPlayers', gameCode],
        queryFn: () => getLobbyPlayers(gameCode),
        enabled: !!gameCode,
        ...options,
    });
};

export const useGameScores = (
    gameCode: string,
    options?: UseQueryOptions<PlayerScoreResponse[], Error>
) => {
    return useQuery<PlayerScoreResponse[], Error>({
        queryKey: ['gameScores', gameCode],
        queryFn: () => getGameScores(gameCode),
        enabled: !!gameCode,
        ...options,
    });
};