function sumIndicesWithKSetBits(nums, k) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let binaryRepresentation = i.toString(2);
        let setBits = binaryRepresentation.split('').filter(bit => bit === '1').length; 
        if (setBits === k) {
            sum += nums[i];
        }
    }
    return sum;
}

console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1)) // 13
console.log(sumIndicesWithKSetBits([4, 3, 2, 1], 2)) // 1 