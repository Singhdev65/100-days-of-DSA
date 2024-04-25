/*
Given a string, return the first recurring character in it, or null if there is no recurring character.

For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

Link: https://www.geeksforgeeks.org/find-the-first-repeated-character-in-a-string/
*/

function firstRepeatingCharacter(str) {
  const obj = {};
  for (let char of str) {
    if (obj[char]) {
      return char;
    } else {
      obj[char] = 1;
    }
  }
  return null;
}

console.log(firstRepeatingCharacter("acbbac"));
console.log(firstRepeatingCharacter("abcdef"));
