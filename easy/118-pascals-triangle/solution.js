// This was my solution without help
/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  const result = [];

  for (let row = 0; row < numRows; row++) {
    let col = 0;
    const temp = [];

    while (col < row + 1) {
      if (col !== 0 && col < row) {
        temp.push(result[row - 1][col - 1] + result[row - 1][col]);
      } else {
        temp.push(1);
      }
      col++;
    }
    result.push(temp);
  }

  return result;
}

/**
 * @param {number[]} t
 */
function printTriangle(t) {
  for (let i = 0; i < t.length; i++) {
    console.log(t[i]);
  }
}

/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate2(numRows) {
  if (numRows === 0) {
    return [];
  }
  if (numRows === 1) {
    return [[1]];
  }

  let prevRows = generate(numRows - 1);
  let newRow = new Array(numRows).fill(1);

  for (let i = 1; i < numRows - 1; i++) {
    newRow[i] = prevRows[numRows - 2][i - 1] + prevRows[numRows - 2][i];
  }

  prevRows.push(newRow);
  return prevRows;
}

/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate3(numRows) {
  let result = [];
  if (numRows === 0) {
    return result;
  }

  let firstRow = [1];
  result.push(firstRow);

  for (let i = 1; i < numRows; i++) {
    let prevRow = result[i - 1];
    let currentRow = [1];

    for (let j = 1; j < i; j++) {
      currentRow.push(prevRow[j - 1] + prevRow[j]);
    }

    currentRow.push(1);
    result.push(currentRow);
  }

  return result;
}

/*
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

generate(5);
