function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}

function firstPalindromicString(arr) {
    return arr.find(elm => isPalindrome(elm)) || "";
}

console.log(firstPalindromicString(["abc", "car", "ada", "racecar", "cool"])) //ada
console.log(firstPalindromicString(["notapalindrome", "racecar"])) //racecar
console.log(firstPalindromicString(["def", "ghi"])) // ""