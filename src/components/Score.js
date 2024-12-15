import React from 'react';

const Score = ({ moves, timeElapsed }) => {
  const calculateScore = () => {
    const baseScore = 1000;
    const timeDeduction = timeElapsed * 2;
    const moveDeduction = moves * 10;
    return Math.max(0, baseScore - timeDeduction - moveDeduction);
  };

  return (
    <div className="score-container">
      <div className="score-item">
        <span>Coups joués :</span>
        <span className="score-value">{moves}</span>
      </div>
      <div className="score-item">
        <span>Temps écoulé :</span>
        <span className="score-value">{timeElapsed}s</span>
      </div>
      <div className="score-item">
        <span>Score :</span>
        <span className="score-value">{calculateScore()}</span>
      </div>
    </div>
  );
};

export default Score;
