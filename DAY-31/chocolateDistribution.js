function chocolateDistribution(arr, m) {
  if (arr.length < m) {
    return -1
  }

  arr.sort((a, b) => a - b)

  let minDifference = Infinity

  for (let i = 0; i <= arr.length - m; i++) {
    for (let j = i + m - 1; j < arr.length; j++) {
      const currentDifference = arr[j] - arr[i]
      minDifference = Math.min(minDifference, currentDifference)
    }
  }

  return minDifference
}

console.log(chocolateDistribution([7, 3, 2, 4, 9, 12, 56], 3)) // 2
console.log(chocolateDistribution([3, 4, 1, 9, 56, 7, 9, 12], 5)) // 6
