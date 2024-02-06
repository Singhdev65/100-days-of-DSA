function findCommonElements(arr1, arr2, arr3) {
  const result = []

  for (let i = 0; i < arr1.length; i++) {
    const current = arr1[i]
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === current) {
        for (let k = 0; k < arr3.length; k++) {
          if (arr3[k] === current) {
            result.push(current)
            break
          }
        }
        break
      }
    }
  }

  return result
}

console.log(
  findCommonElements(
    [1, 5, 10, 20, 40, 80],
    [6, 7, 20, 80, 100],
    [3, 4, 15, 20, 30, 70, 80, 120]
  )
) // [20,80]
