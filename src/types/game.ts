export interface GameCreateResponse {
  gameCode: string;
  creatorPlayerId: number;
}

export interface GameJoinResponse {
  playerId: number;
}

export interface GameStartResponse {
  type: string;
  topCardId: number;
  topCardSymbols: string[];
  playerCardId: number;
  playerCardSymbols: string[];
  playerScore: number;
}

export interface CardType {
  id: number;
  symbols: string[];
}

export interface TakeTopCardRequest {
  gameCode: string;
  playerId: number;
  playerSymbol: string;
}

export interface PlayerScoreResponse {
  name: string;
  score: number;
}



