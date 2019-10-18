module.exports = function solveSudoku(matrix) {
  function Validation(matrix, row, col, item) {
    for (let i = 0; i < 9; i++) {
      const f = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const g = 3 * Math.floor(col / 3) + i % 3;
      if (matrix[row][i] === item || matrix[i][col] === item || matrix[f][g] === item) return false;
    }
    return true;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] === 0) {
        for (let item = 1; item <= 9; item++) {
          if (Validation(matrix, i, j, item)) {
            matrix[i][j] = item;
            if (solveSudoku(matrix)) return matrix;
            else matrix[i][j] = 0;
          }
        }
      return false;
      }
    }
  }
  return matrix;
}