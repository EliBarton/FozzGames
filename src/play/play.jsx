import React from 'react';


export function Play() {
  return (
    <div>
        <div className="alert-container"></div>
        <iframe src="src/game/index.html" width="480px" height="600px" title='game window'></iframe>
        <div></div>
        <h3>High Score: <span id="highscore">0</span></h3>
        <h2>Instructions:</h2>
        <p style={{ marginLeft: '20em', marginRight: '20em' }}>Press space to shoot and arrow keys or wasd to move. Get points by killing enemies and advancing through the rounds. Get a higher score than your last to save it.</p>
        <script src='./rungame.js'></script>
    </div>
  )
}