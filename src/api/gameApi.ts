import axios from 'axios';
import {GameCreateResponse, GameJoinResponse, PlayerScoreResponse, TakeTopCardRequest} from '../types/game';

const API_BASE = 'http://localhost:8080/api/games';

export const createGame = async (creatorName: string): Promise<GameCreateResponse> => {
    const response = await axios.post<GameCreateResponse>(
        `${API_BASE}/create`,
        null,
        { params: { creatorName } }
    );
    return response.data;
};

export const joinGame = async (
    gameCode: string,
    playerName: string
): Promise<GameJoinResponse> => {
    const response = await axios.post<GameJoinResponse>(
        `${API_BASE}/${gameCode}/join`,
        null,
        { params: { playerName } }
    );
    console.log("response", response.data);
    return response.data;
};

export const getLobbyPlayers = async (gameCode: string): Promise<string[]> => {
    const response = await axios.get<{ players: string[] }>(
        `${API_BASE}/${gameCode}/lobby`
    );
    return response.data.players;
};

export const startGame = async (gameCode: string): Promise<void> => {
    await axios.post(`${API_BASE}/${gameCode}/start`);
};

export const takeTopCard = async ({gameCode, playerId, playerSymbol}: TakeTopCardRequest): Promise<void> => {
    await axios.post(
        `${API_BASE}/${gameCode}/take`,
        null,
        {
            params: {
                playerId,
                playerSymbol,
            },
        }
    );
};

export const getGameScores = async (gameCode: string): Promise<PlayerScoreResponse[]> => {
    const response = await axios.get<PlayerScoreResponse[]>(
        `${API_BASE}/${gameCode}/scores`
    );
    return response.data;
};
