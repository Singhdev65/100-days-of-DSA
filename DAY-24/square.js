function square(nums) {
  const arr = nums.map(n => n * n).sort((a, b) => a - b)
  return arr
}

console.log(square([-4, -1, 0, 3, 10])) //[0,1,9,16,100]
console.log(square([-7, -3, 2, 3, 11])) //[4,9,9,49,121]
