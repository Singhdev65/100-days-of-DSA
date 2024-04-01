function searchInsert(nums, target) {
  return nums.reduce((index, num, currentIndex) => {
    if (num < target) {
      return currentIndex + 1;
    } else if (num >= target) {
      return index;
    }
  }, 0);
}

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
