import React, { useState } from 'react';

const GameConfig = ({ onStartGame }) => {
  const [pairCount, setPairCount] = useState(4);

  return (
    <div className="game-config">
      <h2>Configuration de la partie</h2>
      <div className="config-option">
        <label>Nombre de paires à trouver :</label>
        <select value={pairCount} onChange={(e) => setPairCount(Number(e.target.value))}>
          <option value="4">4 paires</option>
          <option value="6">6 paires</option>
          <option value="8">8 paires</option>
          <option value="10">10 paires</option>
        </select>
      </div>
      <button onClick={() => onStartGame(pairCount)}>Commencer la partie</button>
    </div>
  );
};

export default GameConfig; 