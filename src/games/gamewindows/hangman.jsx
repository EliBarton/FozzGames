import CommentsSection from '../gamecomments/comments';
import React, { useState } from 'react';

const wordList = ['react', 'javascript', 'hangman', 'programming', 'developer',
    'utah', 'yellow', 'styx', 'scrabble', 'donuts', 'establishment', 'krustykrab',
    'capitalism', 'incomprehensible'
]; // List of words to choose from

export const Hangman = () => {
    const [wordToGuess, setWordToGuess] = useState(() => wordList[Math.floor(Math.random() * wordList.length)]); // The word to guess, chosen randomly
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [incorrectGuesses, setIncorrectGuesses] = useState(0);
    const maxIncorrectGuesses = 6; // Maximum incorrect guesses allowed

    const hangmanStages = [
        `
          +---+
          |   |
              |
              |
              |
              |
        =========`,
        `
          +---+
          |   |
          O   |
              |
              |
              |
        =========`,
        `
          +---+
          |   |
          O   |
          |   |
              |
              |
        =========`,
        `
          +---+
          |   |
          O   |
         /|   |
              |
              |
        =========`,
        `
          +---+
          |   |
          O   |
         /|\\  |
              |
              |
        =========`,
        `
          +---+
          |   |
          O   |
         /|\\  |
         /    |
              |
        =========`,
        `
          +---+
          |   |
          O   |
         /|\\  |
         / \\  |
              |
        =========`,
    ];

    const displayWord = wordToGuess
        .split('')
        .map(letter => (guessedLetters.includes(letter) ? letter.toUpperCase() : '_'))
        .join(' ');

    const handleGuess = () => {
        if (guess.length === 1 && guess.match(/[a-z]/)) {
            if (!guessedLetters.includes(guess)) { // Prevent guessing the same letter twice
                setGuessedLetters([...guessedLetters, guess]);
                if (!wordToGuess.includes(guess)) {
                    setIncorrectGuesses(incorrectGuesses + 1);
                    setMessage('Incorrect guess.');
                } else {
                    setMessage('Correct guess!');
                }
            }
        } else {
            setMessage('Please enter a single lowercase letter.');
        }
        setGuess('');
    };

    const isGameWon = wordToGuess.split('').every(letter => guessedLetters.includes(letter));
    const isGameLost = incorrectGuesses >= maxIncorrectGuesses;
    const isGameOver = isGameWon || isGameLost;

    const handleRestart = () => {
        setWordToGuess(wordList[Math.floor(Math.random() * wordList.length)]);
        setGuessedLetters([]);
        setGuess('');
        setMessage('');
        setIncorrectGuesses(0);
    };

    return (
        <>
            <div>
                <h2>Hangman</h2>
                <pre>{hangmanStages[incorrectGuesses]}</pre>
                <p>Incorrect Guesses: {incorrectGuesses} / {maxIncorrectGuesses}</p>
                <p>Guess the word:</p>
                <p>{displayWord}</p>
                {isGameWon && <p>Congratulations! You guessed the word: {wordToGuess.toUpperCase()}</p>}
                {isGameLost && <p>Game Over! The word was: {wordToGuess.toUpperCase()}</p>}
                {!isGameOver && (
                    <>
                        <input type="text" value={guess} onChange={(e) => setGuess(e.target.value.toLowerCase())} maxLength="1" />
                        <button onClick={handleGuess} disabled={isGameOver}>Submit Guess</button>
                        <p>{message}</p>
                    </>
                )}
                {isGameOver && <button onClick={handleRestart}>Play Again</button>}
            </div>
            <div>
                <CommentsSection gameId="wordgame" />
            </div>
        </>
    );
};