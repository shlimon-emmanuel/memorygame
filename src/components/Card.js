import React from 'react';

const Card = ({ image, isFlipped, onClick }) => {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
          <div className="card-back-pattern"></div>
        </div>
        <div className="card-back">
          <span>{image}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;