import fs from 'fs';

const lowerCaseLetters = [
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
];
const upperCaseLetters = [
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

    const lowerCaseLetterFound = lowerCaseLetters.find(
      (lowerCaseLetter) =>
        compOne.includes(lowerCaseLetter) && compTwo.includes(lowerCaseLetter)
    );
    if (lowerCaseLetterFound) {
      return (
        lowerCaseLetters.findIndex(
          (letter) => letter === lowerCaseLetterFound
        ) + 1
      );
    }

    const upperCaseLetterFound = upperCaseLetters.find(
      (upperCaseLetter) =>
        compOne.includes(upperCaseLetter) && compTwo.includes(upperCaseLetter)
    );
    if (upperCaseLetterFound) {
      return (
        upperCaseLetters.findIndex(
          (letter) => letter === upperCaseLetterFound
        ) + 27
      );
    }
  })
  .reduce((a, b) => a + b, 0);

console.log(prioritySum);
