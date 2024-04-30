/*
Given a sequence of strings, the task is to find out the second most repeated (or frequent) string in the given sequence.

Note: No two strings are the second most repeated, there will be always a single string.

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

Link: https://www.geeksforgeeks.org/problems/second-most-repeated-string-in-a-sequence0534/1


*/

function mostFrequentElem(nums) {
  const obj = {};
  nums.forEach((item) => {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  });

  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
}

console.log(mostFrequentElem([3, 2, 3])); // 3
console.log(mostFrequentElem([2, 2, 1, 1, 1, 2, 2])); // 2
