function PalinArray(arr) {
  function isPalindrome(num) {
    return String(num) === String(num).split("").reverse().join("")
  }

  return arr.every(num => isPalindrome(num))
}

console.log(PalinArray([111, 222, 333, 444, 555])) // true
console.log(PalinArray([121, 131, 20])) //false
