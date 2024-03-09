function decompressList(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i += 2) {
        let freq = nums[i];
        let val = nums[i + 1];
        for (let j = 0; j < freq; j++) {
            result.push(val);
        }
    }
    return result;
};

console.log(decompressList([1, 2, 3, 4])) //[2,4,4,4]
console.log(decompressList([1, 1, 2, 3])) //[1,3,3]