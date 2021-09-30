const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const candidates = require("./candidates");
const countdown = require("./countdown");

// Parameters
const CANDIDATES_COUNT = parseInt(process.env.CANDIDATES_COUNT, 10) || 50;
const COUNTDOWN_SECONDS = parseInt(process.env.COUNTDOWN_SECONDS, 10) || 300;

// Fill with candidates
candidates.bootstrap(CANDIDATES_COUNT);

// Start countdown
countdown.start(COUNTDOWN_SECONDS);

const PORT = 3001;
const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const BASE_URL = "/api/v1";

/**
 * [json] GET /api/v1/candidates
 *
 * Response:
 *  [
 *    {id: 'asdf', name: 'John Sotello', store: 'New York',  votes: 4},
 *    {id: 'qwera', name: 'Peter Clark', store: 'Santiago',  votes: 2},
 *  ]
 */
app.get(`${BASE_URL}/candidates`, function (req, res) {
  const order = req.query.order;
  res.json(candidates.all(order));
});

/**
 * [json] GET /api/v1/candidates/winner
 *
 * Response:
 *  
 *  {id: 'asdf', name: 'John Sotello', store: 'New York',  votes: 4},
 *  
 */
 app.get(`${BASE_URL}/candidates/winner`, function (req, res) {
   if (countdown.getSecondsLeft() === 0) {
      return res.json(candidates.getMostVoted());
   }
   res.status(404).json({message: 'Voting in progress'});
});

/**
 * [json] GET /api/v1/countdown
 *
 * Response:
 *  
 *  {secondsLeft: 4},
 *  
 */
 app.get(`${BASE_URL}/countdown`, function (req, res) {
  res.json({secondsLeft: countdown.getSecondsLeft()});
});

/**
 * [json] POST { id: 'asdf' } /api/v1/candidates/vote
 * 
 * Response:
 * 
 *  {id: 'asdf', name: 'John Sotello', store: 'New York',  votes: 4},
 * 
 */
app.post(`${BASE_URL}/candidates/vote`, function (req, res) {
  if (!candidates.exists(req.body.id)) {
    return res.status(404).json({message: 'Candidate does not exist'});
  }
  if (countdown.getSecondsLeft() !== 0) {
    return res.json(candidates.vote(req.body.id));
   }
   res.status(400).json({message: 'Voting has finished'});
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));