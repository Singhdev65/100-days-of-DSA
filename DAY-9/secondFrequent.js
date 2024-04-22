/*

Given a sequence of strings, the task is to find out the second most repeated (or frequent) string in the given sequence. 

Note: No two strings are the second most repeated, there will always be a single string.

Example 1:

Input:
N = 6
arr[] = {aaa, bbb, ccc, bbb, aaa, aaa}
Output: bbb
Explanation: "bbb" is the second most 
occurring string with frequency 2.

Example 2:

Input: 
N = 6
arr[] = {geek, for, geek, for, geek, aaa}
Output: for
Explanation: "for" is the second most
occurring string with frequency 2.

Your Task:
You don't need to read input or print anything. Your task is to complete the function secFrequent() which takes the string array arr[] and its size N as inputs and returns the second most frequent string in the array. If no such string exists, then return an empty string.


Expected Time Complexity: O(N*max(|Si|).
Expected Auxiliary Space: O(N*max(|Si|).


Constraints:
1<=N<=103

Link: https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/

*/

function secondFrequent(arr) {
  const obj = {};
  arr.forEach((el) => {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  });

  let maxCount = 0;
  let secondMaxCount = 0;
  let result = null;
  for (const key in obj) {
    if (maxCount < obj[key]) {
      secondMaxCount = maxCount;
      maxCount = obj[key];
      result = key;
    } else if (secondMaxCount < obj[key] && obj[key] !== maxCount) {
      secondMaxCount = obj[key];
      result = key;
    }
  }

  return secondMaxCount > 0 ? result : "";
}

console.log(secondFrequent(["aaa", "bbb", "ccc", "bbb", "aaa", "aaa"])); // bbb
console.log(secondFrequent(["geek", "for", "geek", "for", "geek", "aaa"])); //for
