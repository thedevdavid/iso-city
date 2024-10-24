import { create } from 'zustand';
import { GameState, Tile, Player, TileType } from '../types/game';
import { mockTiles, mockPlayer } from '../lib/mockData';

interface GameStore extends GameState {
  placeTile: (x: number, y: number, type: TileType) => void;
  joinGame: (playerName: string) => Promise<void>;
  leaveGame: () => Promise<void>;
}

export const useGameStore = create<GameStore>((set, get) => ({
  tiles: mockTiles,
  players: new Map([[mockPlayer.id, mockPlayer]]),
  currentPlayer: mockPlayer,

  placeTile: async (x: number, y: number, type: TileType) => {
    const { currentPlayer } = get();
    if (!currentPlayer) return;

    const newTile: Tile = {
      id: `${x}-${y}`,
      type,
      x,
      y,
      playerId: currentPlayer.id,
    };

    set(state => ({
      tiles: [...state.tiles.filter(t => t.id !== newTile.id), newTile]
    }));
  },

  joinGame: async (playerName: string) => {
    // Mock implementation - do nothing as we're using mock data
  },

  leaveGame: async () => {
    // Mock implementation - do nothing as we're using mock data
  },
}));