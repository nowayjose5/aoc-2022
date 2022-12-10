import { readFileSync } from 'fs';

// const input = readFileSync('src/10/input.example.txt', 'utf-8');
const input = readFileSync('src/10/input.prod.txt', 'utf-8');

const instructions = input.split('\n');

// sprite position start at registerX - 1 position and is 3 pixels/positions wide
let registerX = 1;
let cycles = 0;
let crtImage: string[][] = [];
let crtRow: string[] = [];
let crtCounter = 0;

const printCrtRow = () => {
  if (crtCounter % 40 === 0) {
    crtImage.push(crtRow);
    crtRow = [];
    crtCounter = 0;
  }

  if (
    crtCounter === registerX - 1 ||
    crtCounter === registerX ||
    crtCounter === registerX + 1
  ) {
    crtRow.push('#');
  } else {
    crtRow.push('.');
  }
  crtCounter++;
};

for (const instruction of instructions) {
  if (instruction === 'noop') {
    cycles++;
    printCrtRow();
  } else if (instruction.startsWith('addx')) {
    for (let i = 0; i < 2; i++) {
      cycles++;
      printCrtRow();
    }
    const addAmount = parseInt(instruction.split(' ')[1], 10);
    registerX += addAmount;
  }
}
crtImage.push(crtRow);
crtImage.forEach((crtRow) => {
  console.log(crtRow.join(''));
});
