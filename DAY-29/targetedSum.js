function targetedSum(arr, arrLength, target) {
  let count = 0
  for (let i = 0; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[i] + arr[j] === target) {
        count++
      }
    }
  }
  return count
}

console.log(targetedSum([1, 5, 7, 1], 4, 6)) //2
console.log(targetedSum([1, 1, 1, 1], 4, 2)) //6
