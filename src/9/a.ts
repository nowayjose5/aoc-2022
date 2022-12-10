import { readFileSync } from 'fs';

// const input = readFileSync('src/9/input.example.txt', 'utf-8');
const input = readFileSync('src/9/input.prod.txt', 'utf-8');

interface Position {
  x: number;
  y: number;
}

let tailPosition: Position = { x: 0, y: 0 };
let headPosition: Position = { x: 0, y: 0 };

let allPositions = new Set<string>();

const instructions = input.split('\n');

const allPointsBetween = (p1: Position, p2: Position) => {
  const points = new Set<string>();

  let x = p1.x;
  let y = p1.y;

  let lastPoint: Position = { x, y };

  while (x !== p2.x || y !== p2.y) {
    lastPoint = { x, y };
    points.add(`${x},${y}`);
    if (x < p2.x) {
      x++;
    } else if (x > p2.x) {
      x--;
    }

    if (y < p2.y) {
      y++;
    } else if (y > p2.y) {
      y--;
    }
  }

  return { points, lastPoint };
};

for (const instruction of instructions) {
  const [dir, amount] = instruction.split(' ');

  const amountNum = parseInt(amount, 10);

  if (dir === 'L') {
    headPosition.x -= amountNum;
  } else if (dir === 'R') {
    headPosition.x += amountNum;
  } else if (dir === 'U') {
    headPosition.y += amountNum;
  } else if (dir === 'D') {
    headPosition.y -= amountNum;
  }

  const { points, lastPoint } = allPointsBetween(tailPosition, headPosition);
  tailPosition = lastPoint;

  points.forEach((point) => allPositions.add(point));
}

console.log(allPositions, allPositions.size);
