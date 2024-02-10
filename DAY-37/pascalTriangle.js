function pascalTriangle(numRows) {
  let triangle = []

  for (let i = 0; i < numRows; i++) {
    let row = []

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1)
      } else {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j])
      }
    }

    triangle.push(row)
  }

  return triangle
}

console.log(pascalTriangle(5))
