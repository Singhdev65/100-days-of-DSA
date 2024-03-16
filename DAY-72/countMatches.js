function countMatches(items, ruleKey, ruleValue) {
    let count = 0;
    for (const item of items) {
        if (
            (ruleKey === "type" && item[0] === ruleValue) ||
            (ruleKey === "color" && item[1] === ruleValue) ||
            (ruleKey === "name" && item[2] === ruleValue)
        ) {
            count++;
        }
    }
    return count;
}

console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver")) //1
console.log(countMatches([["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], "type", "phone")) //2