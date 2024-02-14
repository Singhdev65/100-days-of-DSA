function rotate(arr) {
  const [lastElement, ...rest] = arr.reverse()
  return [lastElement, ...rest.reverse()]
}

console.log(rotate([1, 2, 3, 4, 5])) //[5,1,2,3,4]
console.log(rotate([9, 8, 7, 6, 4, 2, 1, 3])) //[3, 9, 8, 7, 6, 4, 2, 1]
