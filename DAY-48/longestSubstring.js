function lengthOfLongestSubstring(s) {
  let charIndexMap = {}
  let maxLength = 0
  let start = 0

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (char in charIndexMap && charIndexMap[char] >= start) {
      start = charIndexMap[char] + 1
    } else {
      maxLength = Math.max(maxLength, i - start + 1)
    }

    charIndexMap[char] = i
  }

  return maxLength
}

console.log(lengthOfLongestSubstring("abcabcbb")) //3
console.log(lengthOfLongestSubstring("bbbbb")) //1
console.log(lengthOfLongestSubstring("pwwkew")) //3