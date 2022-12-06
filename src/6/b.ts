import fs from 'fs';

// const data = fs.readFileSync('src/6/input.example.txt', 'utf8');
const data = fs.readFileSync('src/6/input.prod.txt', 'utf8');

const buffer = data.split('');

let lastCharacterStreamed = 0;
for (let i = 0; i < buffer.length; i++) {
  const lastFourteen = buffer.slice(i, i + 14);
  const unique = new Set(lastFourteen);
  if (unique.size === lastFourteen.length) {
    lastCharacterStreamed = i + 14;
    break;
  }
}

console.log(lastCharacterStreamed);
