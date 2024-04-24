/*
Given two strings A and B, the task is to convert A to B if possible. 
The only operation allowed is to put any character from A and insert it at front. 
Find if it’s possible to convert the string. 
If yes, then output minimum no. of operations required for transformation.

Examples: 

Input:  A = "ABD", B = "BAD"
Output: 1
Explanation: Pick B and insert it at front.
Input:  A = "EACBD", B = "EABCD"
Output: 3
Explanation: Pick B and insert at front, EACBD => BEACD
             Pick A and insert at front, BEACD => ABECD
             Pick E and insert at front, ABECD => EABCD


  Link: https://www.geeksforgeeks.org/transform-one-string-to-another-using-minimum-number-of-given-operation/

*/

function minOperationsToConvert(A, B) {
  if (A.length !== B.length) {
    return -1;
  }

  const n = A.length;

  let m = {};
  for (let char of A) {
    if (m[char]) {
      m[char]++;
    } else {
      m[char] = 1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (m[B[i]]) {
      m[B[i]]--;
    }
  }

  for (const char in m) {
    if (m[char] !== 0) {
      return -1;
    }
  }

  let i = n - 1,
    j = n - 1;
  let res = 0;
  while (i >= 0 && j >= 0) {
    while (i >= 0 && A[i] !== B[j]) {
      res++;
      i--;
    }
    i--;
    j--;
  }
  return res;
}

console.log(minOperationsToConvert("ABD", "BAD")); // Output: 1
console.log(minOperationsToConvert("EACBD", "EABCD")); // Output: 3
