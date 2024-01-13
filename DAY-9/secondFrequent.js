function secondFrequent(arr) {
  const obj = {}
  arr.forEach(el => {
    if (obj[el]) {
      obj[el]++
    } else {
      obj[el] = 1
    }
  })

  let maxCount = 0
  let secondMaxCount = 0
  let result = null
  for (const key in obj) {
    if (maxCount < obj[key]) {
      secondMaxCount = maxCount
      maxCount = obj[key]
      result = key
    } else if (secondMaxCount < obj[key] && obj[key] !== maxCount) {
      secondMaxCount = obj[key]
      result = key
    }
  }

  return secondMaxCount > 0 ? result : ""
}

console.log(secondFrequent(["aaa", "bbb", "ccc", "bbb", "aaa", "aaa"])) // bbb
console.log(secondFrequent(["geek", "for", "geek", "for", "geek", "aaa"])) //for
