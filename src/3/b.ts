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
let prioritySum = 0;
let threeElvesRucksackGroup: string[] = [];
rucksacks.forEach((rucksack, index) => {
  if (index + (1 % 3) !== 0 && threeElvesRucksackGroup.length === 3) {
    threeElvesRucksackGroup = [];
  }

  if ((index + 1) % 3 !== 0) {
    threeElvesRucksackGroup.push(rucksack);
  }

  if ((index + 1) % 3 === 0) {
    threeElvesRucksackGroup.push(rucksack);

    const lowerCaseLetterFound = lowerCaseLetters.find(
      (lowerCaseLetter) =>
        threeElvesRucksackGroup[0].includes(lowerCaseLetter) &&
        threeElvesRucksackGroup[1].includes(lowerCaseLetter) &&
        threeElvesRucksackGroup[2].includes(lowerCaseLetter)
    );
    const upperCaseLetterFound = upperCaseLetters.find(
      (upperCaseLetter) =>
        threeElvesRucksackGroup[0].includes(upperCaseLetter) &&
        threeElvesRucksackGroup[1].includes(upperCaseLetter) &&
        threeElvesRucksackGroup[2].includes(upperCaseLetter)
    );

    if (lowerCaseLetterFound) {
      prioritySum +=
        lowerCaseLetters.findIndex(
          (letter) => letter === lowerCaseLetterFound
        ) + 1;
    }

    if (upperCaseLetterFound) {
      prioritySum +=
        upperCaseLetters.findIndex(
          (letter) => letter === upperCaseLetterFound
        ) + 27;
    }
  }
});

console.log(prioritySum);
