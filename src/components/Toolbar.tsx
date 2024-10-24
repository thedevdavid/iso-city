import React from 'react';
import { TileType } from '../types/game';
import { Building, House, Factory, TrafficCone } from 'lucide-react';

interface ToolbarProps {
  selectedTool: TileType;
  onSelectTool: (tool: TileType) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ selectedTool, onSelectTool }) => {
  const tools: { type: TileType; icon: React.ReactNode; label: string }[] = [
    { type: 'residential', icon: <House className="w-6 h-6" />, label: 'Residential' },
    { type: 'commercial', icon: <Building className="w-6 h-6" />, label: 'Commercial' },
    { type: 'industrial', icon: <Factory className="w-6 h-6" />, label: 'Industrial' },
    { type: 'road', icon: <TrafficCone className="w-6 h-6" />, label: 'Road' },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 flex gap-2">
      {tools.map(({ type, icon, label }) => (
        <button
          key={type}
          onClick={() => onSelectTool(type)}
          className={`p-2 rounded-lg flex flex-col items-center ${
            selectedTool === type ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
          }`}
          title={label}
        >
          {icon}
          <span className="text-xs mt-1">{label}</span>
        </button>
      ))}
    </div>
  );
};