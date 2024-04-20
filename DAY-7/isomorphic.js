/*
Given two strings s and t, determine if they are isomorphic. 

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself._ 

 
Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true

Leetcode: https://leetcode.com/problems/isomorphic-strings/

*/

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  let objStoT = {};
  let objTtoS = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!objStoT[charS]) {
      objStoT[charS] = charT;
    } else {
      if (objStoT[charS] !== charT) {
        return false;
      }
    }

    if (!objTtoS[charT]) {
      objTtoS[charT] = charS;
    } else {
      if (objTtoS[charT] !== charS) {
        return false;
      }
    }
  }

  return true;
}

console.log(isIsomorphic("badc", "baba")); // false
