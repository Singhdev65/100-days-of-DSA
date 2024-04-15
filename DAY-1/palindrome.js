/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. 

 Given a string s, return true if it is a palindrome, or false otherwise. 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Link: https://leetcode.com/problems/valid-palindrome/


*/

// function Palindrome(s) {
//   const string = s.replace(/[^A-Z0-9]/gi, "").toLowerCase()
//   const reverseString = string.split("").reverse().join("")

//   if (string !== reverseString) return false

//   return true
// }

/**WITHOUT using reverse function */

function Palindrome(s) {
  const string = s.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  const length = string.length;

  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] != string[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(Palindrome("")); //true
console.log(Palindrome("race a car")); //false
console.log(Palindrome("A man, a plan, a canal: Panama")); //true
console.log(Palindrome("#% A %&  man, a plan, a canal: &&Pan&^&ama")); // true
