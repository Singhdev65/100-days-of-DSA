function threeWayPartition(arr, a, b) {
  let n = arr.length
  let start = 0
  let end = n - 1
  let i = 0

  while (i <= end) {
    if (arr[i] < a) {
      [arr[i], arr[start]] = [arr[start], arr[i]]
      start++
      i++
    } else if (arr[i] > b) {
      [arr[i], arr[end]] = [arr[end], arr[i]]
      end--
    } else {
      i++
    }
  }
  return 1
}

console.log(threeWayPartition([1, 2, 3, 3, 4], 1, 2)) //[1, 2, 3, 3, 4]
