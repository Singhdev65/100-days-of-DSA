function balancedString(s) {
    let count = 0;
    let balance = 0;

    for (let char of s) {
        if (char === 'R') {
            balance++;
        } else {
            balance--;
        }

        if (balance === 0) {
            count++;
        }
    }

    return count;
};

console.log(balancedString("RLRRLLRLRL")); // 4
console.log(balancedString("RLRRRLLRLL")); // 2
console.log(balancedString("LLLLRRRR")); // 1
