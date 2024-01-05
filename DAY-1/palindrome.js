// function Palindrome(s) {
//   const string = s.replace(/[^A-Z0-9]/gi, "").toLowerCase()
//   const reverseString = string.split("").reverse().join("")

//   if (string !== reverseString) return false

//   return true
// }

/**WITHOUT using reverse function */

function Palindrome(s) {
  const string = s.replace(/[^A-Z0-9]/gi, "").toLowerCase()
  const length = string.length

  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] != string[length - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(Palindrome("")) //true
console.log(Palindrome("race a car")) //false
console.log(Palindrome("A man, a plan, a canal: Panama")) //true
console.log(Palindrome("#% A %&  man, a plan, a canal: &&Pan&^&ama")) // true
