export type TileType = 'empty' | 'residential' | 'commercial' | 'industrial' | 'road';

export interface Tile {
  id: string;
  type: TileType;
  x: number;
  y: number;
  playerId: string;
}

export interface Player {
  id: string;
  name: string;
  color: string;
  money: number;
}

export interface GameState {
  tiles: Tile[];
  players: Map<string, Player>;
  currentPlayer: Player | null;
}