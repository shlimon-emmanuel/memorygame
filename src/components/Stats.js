import React from 'react';

const Stats = ({ gamesPlayed, bestScore, averageTime }) => {
  return (
    <div className="stats-container">
      <h3>Statistiques</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-label">Parties jouées</span>
          <span className="stat-value">{gamesPlayed}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Meilleur score</span>
          <span className="stat-value">{bestScore}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Temps moyen</span>
          <span className="stat-value">{averageTime}s</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
