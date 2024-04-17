/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

Leetcode : https://leetcode.com/problems/valid-parentheses/


*/

// function validParentheses(str) {
//   let length

//   do {
//     length = str.length
//     str = str.replace("()", "").replace("{}", "").replace("[]", "")
//   } while (length !== str.length)
//   return str.length === 0
// }

// time complexity of the function is O(kn^2).

function validParentheses(s) {
  let obj = { "(": ")", "{": "}", "[": "]" };
  let arr = [];
  for (let char of s) {
    if (obj[char]) arr.push(char);
    else if (obj[arr.pop()] !== char) return false;
  }
  return arr.length == 0;
}

// time complexity of the function is O(n).

console.log(validParentheses("()")); //true
console.log(validParentheses("()[]{}")); //true
console.log(validParentheses("(]")); //false
