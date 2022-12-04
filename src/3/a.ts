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

// const data = fs.readFileSync('src/3/input.example.txt', 'utf8');
const data = fs.readFileSync('src/3/input.prod.txt', 'utf8');

const rucksacks = data.split('\n');

const prioritySum = rucksacks
  .map((rucksack) => {
    const compOne = rucksack.slice(0, rucksack.length / 2);
    const compTwo = rucksack.slice(rucksack.length / 2, rucksack.length);

    return (
      letters.findIndex(
        (letter) => compOne.includes(letter) && compTwo.includes(letter)
      ) + 1
    );
  })
  .reduce((a, b) => a + b, 0);

console.log(prioritySum);
