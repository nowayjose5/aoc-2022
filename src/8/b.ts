import { readFileSync } from 'fs';

// const input = readFileSync('src/8/input.example.txt', 'utf-8');
const input = readFileSync('src/8/input.prod.txt', 'utf-8');

const treeGrid: number[][] = input
  .split('\n')
  .map((row) => row.split('').map(Number));

const visibleTreesToLeft = (r: number, c: number): number => {
  const currentTree = treeGrid[r][c];
  let treesViewed = 0;
  for (let w = c - 1; w >= 0; w--) {
    const nextTree = treeGrid[r][w];
    treesViewed++;
    if (currentTree <= nextTree) {
      break;
    }
  }
  return treesViewed;
};

const visibleTreesToRight = (r: number, c: number): number => {
  const currentTree = treeGrid[r][c];
  let treesViewed = 0;
  for (let w = c + 1; w < treeGrid.length; w++) {
    const nextTree = treeGrid[r][w];
    treesViewed++;
    if (currentTree <= nextTree) {
      break;
    }
  }
  return treesViewed;
};

const visibleTreesToTop = (r: number, c: number): number => {
  const currentTree = treeGrid[r][c];
  let treesViewed = 0;
  for (let w = r - 1; w >= 0; w--) {
    const nextTree = treeGrid[w][c];
    treesViewed++;
    if (currentTree <= nextTree) {
      break;
    }
  }
  return treesViewed;
};

const visibleTreesToBottom = (r: number, c: number): number => {
  const currentTree = treeGrid[r][c];
  let treesViewed = 0;
  for (let w = r + 1; w < treeGrid.length; w++) {
    const nextTree = treeGrid[w][c];
    treesViewed++;
    if (currentTree <= nextTree) {
      break;
    }
  }
  return treesViewed;
};

let bestScenicScore = 0;

for (let r = 1; r < treeGrid.length - 1; r++) {
  for (let c = 1; c < treeGrid[r].length - 1; c++) {
    const leftCount = visibleTreesToLeft(r, c);
    const rightCount = visibleTreesToRight(r, c);
    const topCount = visibleTreesToTop(r, c);
    const bottomCount = visibleTreesToBottom(r, c);
    const scenicScore = leftCount * rightCount * topCount * bottomCount;

    if (scenicScore > bestScenicScore) {
      bestScenicScore = scenicScore;
    }
  }
}

console.log(bestScenicScore);
