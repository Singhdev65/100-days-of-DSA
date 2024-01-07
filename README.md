<h1 align="center">100 days of DSA</h1>
<h2 align="center">DSA is Fun! Do it everyday 💯💯</h2>

### Table of Contents

| Day Number | Topic  | Link                                                                                                                                       |   Difficulty |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ | -----------: |
| 1          | String | [Valid Palindrome](#given-a-string-s-return-true-if-it-is-a-palindrome-or-false-otherwise)                                                 | **Beginner** |
| 2          | String | [Valid Anagram](#given-two-strings-s-and-t-return-true-if-t-is-an-anagram-of-s-and-false-otherwise)                                        | **Beginner** |
| 3          | String | [Valid Parentheses](<#given-a-string-s-containing-just-the-characters-'('-')'-'{'-'}'-'['-and-']'-determine-if-the-input-string-is-valid>) | **Beginner** |

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
