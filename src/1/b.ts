import fs from 'fs';

const data = fs.readFileSync('src/1/input.txt', 'utf8');

const elvesCaloriesGroups = data
  .split('\n\n')
  .map((g) => g.split('\n').map(Number));

const elvesTotalCaloriesGroups = elvesCaloriesGroups.map((group) =>
  group.reduce((a, b) => a + b)
);

const topThreeTotal = elvesTotalCaloriesGroups
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((a, b) => a + b);

console.log(topThreeTotal);
