function firstRepeatingCharacter(str) {
  const obj = {}
  for (let char of str) {
    if (obj[char]) {
      return char
    } else {
      obj[char] = 1
    }
  }
  return null
}

console.log(firstRepeatingCharacter("acbbac"))
console.log(firstRepeatingCharacter("abcdef"))
