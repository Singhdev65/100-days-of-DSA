function removeToMakeValid(s) {
    let balance = 0;
    let result = "";

    for (const char of s) {
        if (char === "(") {
            balance++
        } else if (char === ")") {
            if (balance === 0)
                continue;
            balance--;
        }
        result += char
    }

    let finalResult = "";
    for (let i = result.length - 1; i >= 0; i--) {
        const char = result[i];
        if (char === "(" && balance > 0) {
            balance--;
            continue;
        }
        finalResult = char + finalResult
    }

    return finalResult

}

console.log(removeToMakeValid("lee(t(c)o)de)")) //lee(t(c)o)de
console.log(removeToMakeValid("a)b(c)d")) //ab(c)d
console.log(removeToMakeValid("))((")) //""
