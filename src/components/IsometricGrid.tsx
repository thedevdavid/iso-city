import React from 'react';
import { TileComponent } from './TileComponent';
import { useGameStore } from '../store/gameStore';

const GRID_SIZE = 20;

export const IsometricGrid: React.FC = () => {
  const { tiles } = useGameStore();

  return (
    <div 
      className="relative"
      style={{
        transform: 'rotateX(60deg) rotateZ(-45deg)',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <div className="grid" style={{ gap: '2px' }}>
        {Array.from({ length: GRID_SIZE }, (_, y) => (
          <div key={y} className="flex" style={{ gap: '2px' }}>
            {Array.from({ length: GRID_SIZE }, (_, x) => {
              const tile = tiles.find(t => t.x === x && t.y === y);
              return <TileComponent key={`${x}-${y}`} tile={tile} x={x} y={y} />;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};