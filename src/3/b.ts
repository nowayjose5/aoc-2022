import fs from 'fs';

const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const data = fs.readFileSync('src/3/input.example.txt', 'utf8');
// const data = fs.readFileSync('src/3/input.prod.txt', 'utf8');

const rucksacks = data.split('\n');
let threeElvesRucksackGroup: string[] = [];
const prioritySum = rucksacks
  .map((rucksack, index) => {
    if ((index + 1) % 3 !== 0) {
      threeElvesRucksackGroup.push(rucksack);
    }

    if ((index + 1) % 3 === 0) {
      threeElvesRucksackGroup.push(rucksack);
      const sum =
        letters.findIndex(
          (letter) =>
            threeElvesRucksackGroup[0].includes(letter) &&
            threeElvesRucksackGroup[1].includes(letter) &&
            threeElvesRucksackGroup[2].includes(letter)
        ) + 1;
      threeElvesRucksackGroup = [];
      return sum;
    }
    return 0;
  })
  .reduce((acc, curr) => acc + curr);

console.log(prioritySum);
