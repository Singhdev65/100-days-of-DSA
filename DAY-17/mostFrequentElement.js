function mostFrequentElem(nums) {
  const obj = {}
  nums.forEach(item => {
    if (obj[item]) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  })

  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b))
}

console.log(mostFrequentElem([3, 2, 3])) // 3
console.log(mostFrequentElem([2, 2, 1, 1, 1, 2, 2])) // 2
