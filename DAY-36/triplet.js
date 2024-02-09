function findTriplet(arr, X) {
  const n = arr.length
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === X) {
          return [arr[i], arr[j], arr[k]]
        }
      }
    }
  }
  return false
}

console.log(findTriplet([1, 4, 45, 6, 10, 8], 13)) //[1,8,4]
console.log(findTriplet([1, 2, 4, 3, 6], 10)) //[1,3,6]
console.log(findTriplet([1, 2, 4, 3, 6], 99)) // false
