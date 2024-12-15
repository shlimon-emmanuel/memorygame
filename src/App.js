import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Button from './components/Button';
import Card from './components/Card';
import Timer from './components/Timer';
import Score from './components/Score';
import Stats from './components/Stats';
import './styles.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isGameWon, setIsGameWon] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [scores, setScores] = useState([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [timer, setTimer] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [maxTime] = useState(60); // 60 secondes pour finir le jeu
  const [moves, setMoves] = useState(0);
  const [stats, setStats] = useState({
    gamesPlayed: 0,
    bestScore: 0,
    averageTime: 0
  });

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    let interval;
    if (gameStarted && !isGameWon && !gameOver) {
      interval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer >= maxTime) {
            setGameOver(true);
            return maxTime;
          }
          return prevTimer + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, isGameWon, gameOver, maxTime]);

  const initializeGame = () => {
    const initialCards = [
      { id: 1, image: '🍎', isFlipped: false },
      { id: 2, image: '🍌', isFlipped: false },
      { id: 3, image: '🍇', isFlipped: false },
      { id: 4, image: '🍓', isFlipped: false },
      { id: 5, image: '🍎', isFlipped: false },
      { id: 6, image: '🍌', isFlipped: false },
      { id: 7, image: '🍇', isFlipped: false },
      { id: 8, image: '🍓', isFlipped: false },
    ];
    setCards(shuffleArray(initialCards));
    setFlippedCards([]);
    setMatchedCards([]);
    setIsGameWon(false);
    setGameOver(false);
    setTimer(0);
    setGameStarted(true);
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || matchedCards.includes(index)) return;
    
    setMoves(prev => prev + 1);
    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);
    
    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].image === cards[secondIndex].image) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
        if (matchedCards.length + 2 === cards.length) {
          setIsGameWon(true);
        }
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <div className="memory-game">
      <Title text="Jeu de Memory" />
      <div className="game-info">
        <Timer seconds={timer} maxTime={maxTime} />
        <Score moves={moves} timeElapsed={timer} />
      </div>
      <Button onClick={initializeGame} text="Relancer la partie" />
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      {isGameWon && (
        <div className="game-end">
          <p className="win-message">Félicitations, vous avez gagné !</p>
          <Stats {...stats} />
        </div>
      )}
      {gameOver && <p className="game-over">Temps écoulé ! Game Over</p>}
    </div>
  );
};

export default App;
