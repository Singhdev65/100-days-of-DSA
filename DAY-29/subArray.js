function maxSubarraySum(nums) {
  if (!nums.length) {
    return 0
  }

  let currentSum = (maxSum = nums[0])

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i])
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])) //6
