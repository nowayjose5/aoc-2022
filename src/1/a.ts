import fs from 'fs';

fs.readFile('src/1/input.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  const dataArr = data.split(`\n\n`);
  let numArr: number[] = [];
  dataArr.forEach((arr) => {
    const anotherDataArr = arr.split(`\n`);
    numArr.push(anotherDataArr.reduce((prev, curr) => {
      return Number(prev) + Number(curr);
    }, 0));
  });
  const maxNum = Math.max(...numArr);
  console.log(maxNum);
});
