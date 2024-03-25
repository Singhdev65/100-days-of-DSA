function rotate(nums, k) {
    const n = nums.length;
    k %= n;
    nums.unshift(...nums.splice(n - k, k));
    return nums
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)) // [5, 6, 7, 1, 2, 3, 4]
console.log(rotate([-1, -100, 3, 99], 2)) // [3, 99, -1, -100]