import React, { useState } from 'react';
import { IsometricGrid } from './components/IsometricGrid';
import { Toolbar } from './components/Toolbar';
import { useGameStore } from './store/gameStore';
import { TileType } from './types/game';

function App() {
  const [selectedTool, setSelectedTool] = useState<TileType>('residential');
  const { currentPlayer } = useGameStore();

  return (
    <div className="w-screen h-screen bg-gray-100 overflow-hidden relative">
      <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg z-10">
        <h1 className="text-xl font-bold mb-2">Iso City Builder</h1>
        {currentPlayer && (
          <div>
            <p>Player: {currentPlayer.name}</p>
            <p>Money: ${currentPlayer.money.toLocaleString()}</p>
          </div>
        )}
      </div>
      
      <div className="w-full h-full flex items-center justify-center">
        <IsometricGrid />
      </div>
      <Toolbar selectedTool={selectedTool} onSelectTool={setSelectedTool} />
    </div>
  );
}

export default App;