import { readFileSync } from 'fs';

// const input = readFileSync('src/10/input.example.txt', 'utf-8');
const input = readFileSync('src/10/input.prod.txt', 'utf-8');

const instructions = input.split('\n');

let registerX = 1;
let cycles = 0;

const signals: number[] = [];

const checkSignals = () => {
  if ((cycles - 20) % 40 === 0 && cycles <= 220) {
    signals.push(cycles * registerX);
  }
};

for (const instruction of instructions) {
  if (instruction === 'noop') {
    cycles++;
    checkSignals();
  } else if (instruction.startsWith('addx')) {
    for (let i = 0; i < 2; i++) {
      cycles++;
      checkSignals();
    }
    const addAmount = parseInt(instruction.split(' ')[1], 10);
    registerX += addAmount;
  }
}

const sumOfSignals = signals.reduce((acc, curr) => acc + curr);

console.log(sumOfSignals);
