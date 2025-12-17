import React, { useState, useEffect, useCallback } from 'react';

const SnakeGame = ({ onClose }) => {
  const [snake, setSnake] = useState([[8, 8]]);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const gridSize = 20;

  // Generate random food position
  const generateFood = () => {
    const newFood = [
      Math.floor(Math.random() * gridSize),
      Math.floor(Math.random() * gridSize)
    ];
    return newFood;
  };

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      e.preventDefault();
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        case ' ':
          setIsPaused(!isPaused);
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, isPaused, onClose]);

  // Handle touch/swipe controls for mobile
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (!touchStartX || !touchStartY) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;

      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      // Determine swipe direction
      if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontal swipe
        if (diffX > 30 && direction !== 'RIGHT') {
          setDirection('LEFT');
        } else if (diffX < -30 && direction !== 'LEFT') {
          setDirection('RIGHT');
        }
      } else {
        // Vertical swipe
        if (diffY > 30 && direction !== 'DOWN') {
          setDirection('UP');
        } else if (diffY < -30 && direction !== 'UP') {
          setDirection('DOWN');
        }
      }

      touchStartX = 0;
      touchStartY = 0;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [direction]);

  // Game loop
  useEffect(() => {
    if (gameOver || isPaused) return;

    const moveSnake = () => {
      const newSnake = [...snake];
      const head = [...newSnake[0]];

      // Move head
      switch (direction) {
        case 'UP':
          head[0] -= 1;
          break;
        case 'DOWN':
          head[0] += 1;
          break;
        case 'LEFT':
          head[1] -= 1;
          break;
        case 'RIGHT':
          head[1] += 1;
          break;
        default:
          break;
      }

      // Check wall collision
      if (head[0] < 0 || head[0] >= gridSize || head[1] < 0 || head[1] >= gridSize) {
        setGameOver(true);
        return;
      }

      // Check self collision
      if (newSnake.some(segment => segment[0] === head[0] && segment[1] === head[1])) {
        setGameOver(true);
        return;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head[0] === food[0] && head[1] === food[1]) {
        setScore(score + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [snake, direction, food, gameOver, isPaused, score]);

  const resetGame = () => {
    setSnake([[8, 8]]);
    setFood([5, 5]);
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
  };

  return (
    <div className="snake-game-overlay" onClick={(e) => e.target.className === 'snake-game-overlay' && onClose()}>
      <div className="snake-game-container">
        <div className="snake-game-header">
          <h2>🐍 Snake Game</h2>
          <button className="snake-close-btn" onClick={onClose}>✕</button>
        </div>
        
        <div className="snake-game-info">
          <div className="snake-score">Score: {score}</div>
          <div className="snake-controls">
            <span className="snake-control-desktop">Arrow Keys: Move</span>
            <span className="snake-control-mobile">Swipe: Move</span>
            <span>Tap Board: Pause</span>
            <span>✕: Exit</span>
          </div>
        </div>

        <div 
          className="snake-game-board"
          onClick={() => setIsPaused(!isPaused)}
          role="button"
          aria-label="Game board - tap to pause"
        >
          {[...Array(gridSize)].map((_, row) => (
            <div key={row} className="snake-row">
              {[...Array(gridSize)].map((_, col) => {
                const isSnake = snake.some(segment => segment[0] === row && segment[1] === col);
                const isHead = snake[0][0] === row && snake[0][1] === col;
                const isFood = food[0] === row && food[1] === col;
                
                return (
                  <div
                    key={col}
                    className={`snake-cell ${isSnake ? 'snake' : ''} ${isHead ? 'snake-head' : ''} ${isFood ? 'food' : ''}`}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {gameOver && (
          <div className="snake-game-over">
            <h3>Game Over!</h3>
            <p>Final Score: {score}</p>
            <button className="snake-retry-btn" onClick={resetGame}>Play Again</button>
          </div>
        )}

        {isPaused && !gameOver && (
          <div className="snake-paused">
            <h3>⏸️ Paused</h3>
            <p>Press SPACE to continue</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SnakeGame;

