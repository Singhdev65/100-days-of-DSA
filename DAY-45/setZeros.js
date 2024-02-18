function setZeroes(matrix) {
  const rows = matrix.length
  const cols = matrix[0].length
  const rowsToZero = new Set()
  const colsToZero = new Set()

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        rowsToZero.add(i)
        colsToZero.add(j)
      }
    }
  }

  for (let row of rowsToZero) {
    for (let j = 0; j < cols; j++) {
      matrix[row][j] = 0
    }
  }

  for (let col of colsToZero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][col] = 0
    }
  }
  return matrix
}

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ])
) //[[1,0,1],[0,0,0],[1,0,1]]
console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
  ])
) //[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
