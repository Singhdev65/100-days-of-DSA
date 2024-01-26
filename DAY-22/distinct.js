function distinct(arr) {
  const obj = {}

  arr.forEach(element => {
    if (obj[element]) {
      obj[element]++
    } else {
      obj[element] = 1
    }
  })

  for (let char in obj) {
    if (obj[char] > 1) {
      return true
    }
  }

  return false
}

console.log(distinct([1, 2, 3, 1])) //true
console.log(distinct([1, 2, 3, 4])) // false
console.log(distinct([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) // true
