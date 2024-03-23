function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);

    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                return target;
            }
        }
    }

    return closestSum;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
