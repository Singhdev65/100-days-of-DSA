function maxMin(arr) {
  const max = arr.reduce((curr, prev) => (curr > prev ? curr : prev))
  const min = arr.reduce((curr, prev) => (curr > prev ? prev : curr))
  return `The max number is ${max} and min is ${min}`
}

console.log(maxMin([1, 2, 3, 4, 5]))
console.log(maxMin([0, 0, 0, 0, 0]))
console.log(maxMin([11, 1, 1, 1, 29, 9, 7, 999]))
console.log(maxMin([1000, -1000, 8976, 99, -99]))
