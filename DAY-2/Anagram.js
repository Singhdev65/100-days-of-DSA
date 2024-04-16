/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

link: https://leetcode.com/problems/valid-anagram/

*/
function Anagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCount = {};

  for (let char of s) {
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }

  for (let char of t) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

console.log(Anagram("anagram", "nagaram")); //true
console.log(Anagram("rat", "car")); // false
console.log(Anagram("aacc", "ccac")); //false
