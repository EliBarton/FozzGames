const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Header necessary to run the galaga game
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
  //res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  //res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp; report-to="coep-endpoint"');
  //res.setHeader('Cross-Origin-Resource-Policy', 'same-site');
  //res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  next();
});

// Serve up the front-end static content hosting
app.use(express.static('startup/public'));


// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(leaderboard);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  leaderboard = updateLeaderboard(req.body, leaderboard);
  res.send(leaderboard);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'startup/public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.
let leaderboard = [];
function updateLeaderboard(newScore, scores) {
  let found = false;
  for (i in scores) {
    if (newScore.name === scores[i].name){
      found = true;
      if (newScore.score > scores[i].score) {
        scores.splice(i, 1, newScore);
        break;
      }
    }
  }

  if (!found) {
    scores.push(newScore);
  }

  if (scores.length > 10) {
    scores.length = 10;
  }
  return scores;
}
