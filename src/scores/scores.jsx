import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; // Adjust path to match your project structure
import './scores.css';

export function Scores({ gameId }) {
  const [scores, setScores] = useState([]);
  const [selectedGame, setSelectedGame] = useState(gameId || 'tetris'); // Default to 'tetris'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // List of available games (extend as needed)
  const games = [
    { id: 'tetris', name: 'Tetris' },
    { id: 'galaga', name: 'Galaga' }, // Replace with your Godot game's name
  ];

  // Fetch scores for the selected game
  useEffect(() => {
    const fetchScores = async () => {
      setLoading(true);
      setError(null);
      try {
        // Query Firestore for top 10 scores for the selected game
        const q = query(
          collection(db, 'scores'),
          where('gameId', '==', selectedGame),
          orderBy('score', 'desc'),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        const fetchedScores = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Update state and localStorage
        setScores(fetchedScores);
        localStorage.setItem(`scores_${selectedGame}`, JSON.stringify(fetchedScores));
      } catch (err) {
        console.error('Error fetching scores:', err);
        setError('Failed to load scores. Showing cached scores if available.');
        // Fallback to localStorage
        const cachedScores = localStorage.getItem(`scores_${selectedGame}`);
        if (cachedScores) {
          setScores(JSON.parse(cachedScores));
        } else {
          setScores([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, [selectedGame]); // Re-run when selectedGame changes

  // Handle game selection change
  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
  };

  // Render the leaderboard
  const players = scores.length ? (
    scores
      .sort((a, b) => b.score - a.score) // Ensure sorting (though Firestore query should already sort)
      .map((score, i) => (
        <li key={score.id}>
          <span className="player-name">{i + 1}. {score.username}</span>
          <span className="score">{score.score}</span>
        </li>
      ))
  ) : (
    <li>
      <span className="player-name">Nobody has scored yet!</span>
      <span className="score">Be the first!</span>
    </li>
  );

  return (
    <div className="container-fluid">
      <div className="Leaderboard">
        <h1>Leaderboard</h1>
        {/* Game selection dropdown */}
        <div className='drop'>
          <label className='gameselect' htmlFor="gameSelect">
            Select Game:
          </label>
          <select
           
            id="gameSelect"
            value={selectedGame}
            onChange={handleGameChange}
            style={{ padding: '5px', fontSize: '16px' }}
          >
            {games.map((game) => (
              <option key={game.id} value={game.id}>
                {game.name}
              </option>
            ))}
          </select>
        </div>
        {/* Loading and error states */}
        {loading && <p>Loading scores...</p>}
        {error && <p className="error" style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        {/* Leaderboard list */}
        <ol>{players}</ol>
      </div>
    </div>
  );
}