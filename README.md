<h1 align="center">100 days of DSA</h1>
<h2 align="center">DSA is Fun! Do it everyday 💯💯</h2>

### Table of Contents

| Day | Topic  | Link                                                                                                                                                                                                                                                                                                        |   Difficulty |
| --- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------: |
| 1   | String | [Valid Palindrome](#given-a-string-s-return-true-if-it-is-a-palindrome-or-false-otherwise)                                                                                                                                                                                                                  | **Beginner** |
| 2   | String | [Valid Anagram](#given-two-strings-s-and-t-return-true-if-t-is-an-anagram-of-s-and-false-otherwise)                                                                                                                                                                                                         | **Beginner** |
| 3   | String | [Valid Parentheses](<#given-a-string-s-containing-just-the-characters-'('-')'-'{'-'}'-'['-and-']'-determine-if-the-input-string-is-valid>)                                                                                                                                                                  | **Beginner** |
| 4   | String | [Reverse String](#write-a-function-that-reverses-a-string-the-input-string-is-given-as-an-array-of-characters-s)                                                                                                                                                                                            | **Beginner** |
| 5   | String | [Longest common prefix](#write-a-function-to-find-the-longest-common-prefix-string-amongst-an-array-of-strings)                                                                                                                                                                                             | **Beginner** |
| 6   | String | [Add Strings](#given-two-non-negative-integers-num1-and-num2-represented-as-string-return-the-sum-of-num1-and-num2-as-a-string)                                                                                                                                                                             | **Beginner** |
| 7   | String | [Isomorphic Strings](#given-two-strings-s-and-t,-determine-if-they-are-isomorphic)                                                                                                                                                                                                                          | **Beginner** |
| 8   | String | [Duplicate character](#given-a-string-s-the-task-is-to-print-all-the-duplicate-characters-with-their-occurrences-in-the-given-string)                                                                                                                                                                       | **Beginner** |
| 9   | String | [Second most frequent String](#given-a-sequence-of-strings,-the-task-is-to-find-out-the-second-most-frequent-string-in-the-given-sequence)                                                                                                                                                                  | **Beginner** |
| 10  | String | [Haystack needle problem](#given-two-string-needle-and-haystack,-return-the-index-of-the-first-occurrence-of-needle-in-haystack-or--1-if-the-needle-is-not-a-part-of-haystack)                                                                                                                              | **Beginner** |
| 11  | String | [Minimum operation to Transform](#given-two-strings-A-and-B-the-task-is-to-convert-A-to-B-if-possible-the-only-operation-allowed-is-to-put-any-character-from-A-and-insert-it-at-front-find-if-it’s-possible-to-convert-the-string-if-yes-then-output-minimum-no-of-operations-required-for-transformation) | **Beginner** |
| 12  | String | [First Repeating character](#given-a-string-return-the-first-recurring-character-in-it-or-null-if-there-is-no-recurring-character)                                                                                                                                                                          | **Beginner** |
| 13  | String | [Minimum number of Flips](#minimum-number-of-flips-to-make-the-binary-string-alternating)                                                                                                                                                                                                                   | **Beginner** |
| 14  | String | [Consecutive Characters](#given-a-string-s,-return-the-power-of-s)                                                                                                                                                                                                                                          | **Beginner** |
| 15  | Array  | [Two Sum](#given-an-array-of-integers-arr-and-an-integer-target-return-indices-of-the-two-numbers-such-that-they-add-up-to-target)                                                                                                                                                                          | **Beginner** |
| 16  | Array  | [Remove Duplicates](#given-an-integer-array-nums-sorted-in-non-decreasing-order-remove-the-duplicates-in-place-such-that-each-unique-element-appears-only-once-the-relative-order-of-the-elements-should-be-kept-the-same-then-return-the-number-of-unique-elements-in-nums)                                | **Beginner** |
| 17  | Array  | [Most frequent element in Array](#given-an-array-nums-of-size-n-return-the-majority-element)                                                                                                                                                                                                                | **Beginner** |
| 18  | Array  | [Running sum of an array](<#given-an-array-nums.-we-define-a-running-sum-of-an-array-as-runningsum[i]-=-sum(nums[0]…nums[i])>)                                                                                                                                                                              | **Beginner** |
| 19  | Array  | [Duplicates in Array](#given-an-array-of-integers-nums-containing-n-+-1-integers-where-each-integer-is-in-the-range-[1,-n]-inclusive-there-is-only-one-repeated-number-in-nums-return-this-repeated-number)                                                                                                 | **Beginner** |
| 20  | Array  | [Sort Array](#given-an-array-nums-with-n-objects-colored-red-white-or-blue-sort-them-in-place-so-that-objects-of-the-same-color-are-adjacent-with-the-colors-in-the-order-red-white-and-blue-we-will-use-the-integers-0-1-and-2-to-represent-the-color-red-white-and-blue-respectively)                     | **Beginner** |
| 21  | Array  | [Reverse Array](#given-an-array-the-task-is-to-reverse-the-array)                                                                                                                                                                                                                                           | **Beginner** |
| 22  | Array  | [Check Duplicates in Array](#given-an-array-return-true-if-any-value-appears-at-least-twice-in-the-array-and-return-false-if-every-element-is-distinct)                                                                                                                                                              | **Beginner** |

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

7.  ### Given two strings s and t, determine if they are isomorphic.

```javascript
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false

  let objStoT = {}
  let objTtoS = {}

  for (let i = 0; i < s.length; i++) {
    const charS = s[i]
    const charT = t[i]

    if (!objStoT[charS]) {
      objStoT[charS] = charT
    } else {
      if (objStoT[charS] !== charT) {
        return false
      }
    }

    if (!objTtoS[charT]) {
      objTtoS[charT] = charS
    } else {
      if (objTtoS[charT] !== charS) {
        return false
      }
    }
  }

  return true
}

console.log(isIsomorphic("badc", "baba")) // false
```

**[⬆ Back to Top](#table-of-contents)**

---

8.  ### Given a string S, the task is to print all the duplicate characters with their occurrences in the given string.

```javascript
function duplicateString(s) {
  let obj = {}
  for (let char of s) {
    if (obj[char]) {
      obj[char]++
    } else {
      obj[char] = 1
    }
  }
  for (let x in obj) {
    if (obj[x] > 1) {
      continue
    } else {
      delete obj[x]
    }
  }
  return obj
}

console.log(duplicateString("geeksofgeeks")) //{g:2, e:4, k:2, s:2}
```

**[⬆ Back to Top](#table-of-contents)**

---

9.  ### Given a sequence of strings, the task is to find out the second most frequent string in the given sequence.

```javascript
function secondFrequent(arr) {
  const obj = {}
  arr.forEach(el => {
    if (obj[el]) {
      obj[el]++
    } else {
      obj[el] = 1
    }
  })

  let maxCount = 0
  let secondMaxCount = 0
  let result = null
  for (const key in obj) {
    if (maxCount < obj[key]) {
      secondMaxCount = maxCount
      maxCount = obj[key]
      result = key
    } else if (secondMaxCount < obj[key] && obj[key] !== maxCount) {
      secondMaxCount = obj[key]
      result = key
    }
  }

  return secondMaxCount > 0 ? result : ""
}

console.log(secondFrequent(["aaa", "bbb", "ccc", "bbb", "aaa", "aaa"])) // bbb
console.log(secondFrequent(["geek", "for", "geek", "for", "geek", "aaa"])) //for
```

**[⬆ Back to Top](#table-of-contents)**

---

10. ### Given two string needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if the needle is not a part of haystack.

```javascript
function subString(haystack, needle) {
  const index = haystack.indexOf(needle)
  return index
}

console.log(subString("subArray", "Array")) // 3
```

**[⬆ Back to Top](#table-of-contents)**

---

11. ### Given two strings A and B, the task is to convert A to B if possible. The only operation allowed is to put any character from A and insert it at front. Find if it’s possible to convert the string. If yes, then output minimum no. of operations required for transformation.

```javascript
function minOperationsToConvert(A, B) {
  if (A.length !== B.length) {
    return -1
  }

  const n = A.length

  let m = {}
  for (let char of A) {
    if (m[char]) {
      m[char]++
    } else {
      m[char] = 1
    }
  }

  for (let i = 0; i < n; i++) {
    if (m[B[i]]) {
      m[B[i]]--
    }
  }

  for (const char in m) {
    if (m[char] !== 0) {
      return -1
    }
  }

  let i = n - 1,
    j = n - 1
  let res = 0
  while (i >= 0 && j >= 0) {
    while (i >= 0 && A[i] !== B[j]) {
      res++
      i--
    }
    i--
    j--
  }
  return res
}

console.log(minOperationsToConvert("ABD", "BAD")) // Output: 1
console.log(minOperationsToConvert("EACBD", "EABCD")) // Output: 3
```

**[⬆ Back to Top](#table-of-contents)**

---

12. ### Given a string, return the first recurring character in it, or null if there is no recurring character.

```javascript
function firstRepeatingCharacter(str) {
  const obj = {}
  for (let char of str) {
    if (obj[char]) {
      return char
    } else {
      obj[char] = 1
    }
  }
  return null
}

console.log(firstRepeatingCharacter("acbbac")) //b
console.log(firstRepeatingCharacter("abcdef")) // null
```

**[⬆ Back to Top](#table-of-contents)**

---

13. ### Minimum Number of Flips to Make the Binary String Alternating.

```javascript
function minOperation(s) {
  const lengthOfString = s.length
  const alternatingPattern = "01"
  let flipCount = 0
  for (let index = 0; index < lengthOfString; ++index) {
    if (s[index] !== alternatingPattern[index % 2]) {
      ++flipCount
    }
  }

  let minimumFlips = Math.min(flipCount, lengthOfString - flipCount)

  for (let index = 0; index < lengthOfString; ++index) {
    if (s[index] !== alternatingPattern[index % 2]) {
      --flipCount
    }

    if (s[index] !== alternatingPattern[(index + lengthOfString) % 2]) {
      ++flipCount
    }

    minimumFlips = Math.min(minimumFlips, flipCount, lengthOfString - flipCount)
  }

  return minimumFlips
}

console.log(minOperation("10100101011001111110")) // 10 // 10101010101010101010
```

**[⬆ Back to Top](#table-of-contents)**

---

14. ### Given a string s, return the power of s.

```javascript
function consecutiveCharacters(s) {
  let maxPower = 1
  let currentPower = 1

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currentPower++
    } else {
      currentPower = 1
    }

    maxPower = Math.max(maxPower, currentPower)
  }
  return maxPower
}

console.log(consecutiveCharacters("abbcccddddeeeeedcba")) //5
console.log(consecutiveCharacters("leetcode")) // 2
```

**[⬆ Back to Top](#table-of-contents)**

---

15. ### Given an array of integers arr and an integer target, return indices of the two numbers such that they add up to target.

```javascript
function twoSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]
      }
    }
  }
  return null
}

console.log(twoSum([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSum([3, 2, 4], 6)) // [1,2]
console.log(twoSum([3, 3], 6)) // [0,1]
```

**[⬆ Back to Top](#table-of-contents)**

---

16. ### Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

```javascript
function removeDuplicate(arr) {
  if (arr.length === 0) {
    return 0
  }

  let uniqueCount = 1

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[uniqueCount] = arr[i]
      uniqueCount++
    }
  }

  return uniqueCount
}

console.log(removeDuplicate([1, 1, 2])) //[1,2]
```

**[⬆ Back to Top](#table-of-contents)**

---

17. ### Given an array nums of size n, return the majority element.

```javascript
function mostFrequentElem(nums) {
  const obj = {}
  nums.forEach(item => {
    if (obj[item]) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  })

  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b))
}

console.log(mostFrequentElem([3, 2, 3])) // 3
console.log(mostFrequentElem([2, 2, 1, 1, 1, 2, 2])) // 2
```

**[⬆ Back to Top](#table-of-contents)**

---

18. ### Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

```javascript
function runningSum(nums) {
  let arr = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1]
    arr.push(nums[i])
  }
  return arr
}

console.log(runningSum([1, 2, 3, 4])) // [1,3,6,10]
console.log(runningSum([1, 1, 1, 1, 1])) // [1,2,3,4,5]
console.log(runningSum([3, 1, 2, 10, 1])) // [3,4,6,16,17]
```

**[⬆ Back to Top](#table-of-contents)**

---

19. ### Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive There is only one repeated number in nums return this repeated number.

```javascript
function findDuplicate(nums) {
  const obj = {}
  nums.forEach(num => {
    if (obj[num]) {
      obj[num]++
    } else {
      obj[num] = 1
    }
  })
  for (let x in obj) {
    if (obj[x] > 1) {
      return x
    }
  }
  return null
}

console.log(findDuplicate([1, 3, 4, 2, 2])) //2
console.log(findDuplicate([3, 1, 3, 4, 2])) //3
```

**[⬆ Back to Top](#table-of-contents)**

---

20. ### Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

```javascript
function sortColor(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

console.log(sortColor([2, 0, 2, 1, 1, 0])) // [0,0,1,1,2,2]
console.log(sortColor([2, 0, 1])) //[0,1,2]
```

**[⬆ Back to Top](#table-of-contents)**

---

21. ### Given an array the task is to reverse the array.

```javascript
function reverse(arr) {
  const _arr = []
  for (let i = 0; i <= arr.length - 1; i++) {
    _arr.unshift(arr[i])
  }
  return _arr
}

console.log(reverse([1, 2, 3, 4, 5])) //[5,4,3,2,1]
```

**[⬆ Back to Top](#table-of-contents)**

---

22. ### Given an array return true if any value appears at least twice in the array, and return false if every element is distinct.

```javascript
function distinct(arr) {
  const obj = {}

  arr.forEach(element => {
    if (obj[element]) {
      obj[element]++
    } else {
      obj[element] = 1
    }
  })

  for (let char in obj) {
    if (obj[char] > 1) {
      return true
    }
  }

  return false
}

console.log(distinct([1, 2, 3, 1])) //true
console.log(distinct([1, 2, 3, 4])) // false
console.log(distinct([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) // true
```

**[⬆ Back to Top](#table-of-contents)**

---
