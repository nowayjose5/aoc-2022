import fs from 'fs';

const data = fs.readFileSync('src/1/input.txt', 'utf8');

const elvesCaloriesGroups = data
  .split('\n\n')
  .map((g) => g.split('\n').map(Number));

const elvesTotalCaloriesGroups = elvesCaloriesGroups.map((group) =>
  group.reduce((a, b) => a + b)
);

const max = elvesTotalCaloriesGroups.sort((a, b) => b - a)[0];

console.log(max);
