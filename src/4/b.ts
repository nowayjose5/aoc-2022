import fs from 'fs';

const checkOverlappingPairs = (
  firstElfAssignments: string,
  secondElfAssignments: string
): number => {
  const [firstElfStartBound, firstElfEndBound] = firstElfAssignments
    .split('-')
    .map((value) => Number(value)) as [number, number];

  const [secondElfStartBound, secondElfEndBound] = secondElfAssignments
    .split('-')
    .map((value) => Number(value)) as [number, number];

  if (
    firstElfStartBound <= secondElfEndBound &&
    secondElfStartBound <= firstElfEndBound
  ) {
    return 1;
  }
  return 0;
};

// const data = fs.readFileSync('src/4/input.example.txt', 'utf8');
const data = fs.readFileSync('src/4/input.prod.txt', 'utf8');

const pairs = data.split('\n');

const sum = pairs
  .map((pair) => {
    const [firstElfAssignments, secondElfAssignments] = pair.split(',') as [
      string,
      string
    ];

    return checkOverlappingPairs(firstElfAssignments, secondElfAssignments);
  })
  .reduce((acc, curr) => acc + curr, 0);

console.log(sum);
