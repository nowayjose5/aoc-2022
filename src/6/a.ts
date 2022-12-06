import fs from 'fs';

// const data = fs.readFileSync('src/6/input.example.txt', 'utf8');
const data = fs.readFileSync('src/6/input.prod.txt', 'utf8');

const buffer = data.split('');

let lastCharacterStreamed = 0;
for (let i = 0; i < buffer.length; i++) {
  const lastFour = buffer.slice(i, i + 4);
  if (lastFour.filter((value) => value).length === 4) {
    const unique = new Set(lastFour);
    if (unique.size === lastFour.length) {
      lastCharacterStreamed = i + 4;
      break;
    }
  }
}

console.log(lastCharacterStreamed);
