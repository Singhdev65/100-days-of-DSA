function mostFrequentElem(arr) {
  const obj = {}
  arr.forEach(item => {
    if (obj[item]) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  })

  return Math.max(...Object.values(obj))
}

console.log(mostFrequentElem([1, 2, 2, 3, 4, 5, 6, 1, 1, 2, 1])) // 1
