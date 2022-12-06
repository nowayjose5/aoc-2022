import fs from 'fs';

// const data = fs.readFileSync('src/5/input.example.txt', 'utf8');
const data = fs.readFileSync('src/5/input.prod.txt', 'utf8');

const [crates, instructions] = data.split('\n\n').map((x) => x.split('\n'));

const horizontal = crates.map((x) => x.split('').filter((_, i) => i % 4 === 1));

// pop off numbers at the end
horizontal.pop();

const stacks: string[][] = [];
horizontal.reverse().forEach((h) => {
  h.forEach((c, i) => {
    if (!stacks[i]) {
      stacks[i] = [];
    }

    if (c !== ' ') {
      stacks[i].push(c);
    }
  });
});

const instructionsList = instructions
  .map((l) => l.split(' '))
  .map((l) => ({
    move: Number(l[1]),
    from: Number(l[3]) - 1, // 0 indexed
    to: Number(l[5]) - 1, // 0 indexed
  }));

instructionsList.forEach((instruction) => {
  let crates: string[] = [];
  for (let i = 0; i < instruction.move; i++) {
    const crate = stacks[instruction.from].pop();
    if (crate) {
      crates.unshift(crate);
    }
  }
  stacks[instruction.to].push(...crates);
});

const word = stacks.map((s) => s.pop()).join('');
console.log(word);
