/*

The power of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string s, return the power of s.

Example 1:

Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.
Example 2:

Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

Link: https://leetcode.com/problems/consecutive-characters/

*/

function consecutiveCharacters(s) {
  let maxPower = 1;
  let currentPower = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currentPower++;
    } else {
      currentPower = 1;
    }

    maxPower = Math.max(maxPower, currentPower);
  }
  return maxPower;
}

console.log(consecutiveCharacters("abbcccddddeeeeedcba")); //5
console.log(consecutiveCharacters("leetcode")); // 2
