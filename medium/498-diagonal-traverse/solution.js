// Interesting solution by the comunity
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
function findDiagonalOrder(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  let result = new Array(rows + cols - 1).fill(null).map(() => []);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if ((row + col) % 2 === 0) result[row + col].unshift(mat[row][col]);
      else result[row + col].push(mat[row][col]);
    }
  }
  console.log(result.flat());
  return result.flat();
}

// findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]])

//first try solving
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
function findDiagonalOrder2(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const result = [];
  let row = 0;
  let col = 0;
  let goUpwards = true;

  // while(row <= rows && row >= 0 && col <= cols && col >= 0) {
  while (result.length !== rows * cols) {
    if (goUpwards) {
      if (row < rows && col < cols) {
        result.push(mat[row][col]);
      }
      if (row === 0) {
        goUpwards = false;
        if (col === cols - 1) {
          row++;
          continue;
        }
        col++;
        continue;
      }
      row--;
      col++;
    } else {
      if (row < rows && col < cols) {
        result.push(mat[row][col]);
      }
      if (col === 0) {
        goUpwards = true;
        if (row === rows) {
          col++;
          continue;
        }
        row++;
        continue;
      }
      row++;
      col--;
    }
  }

  //   console.log(result);
  return result;
}

findDiagonalOrder3([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);


// fastest
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
function findDiagonalOrder3(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const result = [];
  let row = 0;
  let col = 0;
  let goUpwards = true;

  while (result.length !== rows * cols) {
    if (goUpwards) {
      while (row >= 0 && col < cols) {
        if (row < rows && col < cols) {
          result.push(mat[row][col]);
        }
        row--;
        col++;
      }
      row++
      goUpwards = false;
    } else {
      while (row < rows && col >= 0) {
        if (row >= 0 && col < cols) {
          result.push(mat[row][col]);
        }
        row++;
        col--;
      }
      col++
      goUpwards = true;
    }
  }

  return result
}
