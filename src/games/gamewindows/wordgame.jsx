import CommentsSection from '../gamecomments/comments';
import React, { useState } from 'react';

export const WordGame = () => {
    const [wordToGuess] = useState('react'); // The word to guess
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');

    const displayWord = wordToGuess
        .split('')
        .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
        .join(' ');

    const handleGuess = () => {
        if (guess.length === 1 && guess.match(/[a-z]/)) {
            if (wordToGuess.includes(guess)) {
                setGuessedLetters([...guessedLetters, guess]);
                setMessage('Correct guess!');
            } else {
                setMessage('Incorrect guess.');
            }
        } else {
            setMessage('Please enter a single lowercase letter.');
        }
        setGuess('');
    };

    const isGameWon = displayWord.replace(/ /g, '') === wordToGuess;

    return (
        <>
            <div>
                <h2>Word Guessing Game</h2>
                <p>Guess the word:</p>
                <p>{displayWord}</p>
                {isGameWon ? (
                    <p>Congratulations! You guessed the word!</p>
                ) : (
                    <>
                        <input type="text" value={guess} onChange={(e) => setGuess(e.target.value)} maxLength="1" />
                        <button onClick={handleGuess}>Submit Guess</button>
                        <p>{message}</p>
                    </>
                )}
            </div>
            <div>
                <CommentsSection gameId="wordgame" />
            </div>
        </>
    );
};