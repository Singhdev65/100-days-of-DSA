function canBeIncreasing(nums) {
    let removed = false;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            if (removed) {
                return false;
            }
            if (i > 1 && nums[i] <= nums[i - 2]) {
                nums[i] = nums[i - 1];
            }
            removed = true;
        }
    }
    return true;
}

console.log(canBeIncreasing([1, 2, 10, 5, 7])); // true
console.log(canBeIncreasing([2, 3, 1, 2])); //  false
console.log(canBeIncreasing([1, 1, 1])); //  false