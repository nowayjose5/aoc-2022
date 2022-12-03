import fs from 'fs';

const ABCDefinitions = {
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
};

const shapePointsNeeded = (
  opponentShape: 'Rock' | 'Paper' | 'Scissors',
  outcomeRequired: 'win' | 'lose' | 'draw'
): number => {
  if ((opponentShape === 'Rock' && outcomeRequired === 'draw') ||
      (opponentShape === 'Paper' && outcomeRequired === 'lose') ||
      (opponentShape === 'Scissors' && outcomeRequired === 'win')) {
    return 1;
  }

  if ((opponentShape === 'Rock' && outcomeRequired === 'win') ||
      (opponentShape === 'Paper' && outcomeRequired === 'draw') ||
      (opponentShape === 'Scissors' && outcomeRequired === 'lose')) {
    return 2;
  }

  if ((opponentShape === 'Rock' && outcomeRequired === 'lose') ||
      (opponentShape === 'Paper' && outcomeRequired === 'win') ||
      (opponentShape === 'Scissors' && outcomeRequired === 'draw')) {
    return 3;
  }

  return 0;
}

// const data = fs.readFileSync('src/2/input.example.txt', 'utf8');
const data = fs.readFileSync('src/2/input.prod.txt', 'utf8');

const rounds = data.split('\n');

let totalScore = 0;

totalScore = rounds.map((round) => {
  const opponentLetter = round.split(' ')[0];
  const outcomeLetter = round.split(' ')[1];

  const letters = Object.keys(ABCDefinitions);

  const opponentDef = ABCDefinitions[letters.find((letter) => letter === opponentLetter)];

  let myWinScore = 0;
  let myShapePoints = 0;
  if (outcomeLetter === 'X') {
    myShapePoints = shapePointsNeeded(opponentDef.shape, 'lose');
  } else if (outcomeLetter === 'Y') {
    myWinScore = 3;
    myShapePoints = shapePointsNeeded(opponentDef.shape, 'draw');
  } else if (outcomeLetter === 'Z') {
    myWinScore = 6;
    myShapePoints = shapePointsNeeded(opponentDef.shape, 'win');
  }

  return myWinScore + myShapePoints;
}).reduce((a, b) => a + b, 0);

console.log(totalScore);
