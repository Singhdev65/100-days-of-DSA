function minOperations(nums, k) {
  nums.sort((a, b) => a - b);
  let operations = 0;

  for (let num of nums) {
    if (num < k) {
      operations++;
    } else {
      break;
    }
  }

  return operations;
}

console.log(minOperations([2, 11, 10, 1, 3], 10)); //3
console.log(minOperations([1, 1, 2, 4, 9], 1)); //0
console.log(minOperations([1, 1, 2, 4, 9], 9)); //4
