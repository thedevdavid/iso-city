import React from 'react';
import { Tile, TileType } from '../types/game';
import { useGameStore } from '../store/gameStore';
import { Building, House, Factory, TrafficCone } from 'lucide-react';

interface TileProps {
  tile?: Tile;
  x: number;
  y: number;
}

const TILE_SIZE = 64;

const TileIcons: Record<TileType, React.ReactNode> = {
  empty: null,
  residential: <House className="w-8 h-8 text-blue-500" />,
  commercial: <Building className="w-8 h-8 text-green-500" />,
  industrial: <Factory className="w-8 h-8 text-yellow-500" />,
  road: <TrafficCone className="w-8 h-8 text-gray-500" />,
};

export const TileComponent: React.FC<TileProps> = ({ tile, x, y }) => {
  const { placeTile, currentPlayer } = useGameStore();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = () => {
    if (!currentPlayer) return;
    placeTile(x, y, selectedTool);
  };

  return (
    <div
      className="relative cursor-pointer transition-all duration-200"
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE,
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`absolute inset-0 border border-gray-300 ${
          tile ? 'bg-white' : 'bg-gray-100'
        } ${isHovered ? 'brightness-110' : ''}`}
        style={{
          transform: isHovered ? 'translateZ(4px)' : 'none',
          transition: 'transform 0.2s ease-in-out',
        }}
      >
        {tile && (
          <div className="absolute inset-0 flex items-center justify-center">
            {TileIcons[tile.type]}
          </div>
        )}
      </div>
    </div>
  );
};