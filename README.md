<h1 align="center">100 days of DSA</h1>
<h2 align="center">DSA is Fun! Do it everyday 💯💯</h2>

###start-solving-you-will-fall-in-❤️❤️

1. **[Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) ?**

```javascript
function Palindrome(s) {
  const string = s.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  const reverseString = string.split("").reverse().join("");

  if (string !== reverseString) return false;

  return true;
}

console.log(Palindrome("")); //true
console.log(Palindrome("race a car")); //false
console.log(Palindrome("A man, a plan, a canal: Panama")); //true
console.log(Palindrome("#% A %&  man, a plan, a canal: &&Pan&^&ama")); // true
```

```javascript
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
```

2. **[Valid Anagram](https://leetcode.com/problems/valid-anagram/) ?**

```javascript
function Anagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCount = {};

  for (let char of s) {
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }

  for (let char of t) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

console.log(Anagram("anagram", "nagaram")); //true
console.log(Anagram("rat", "car")); // false
console.log(Anagram("aacc", "ccac")); //false
```

3. **[Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) ?**

```javascript
function validParentheses(str) {
  let length;

  do {
    length = str.length;
    str = str.replace("()", "").replace("{}", "").replace("[]", "");
  } while (length !== str.length);
  return str.length === 0;
}

console.log(validParentheses("()")); //true
console.log(validParentheses("()[]{}")); //true
console.log(validParentheses("(]")); //false
```

```javascript
function validParentheses(s) {
  let obj = { "(": ")", "{": "}", "[": "]" };
  let arr = [];
  for (let char of s) {
    if (obj[char]) arr.push(char);
    else if (obj[arr.pop()] !== char) return false;
  }
  return arr.length == 0;
}
console.log(validParentheses("()")); //true
console.log(validParentheses("()[]{}")); //true
console.log(validParentheses("(]")); //false
```

4. **[Array Reversal with constant space complexity](https://leetcode.com/problems/reverse-string/) ?**

```javascript
function reverseString(s) {
  let start = 0;
  let end = s.length - 1;
  while (start <= end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
  return s;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
```

5. **[Longest common prefix](https://leetcode.com/problems/longest-common-prefix/) ?**

```javascript
function longestCommonPrefix(arr) {
  if (!arr.length) return "";
  let longestPrefix = "";
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0] == "") return "";
    if (arr.every((str) => str[i] === arr[0][i])) {
      longestPrefix += arr[0][i];
    } else break;
  }
  return longestPrefix;
}

console.log(longestCommonPrefix(["string", "strings", "tring"]));
```

6. **[Add Strings](https://leetcode.com/problems/add-strings/) ?**

```javascript
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
```

7. **[Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) ?**

```javascript
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  let objStoT = {};
  let objTtoS = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!objStoT[charS]) {
      objStoT[charS] = charT;
    } else {
      if (objStoT[charS] !== charT) {
        return false;
      }
    }

    if (!objTtoS[charT]) {
      objTtoS[charT] = charS;
    } else {
      if (objTtoS[charT] !== charS) {
        return false;
      }
    }
  }

  return true;
}

console.log(isIsomorphic("badc", "baba")); // false
```

8. **[Duplicate String](https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/) ?**

```javascript
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
```

9. **[Second repeated word sequence](https://www.geeksforgeeks.org/second-repeated-word-sequence/) ?**

```javascript
function secondFrequent(arr) {
  const obj = {};
  arr.forEach((el) => {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  });

  let maxCount = 0;
  let secondMaxCount = 0;
  let result = null;
  for (const key in obj) {
    if (maxCount < obj[key]) {
      secondMaxCount = maxCount;
      maxCount = obj[key];
      result = key;
    } else if (secondMaxCount < obj[key] && obj[key] !== maxCount) {
      secondMaxCount = obj[key];
      result = key;
    }
  }

  return secondMaxCount > 0 ? result : "";
}

console.log(secondFrequent(["aaa", "bbb", "ccc", "bbb", "aaa", "aaa"])); // bbb
console.log(secondFrequent(["geek", "for", "geek", "for", "geek", "aaa"])); //for
```

10. **[Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) ?**

```javascript
function subString(haystack, needle) {
  const index = haystack.indexOf(needle);
  return index;
}

console.log(subString("subArray", "Array")); // 3
```

11. **[Minimum Operation](https://www.geeksforgeeks.org/transform-one-string-to-another-using-minimum-number-of-given-operation/) ?**

```javascript
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
```

12. **[First Repeating character in String](https://www.geeksforgeeks.org/find-the-first-repeated-character-in-a-string/) ?**

```javascript
function firstRepeatingCharacter(str) {
  const obj = {};
  for (let char of str) {
    if (obj[char]) {
      return char;
    } else {
      obj[char] = 1;
    }
  }
  return null;
}

console.log(firstRepeatingCharacter("acbbac"));
console.log(firstRepeatingCharacter("abcdef"));
```

13. **[Minimum Number of Flips to Make the Binary String Alternating](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/) ?**

```javascript
function minOperation(s) {
  const lengthOfString = s.length;
  const alternatingPattern = "01";
  let flipCount = 0;
  for (let index = 0; index < lengthOfString; ++index) {
    if (s[index] !== alternatingPattern[index % 2]) {
      ++flipCount;
    }
  }

  let minimumFlips = Math.min(flipCount, lengthOfString - flipCount);

  for (let index = 0; index < lengthOfString; ++index) {
    if (s[index] !== alternatingPattern[index % 2]) {
      --flipCount;
    }

    if (s[index] !== alternatingPattern[(index + lengthOfString) % 2]) {
      ++flipCount;
    }

    minimumFlips = Math.min(
      minimumFlips,
      flipCount,
      lengthOfString - flipCount
    );
  }

  return minimumFlips;
}

console.log(minOperation("10100101011001111110")); // 10 // 10101010101010101010
```

14. **[Consecutive Characters](https://leetcode.com/problems/consecutive-characters/) ?**

```javascript
function consecutiveCharacters(s) {
  let maxPower = 1;
  let currentPower = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currentPower++;
    } else {
      currentPower = 1;
    }

    maxPower = Math.max(maxPower, currentPower);
  }
  return maxPower;
}

console.log(consecutiveCharacters("abbcccddddeeeeedcba")); //5
console.log(consecutiveCharacters("leetcode")); // 2
```

15. **[Two Sum](https://leetcode.com/problems/two-sum/) ?**

```javascript
function twoSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
```

16. **[Remove Duplicates](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/) ?**

```javascript
function removeDuplicate(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let uniqueCount = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[uniqueCount] = arr[i];
      uniqueCount++;
    }
  }

  return uniqueCount;
}

console.log(removeDuplicate([1, 1, 2])); //[1,2]
```

17. **[Most Frequent Element in a String](https://www.geeksforgeeks.org/problems/second-most-repeated-string-in-a-sequence0534/1) ?**

```javascript
function mostFrequentElem(nums) {
  const obj = {};
  nums.forEach((item) => {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  });

  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
}

console.log(mostFrequentElem([3, 2, 3])); // 3
console.log(mostFrequentElem([2, 2, 1, 1, 1, 2, 2])); // 2
```

18. **[Running Sum of 1D Array](https://leetcode.com/problems/running-sum-of-1d-array/) ?**

```javascript
function runningSum(nums) {
  let arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
    arr.push(nums[i]);
  }
  return arr;
}

console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]
console.log(runningSum([1, 1, 1, 1, 1])); // [1,2,3,4,5]
console.log(runningSum([3, 1, 2, 10, 1])); // [3,4,6,16,17]
```

**[⬆ Back to Top](#start-solving-you-will-fall-in-❤️❤️)**

---
