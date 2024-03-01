function minSwap(s) {
    let swap = 0;
    let openCount = 0;
    let closeCount = 0;
    let disbalancedCount = 0;

    for (let char of s) {
        if (char === "[") {
            openCount++
            if (disbalancedCount > 0) {
                swap += disbalancedCount
                disbalancedCount--
            }
        } else if (char === "]") {
            closeCount++;
            disbalancedCount = closeCount - openCount 
        }
    }
    return swap
}

console.log(minSwap("[]][][")) // 2
console.log(minSwap("[[][]]")) // 0