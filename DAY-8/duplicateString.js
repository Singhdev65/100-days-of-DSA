/*

 Given a string S, the task is to print all the duplicate characters with their occurrences in the given string .

Example:

Input: S = “geeksforgeeks”
Output:

e, count = 4
g, count = 2
k, count = 2
s, count = 2

*/

function duplicateString(s) {
  let obj = {};
  for (let char of s) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  for (let x in obj) {
    if (obj[x] > 1) {
      continue;
    } else {
      delete obj[x];
    }
  }
  return obj;
}

console.log(duplicateString("geeksofgeeks"));
