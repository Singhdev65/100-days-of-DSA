function smallerNumbersThanCurrent(nums) {
    const counts = {};

    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
    }

    return nums.map(num => {
        let count = 0;
        for (const key in counts) {
            if (key < num) {
                count += counts[key];
            }
        }
        return count;
    });
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [4, 0, 1, 1, 3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0, 0, 0, 0]
