/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let goLeftTiRight = true;
  let goUpwards = false;

  const result = [];
  while (result.length <= matrix.length * matrix[0].length) {
    if (goLeftTiRight) {
      let row = matrix.length - rows;
      let col = matrix[0].length - cols;
      while (col <= cols) {
        if (matrix[row][col]) {
          result.push(matrix[row][col]);
        }
        col++;
      }
      goLeftTiRight = false;
    } else {
      let row = rows;
      let col = cols - 1;
      while (col >= 0) {
        if (matrix[row][col]) {
          result.push(matrix[row][col]);
        }
        col--;
      }
      goLeftTiRight = true;
    }

    if (goUpwards) {
      let row = rows - 1;
      let col = 0;
      const x = matrix.length - rows;
      while (row >= matrix.length - rows) {
        if (matrix[row][col]) {
          result.push(matrix[row][col]);
        }
        row--;
      }
      goUpwards = false;
    } else {
      let row = 1;
      let col = cols - 1;
      while (row < rows) {
        if (matrix[row][col]) {
          result.push(matrix[row][col]);
        }
        row++;
      }
      goUpwards = true;
    }
    cols--;
    rows--;
  }

  return result;
}

// spiralOrder([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder2(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let margin = 0;
  const result = [];
  while (result.length < rows * cols) {
    // left to right
    for (let col = margin; col < cols - margin; col++) {
      result.push(matrix[margin][col]);
    }

    // top to bottom
    for (let row = margin + 1; row < rows - margin; row++) {
      result.push(matrix[row][cols - 1 - margin]);
    }

    if (result.length === rows * cols) return result
    // right to left
    for (let col = cols - 2 - margin; col >= margin; col--) {
      result.push(matrix[rows - 1 - margin][col]);
    }

    //bottom to top
    for (let row = rows - 2 - margin; row > margin; row--) {
      result.push(matrix[row][margin]);
    }

    margin++;
  }

  return result;
}

spiralOrder2([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
