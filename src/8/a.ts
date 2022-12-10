import { readFileSync } from 'fs';

// const input = readFileSync('src/8/input.example.txt', 'utf-8');
const input = readFileSync('src/8/input.prod.txt', 'utf-8');

const treeGrid: number[][] = input
  .split('\n')
  .map((row) => row.split('').map(Number));

let numOfVisibleTrees = 0;

const countTreesOnGridEdge = () => {
  treeGrid.forEach((treeRow, index) => {
    if (index === 0 || index === treeRow.length - 1) {
      numOfVisibleTrees += treeRow.length;
    } else {
      numOfVisibleTrees += 2;
    }
  });
};

const countVisibleInteriorTrees = () => {
  for (let r = 1; r < treeGrid.length - 1; r++) {
    const trees = treeGrid[r];
    for (let c = 1; c < treeGrid[r].length - 1; c++) {
      const fromRight = checkFromRight(c, trees);
      const fromLeft = checkFromLeft(c, trees);
      const fromTop = checkFromTop(r, c);
      const fromBottom = checkFromBottom(r, c);
      if (fromRight || fromLeft || fromTop || fromBottom) {
        numOfVisibleTrees += 1;
      }
    }
  }
};

const checkFromRight = (rowIndex: number, row: number[]): boolean => {
  const currentTree = row[rowIndex];
  let nextRightRowIndex = rowIndex + 1;
  while (nextRightRowIndex < row.length) {
    const treeToTheRight = row[nextRightRowIndex];
    if (currentTree <= treeToTheRight) {
      return false;
    }
    nextRightRowIndex++;
  }
  return true;
};

const checkFromLeft = (rowIndex: number, row: number[]): boolean => {
  const currentTree = row[rowIndex];
  let nextLeftRowIndex = rowIndex - 1;
  while (nextLeftRowIndex >= 0) {
    const treeToTheLeft = row[nextLeftRowIndex];
    if (currentTree <= treeToTheLeft) {
      return false;
    }
    nextLeftRowIndex--;
  }
  return true;
};

const checkFromTop = (rowIndex: number, colIndex: number): boolean => {
  const currentTree = treeGrid[rowIndex][colIndex];
  let nextRowIndexToTop = rowIndex - 1;
  while (nextRowIndexToTop >= 0) {
    const treeToTheTop = treeGrid[nextRowIndexToTop][colIndex];
    if (currentTree <= treeToTheTop) {
      return false;
    }
    nextRowIndexToTop--;
  }
  return true;
};

const checkFromBottom = (rowIndex: number, colIndex: number): boolean => {
  const currentTree = treeGrid[rowIndex][colIndex];
  let nextRowIndexToBottom = rowIndex + 1;
  while (nextRowIndexToBottom < treeGrid[rowIndex].length) {
    const treeToTheBottom = treeGrid[nextRowIndexToBottom][colIndex];
    if (currentTree <= treeToTheBottom) {
      return false;
    }
    nextRowIndexToBottom++;
  }
  return true;
};

countTreesOnGridEdge();
countVisibleInteriorTrees();

console.log(numOfVisibleTrees);
