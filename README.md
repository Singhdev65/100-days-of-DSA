<h1 align="center">100 days of DSA</h1>
<h2 align="center">DSA is Fun! Do it everyday 💯💯</h2>

### Table of Contents

| Day | Topic  | Link                                                                                                                                       |   Difficulty |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ | -----------: |
| 1          | String | [Valid Palindrome](#given-a-string-s-return-true-if-it-is-a-palindrome-or-false-otherwise)                                                 | **Beginner** |
| 2          | String | [Valid Anagram](#given-two-strings-s-and-t-return-true-if-t-is-an-anagram-of-s-and-false-otherwise)                                        | **Beginner** |
| 3          | String | [Valid Parentheses](<#given-a-string-s-containing-just-the-characters-'('-')'-'{'-'}'-'['-and-']'-determine-if-the-input-string-is-valid>) | **Beginner** |
| 4          | String | [Reverse String](#write-a-function-that-reverses-a-string-the-input-string-is-given-as-an-array-of-characters-s)                           | **Beginner** |
| 5          | String | [Longest common prefix](#write-a-function-to-find-the-longest-common-prefix-string-amongst-an-array-of-strings)                            | **Beginner** |
| 6          | String | [Add Strings](#given-two-non-negative-integers-num1-and-num2-represented-as-string-return-the-sum-of-num1-and-num2-as-a-string)            | **Beginner** |

1. ### Given a string s, return true if it is a palindrome, or false otherwise

```javascript
function Palindrome(s) {
  const string = s.replace(/[^A-Z0-9]/gi, "").toLowerCase()
  const reverseString = string.split("").reverse().join("")

  if (string !== reverseString) return false

  return true
}

console.log(Palindrome("")) //true
console.log(Palindrome("race a car")) //false
console.log(Palindrome("A man, a plan, a canal: Panama")) //true
console.log(Palindrome("#% A %&  man, a plan, a canal: &&Pan&^&ama")) // true
```

```javascript
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
```

**[⬆ Back to Top](#table-of-contents)**

---

2.  ### Given two strings s and t, return true if t is an anagram of s, and false otherwise.

```javascript
function Anagram(s, t) {
  if (s.length !== t.length) {
    return false
  }

  const charCount = {}

  for (let char of s) {
    if (charCount[char]) {
      charCount[char] += 1
    } else {
      charCount[char] = 1
    }
  }

  for (let char of t) {
    if (!charCount[char]) {
      return false
    }
    charCount[char]--
  }

  return true
}
```

**[⬆ Back to Top](#table-of-contents)**

---

3.  ### Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

```javascript
function validParentheses(str) {
  let length

  do {
    length = str.length
    str = str.replace("()", "").replace("{}", "").replace("[]", "")
  } while (length !== str.length)
  return str.length === 0
}

console.log(validParentheses("()")) //true
console.log(validParentheses("()[]{}")) //true
console.log(validParentheses("(]")) //false
```

**[⬆ Back to Top](#table-of-contents)**

---

4.  ### Write a function that reverses a string. The input string is given as an array of characters s.

```javascript
function ReverseString(arr) {
  let start = 0
  let end = s.length - 1
  while (start <= end) {
    ;[s[start], s[end]] = [s[end], s[start]]
    start++
    end--
  }
  return s
}

console.log(ReverseString(["h", "e", "l", "l", "o"]))
```

**[⬆ Back to Top](#table-of-contents)**

---

5.  ### Write a function to find the longest common prefix string amongst an array of strings.

```javascript
function longestCommonPrefix(arr) {
  if (!arr.length) return ""
  let longestPrefix = ""
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0] == "") return ""
    if (arr.every(str => str[i] === arr[0][i])) {
      longestPrefix += arr[0][i]
    } else break
  }
  return longestPrefix
}

console.log(longestCommonPrefix(["string", "strings", "tring"]))
```

**[⬆ Back to Top](#table-of-contents)**

---

6.  ### Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

```javascript
function addStrings(num1, num2) {
  num1 = num1.split("")
  num2 = num2.split("")
  let carry = "0"
  let arr = []

  while (num1.length || num2.length) {
    let elm1 = num1.pop() ?? 0
    let elm2 = num2.pop() ?? 0
    let sum = String(+elm1 + +elm2 + +carry)
    carry = "0"
    if (sum >= 10) {
      let [carry1, carry2] = sum.split("")
      carry = carry1
      sum = carry2
    }
    arr.unshift(sum)
  }
  if (+carry > 0) {
    arr.unshift(carry)
  }
  return arr.join("")
}

console.log(addStrings("11", "123")) //134
```

**[⬆ Back to Top](#table-of-contents)**

---
