function union(arr1, arr2) {
  const arr = arr1.concat(arr2.filter(item => !arr1.includes(item)))
  return arr.length
}

console.log(union([5, 3], [1, 2, 3, 4, 5])) //5
console.log(union([6, 2], [85, 25, 1, 32, 54, 6])) //7
