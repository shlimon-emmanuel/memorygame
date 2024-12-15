import React from 'react';

const Leaderboard = ({ scores }) => {
  return (
    <div className="leaderboard">
      <h2>Classement</h2>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Joueur</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{score.username}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard; 