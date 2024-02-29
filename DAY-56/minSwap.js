function minSwap(s) {
    let swap = 0;
    let openCount = 0;

    for (let char of s) {
        if (char === "[") {
            openCount++
        } else if (char === "]") {
            if (openCount > 0) {
                openCount--
            } else {
                swap++
            }
        }
    }
    return swap
}

console.log(minSwap("[]][][")) // 2
console.log(minSwap("[[][]]")) // 0