function runningSum(nums) {
  let arr = [nums[0]] 
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1]
    arr.push(nums[i])
  }
  return arr
}

console.log(runningSum([1, 2, 3, 4])) // [1,3,6,10]
console.log(runningSum([1, 1, 1, 1, 1])) // [1,2,3,4,5]
console.log(runningSum([3, 1, 2, 10, 1])) // [3,4,6,16,17]
