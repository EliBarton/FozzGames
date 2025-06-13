import { useState, useEffect } from 'react';
import CommentsSection from '../gamecomments/comments';

// Define tetromino shapes (7 standard Tetris pieces) with their characters
const tetrominoes = [
  { shape: [[1, 1, 1, 1]], char: '#', color: 'text-cyan-500' }, // I
  { shape: [[1, 1], [1, 1]], char: '#', color: 'text-yellow-500' }, // O
  { shape: [[0, 1, 0], [1, 1, 1]], char: '#', color: 'text-purple-500' }, // T
  { shape: [[0, 1, 1], [1, 1, 0]], char: '#', color: 'text-green-500' }, // S
  { shape: [[1, 1, 0], [0, 1, 1]], char: '#', color: 'text-red-500' }, // Z
  { shape: [[1, 0, 0], [1, 1, 1]], char: '#', color: 'text-blue-500' }, // J
  { shape: [[0, 0, 1], [1, 1, 1]], char: '#', color: 'text-orange-500' } // L
];

// Helper to rotate a tetromino shape 90 degrees clockwise
function rotateShape(shape) {
  const rows = shape.length;
  const cols = shape[0].length;
  const newShape = Array(cols).fill().map(() => Array(rows).fill(0));
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      newShape[c][rows - 1 - r] = shape[r][c];
    }
  }
  return newShape;
}

// Helper to create an empty 20x10 grid
function createEmptyGrid() {
  return Array(20).fill().map(() => Array(10).fill(null));
}

// Helper to check if a piece can be placed at a position
function canPlacePiece(grid, piece, posX, posY) {
  for (let r = 0; r < piece.shape.length; r++) {
    for (let c = 0; c < piece.shape[0].length; c++) {
      if (piece.shape[r][c]) {
        const gridX = posX + c;
        const gridY = posY + r;
        if (gridX < 0 || gridX >= 10 || gridY >= 20 || (gridY >= 0 && grid[gridY][gridX])) {
          return false;
        }
      }
    }
  }
  return true;
}

// Helper to merge a piece into the grid
function mergePiece(grid, piece, posX, posY) {
  const newGrid = grid.map(row => [...row]);
  for (let r = 0; r < piece.shape.length; r++) {
    for (let c = 0; c < piece.shape[0].length; c++) {
      if (piece.shape[r][c] && posY + r >= 0) {
        newGrid[posY + r][posX + c] = piece.char; // Use piece character
      }
    }
  }
  return newGrid;
}

// Helper to clear full rows and return cleared count
function clearRows(grid) {
  let cleared = 0;
  const newGrid = grid.filter(row => row.some(cell => !cell));
  cleared = 20 - newGrid.length;
  while (newGrid.length < 20) {
    newGrid.unshift(Array(10).fill(null));
  }
  return { newGrid, cleared };
}

// Helper to render grid as clean ASCII text
function renderGridAsText(grid, currentPiece, piecePos) {
  const displayGrid = grid.map(row => [...row]); // Create a copy of the grid
  if (currentPiece) {
    for (let r = 0; r < currentPiece.shape.length; r++) {
      for (let c = 0; c < currentPiece.shape[0].length; c++) {
        if (currentPiece.shape[r][c] && piecePos.y + r >= 0 && piecePos.y + r < 20) {
          displayGrid[piecePos.y + r][piecePos.x + c] = currentPiece.char; // Overlay current piece
        }
      }
    }
  }
  // Convert to ASCII with proper spacing
  return '|' + displayGrid
    .map(row => row.map(cell => cell || ' ').join(' '))
    .join('|\n|') + '|';
}

export const Tetris = () => {
  // State for the game grid (20x10)
  const [grid, setGrid] = useState(createEmptyGrid());
  // State for the current piece (shape, char, color)
  const [currentPiece, setCurrentPiece] = useState(null);
  // State for piece position (x, y coordinates)
  const [piecePos, setPiecePos] = useState({ x: 0, y: 0 });
  // State for score (100 points per row cleared)
  const [score, setScore] = useState(0);
  // State for game over status
  const [gameOver, setGameOver] = useState(false);

  // Initialize a new piece at the top center
  function spawnPiece() {
    const piece = tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
    const x = Math.floor((10 - piece.shape[0].length) / 2); // Center horizontally
    const y = -piece.shape.length; // Start above grid
    if (!canPlacePiece(grid, piece, x, y)) {
      setGameOver(true);
      return null;
    }
    setCurrentPiece(piece);
    setPiecePos({ x, y });
    return piece; // Return the piece for use in the game loop
  }

  // Handle game loop for piece falling
  useEffect(() => {
    if (!currentPiece && !gameOver) {
      spawnPiece();
    }
    if (gameOver) return;

    const interval = setInterval(() => {
      setPiecePos(prev => {
        const newPos = { x: prev.x, y: prev.y + 1 };
        if (canPlacePiece(grid, currentPiece, newPos.x, newPos.y)) {
          return newPos;
        } else {
          // Lock piece in place
          const newGrid = mergePiece(grid, currentPiece, prev.x, prev.y);
          const { newGrid: updatedGrid, cleared } = clearRows(newGrid);
          setGrid(updatedGrid);
          setScore(score => score + cleared * 100);
          const newPiece = spawnPiece();
          if (newPiece) {
            return { x: 0, y: -newPiece.shape.length }; // Reset for next piece
          }
          return prev; // Stay at current position if no new piece
        }
      });
    }, 500); // Fall every 500ms

    return () => clearInterval(interval);
  }, [currentPiece, grid, gameOver]);

  // Handle moving the piece left or right
  function movePiece(dx) {
    if (gameOver || !currentPiece) return;
    setPiecePos(prevPos => {
      const newPos = { x: prevPos.x + dx, y: prevPos.y }; // Use current y
      if (canPlacePiece(grid, currentPiece, newPos.x, newPos.y)) {
        return newPos;
      }
      return prevPos; // Stay at current position if move is invalid
    });
  }

  // Handle rotating the piece
  function rotatePiece() {
    if (gameOver || !currentPiece) return;
    const newShape = rotateShape(currentPiece.shape);
    const newPiece = { ...currentPiece, shape: newShape, char: currentPiece.char, color: currentPiece.color }; // Ensure all properties are copied
    let newX = piecePos.x;
    let newY = piecePos.y;

    // First, try rotating in place
    if (canPlacePiece(grid, newPiece, newX, newY)) {
      setCurrentPiece(newPiece);
      return;
    }

    // If rotation in place fails, try minimal adjustments
    const maxAdjust = 5; // Limit adjustment attempts
    let adjustX = 0;
    let adjustY = 0;
    let attempts = 0;

    while (attempts < maxAdjust) {
      if (!canPlacePiece(grid, newPiece, newX + adjustX, newY + adjustY)) {
        // Try adjusting left or up
        if (adjustX > -maxAdjust && !canPlacePiece(grid, newPiece, newX + (adjustX - 1), newY + adjustY)) {
          adjustX--;
        } else if (adjustY > -maxAdjust && !canPlacePiece(grid, newPiece, newX + adjustX, newY + (adjustY - 1))) {
          adjustY--;
        } else {
          break; // No more valid adjustments
        }
        attempts++;
      } else {
        break; // Valid position found
      }
    }

    // Use the adjusted position if valid, otherwise stay at current position
    const finalX = newX + adjustX;
    const finalY = newY + adjustY;
    if (canPlacePiece(grid, newPiece, finalX, finalY)) {
      setPiecePos({ x: finalX, y: finalY });
      setCurrentPiece(newPiece);
    }
  }

  // Handle instant drop
  function dropPiece() {
    if (gameOver || !currentPiece) return;
    setPiecePos(prevPos => {
      let newY = prevPos.y; // Start with current y
      while (canPlacePiece(grid, currentPiece, prevPos.x, newY + 1)) {
        newY++;
      }
      const newGrid = mergePiece(grid, currentPiece, prevPos.x, newY);
      const { newGrid: updatedGrid, cleared } = clearRows(newGrid);
      setGrid(updatedGrid);
      setScore(score => score + cleared * 100);
      const newPiece = spawnPiece();
      if (newPiece) {
        return { x: prevPos.x, y: -newPiece.shape.length }; // Reset with current x
      }
      return prevPos; // Stay at current position if no new piece
    });
  }

  // Handle game reset
  function resetGame() {
    setGrid(createEmptyGrid());
    setCurrentPiece(null);
    setPiecePos({ x: 0, y: 0 });
    setScore(0);
    setGameOver(false);
  }

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver || !currentPiece) return;
      switch (e.key) {
        case 'ArrowLeft':
          movePiece(-1);
          break;
        case 'ArrowRight':
          movePiece(1);
          break;
        case 'ArrowUp':
            e.preventDefault()
          rotatePiece();
          break;
        case 'ArrowDown':
            e.preventDefault()
          dropPiece();
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPiece, gameOver]);

  return (
    <>
      <div className="flex flex-col items-center p-4">
        {/* Game header with score and reset button */}
        <div className="mb-4 flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white">Tetris</h1>
          <div className="text-xl text-white">Score: {score}</div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={resetGame}
          >
            Reset
          </button>
        </div>
        {/* Text-based game board */}
        <pre
          className="font-mono text-lg bg-gray-800 text-white p-4 rounded border border-gray-600 whitespace-pre"
        >
          {renderGridAsText(grid, currentPiece, piecePos)}
        </pre>
        {/* Control instructions */}
        <div className="mt-4 text-white text-center">
          <p>Use Arrow Keys to Play:</p>
          <p>- Left/Right: Move</p>
          <p>- Up: Rotate</p>
          <p>- Down: Drop</p>
        </div>
        {/* Game over message */}
        {gameOver && (
          <div className="mt-4 text-xl text-red-500">Game Over!</div>
        )}
      </div>
      <div>
        <CommentsSection gameId="tetris" />
      </div>
    </>
  );
};