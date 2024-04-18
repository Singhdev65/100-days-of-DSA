/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

link: https://leetcode.com/problems/longest-common-prefix/

*/

function longestCommonPrefix(arr) {
  if (!arr.length) return "";
  let longestPrefix = "";
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0] == "") return "";
    if (arr.every((str) => str[i] === arr[0][i])) {
      longestPrefix += arr[0][i];
    } else break;
  }
  return longestPrefix;
}

console.log(longestCommonPrefix(["string", "strings", "tring"]));
