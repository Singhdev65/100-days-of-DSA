function findDuplicate(nums) {
  const obj = {}
  nums.forEach(num => {
    if (obj[num]) {
      obj[num]++
    } else {
      obj[num] = 1
    }
  })
  for (let x in obj) {
    if (obj[x] > 1) {
      return x
    }
  }
  return null
}

console.log(findDuplicate([1, 3, 4, 2, 2])) //2
console.log(findDuplicate([3, 1, 3, 4, 2])) //3
