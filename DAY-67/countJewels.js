function countJewels(jewels, stones) {
    let count = 0;
    for (let stone of stones) {
        if (jewels.includes(stone)) {
            count++;
        }
    }
    return count;
}

console.log(countJewels("aA", "aAAbbbb")); // 3
console.log(countJewels("z", "ZZ")); // 0