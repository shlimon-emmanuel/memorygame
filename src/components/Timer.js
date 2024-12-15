import React from 'react';

const Timer = ({ seconds, maxTime }) => {
  const timeLeft = maxTime - seconds;
  return (
    <div className="timer">
      <p>Temps restant : {timeLeft} secondes</p>
      <div className="timer-bar">
        <div 
          className="timer-progress" 
          style={{ width: `${(timeLeft / maxTime) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Timer;
