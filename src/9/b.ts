import { readFileSync } from 'fs';

// const input = readFileSync('src/9/input.example.txt', 'utf-8');
const input = readFileSync('src/9/input.prod.txt', 'utf-8');

const instructions = input.split('\n');

interface Position {
  x: number;
  y: number;
}

let rope: Position[] = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
];

let allPositions = new Set<string>();

for (const instruction of instructions) {
  const [dir, amount] = instruction.split(' ');

  const amountNum = parseInt(amount, 10);

  for (let i = 0; i < amountNum; i++) {
    const newHead: Position = { ...rope[0] };

    if (dir === 'L') {
      newHead.x--;
    } else if (dir === 'R') {
      newHead.x++;
    } else if (dir === 'U') {
      newHead.y++;
    } else if (dir === 'D') {
      newHead.y--;
    }
    rope[0] = newHead;

    for (let knot = 0; knot < rope.length - 1; knot++) {
      let dx = rope[knot].x - rope[knot + 1].x;
      let dy = rope[knot].y - rope[knot + 1].y;
      if (Math.abs(dx) > 1) {
        rope[knot + 1].x += dx > 0 ? 1 : -1;
        if (Math.abs(dy) !== 0) {
          rope[knot + 1].y += dy > 0 ? 1 : -1;
        }
      } else if (Math.abs(dy) > 1) {
        rope[knot + 1].y += dy > 0 ? 1 : -1;
        if (Math.abs(dx) !== 0) {
          rope[knot + 1].x += dx > 0 ? 1 : -1;
        }
      }
    }

    allPositions.add(`${rope[9].x},${rope[9].y}`);
  }
}

console.log(allPositions.size);
