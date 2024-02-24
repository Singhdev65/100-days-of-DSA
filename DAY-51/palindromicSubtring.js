function countPalindromicSubstring(s) {
  let count = 0
  function isPalindrome(str) {
    return str === str.split("").reverse().join("")
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s.substring(i, j + 1))) {
        count++
      }
    }
  }

  return count
}

console.log(countPalindromicSubstring("abc")) //3
console.log(countPalindromicSubstring("aaa")) //6
