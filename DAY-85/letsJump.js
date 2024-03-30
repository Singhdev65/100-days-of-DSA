function letsJump(nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false;
    }
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= nums.length - 1) {
      return true;
    }
  }

  return maxReach >= nums.length - 1;
}

console.log(letsJump([2, 3, 1, 1, 4])); // true
console.log(letsJump([3, 2, 1, 0, 4])); // false
