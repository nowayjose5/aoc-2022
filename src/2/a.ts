import fs from 'fs';

const definitions = {
  A: {
    shape: 'Rock',
    points: 1,
  },
  B: {
    shape: 'Paper',
    points: 2,
  },
  C: {
    shape: 'Scissors',
    points: 3,
  },
  X: {
    shape: 'Rock',
    points: 1,
  },
  Y: {
    shape: 'Paper',
    points: 2,
  },
  Z: {
    shape: 'Scissors',
    points: 3,
  },
};

const whoWon = (playerOneShape: string, playerTwoShape: string): string => {
  if (
    (playerOneShape === 'Rock' && playerTwoShape === 'Scissors') ||
    (playerOneShape === 'Scissors' && playerTwoShape === 'Paper') ||
    (playerOneShape === 'Paper' && playerTwoShape === 'Rock')
  ) {
    return 'playerOne';
  }

  if (
    (playerTwoShape === 'Rock' && playerOneShape === 'Scissors') ||
    (playerTwoShape === 'Scissors' && playerOneShape === 'Paper') ||
    (playerTwoShape === 'Paper' && playerOneShape === 'Rock')
  ) {
    return 'playerTwo';
  }

  return 'draw';
};

// const data = fs.readFileSync('src/2/input.example.txt', 'utf8');
const data = fs.readFileSync('src/2/input.prod.txt', 'utf8');

const rounds = data.split('\n');

let totalScore = 0;

totalScore = rounds
  .map((round) => {
    const playerOneLetter = round.split(' ')[0];
    const playerTwoLetter = round.split(' ')[1];

    const letters = Object.keys(definitions);

    const playerOneShape =
      definitions[letters.find((letter) => letter === playerOneLetter)].shape;
    const playerTwoShape =
      definitions[letters.find((letter) => letter === playerTwoLetter)].shape;
    const playerTwoPoints =
      definitions[letters.find((letter) => letter === playerTwoLetter)].points;

    const winner = whoWon(playerOneShape, playerTwoShape);
    let playerTwoWinScore = 0;
    if (winner === 'draw') {
      playerTwoWinScore = 3;
    }
    if (winner === 'playerTwo') {
      playerTwoWinScore = 6;
    }

    return playerTwoPoints + playerTwoWinScore;
  })
  .reduce((a, b) => a + b, 0);

console.log(totalScore);
