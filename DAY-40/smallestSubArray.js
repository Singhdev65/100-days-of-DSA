function smallestSubarrayWithSum(arr, x) {
  let n = arr.length
  let minLength = Infinity

  for (let start = 0; start < n; start++) {
    let currentSum = 0
    for (let end = start; end < n; end++) {
      currentSum += arr[end]
      if (currentSum > x && end - start + 1 < minLength) {
        minLength = end - start + 1
      }
    }
  }

  return minLength === Infinity ? 0 : minLength
}

console.log(smallestSubarrayWithSum([1, 4, 45, 6, 0, 19], 51)) //3
