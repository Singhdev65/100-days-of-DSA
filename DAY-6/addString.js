/*

Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"
 

Constraints:

1 <= num1.length, num2.length <= 10^4

num1 and num2 consist of only digits.

num1 and num2 don't have any leading zeros except for the zero itself.

Leetcode: https://leetcode.com/problems/add-strings/


*/

function addStrings(num1, num2) {
  num1 = num1.split("");
  num2 = num2.split("");
  let carry = "0";
  let arr = [];

  while (num1.length || num2.length) {
    let elm1 = num1.pop() ?? 0;
    let elm2 = num2.pop() ?? 0;
    let sum = String(+elm1 + +elm2 + +carry);
    carry = "0";
    if (sum >= 10) {
      let [carry1, carry2] = sum.split("");
      carry = carry1;
      sum = carry2;
    }
    arr.unshift(sum);
  }
  if (+carry > 0) {
    arr.unshift(carry);
  }
  return arr.join("");
}

console.log(addStrings("11", "123")); //134
