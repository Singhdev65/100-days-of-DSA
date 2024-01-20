function removeDuplicate(arr) {
  if (arr.length === 0) {
    return 0
  }

  let uniqueCount = 1

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[uniqueCount] = arr[i]
      uniqueCount++
    }
  }

  return uniqueCount
}

console.log(removeDuplicate([1, 1, 2])) //[1,2]
