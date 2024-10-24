import { Tile, Player } from '../types/game';

export const mockTiles: Tile[] = [
  { id: '5-5', type: 'residential', x: 5, y: 5, playerId: 'player1' },
  { id: '5-6', type: 'commercial', x: 5, y: 6, playerId: 'player1' },
  { id: '6-5', type: 'industrial', x: 6, y: 5, playerId: 'player1' },
  { id: '6-6', type: 'road', x: 6, y: 6, playerId: 'player1' },
  { id: '7-5', type: 'residential', x: 7, y: 5, playerId: 'player1' },
  { id: '7-6', type: 'commercial', x: 7, y: 6, playerId: 'player1' },
];

export const mockPlayer: Player = {
  id: 'player1',
  name: 'Test Player',
  color: '#ff4444',
  money: 10000,
};