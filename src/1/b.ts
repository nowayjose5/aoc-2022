import fs from 'fs';

fs.readFile('src/1/input.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  const dataArr = data.split(`\n\n`);
  let topThreeTotals: number[] = [];
  dataArr.forEach((arr, index) => {
    const anotherDataArr = arr.split(`\n`);
    const totalNumberOfCalories = anotherDataArr.reduce((prev, curr) => {
      return Number(prev) + Number(curr);
    }, 0);

    // add first three calories total initially
    if (index < 3) {
      topThreeTotals.push(totalNumberOfCalories);
    }

    // then compare 4th and so on totals with first three,
    // replace if new total is higher
    topThreeTotals.forEach((total, index) => {
      if (
        totalNumberOfCalories > total &&
        !topThreeTotals.includes(totalNumberOfCalories)
      ) {
        topThreeTotals[index] = totalNumberOfCalories;
      }
    });
  });

  console.log('Top 3 Totals: ', topThreeTotals);
  console.log(
    'Total Number of Calories for Top 3: ',
    topThreeTotals.reduce((prev, curr) => prev + curr, 0)
  );
});
