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

console.log(Anagram("anagram", "nagaram")) //true
console.log(Anagram("rat", "car")) // false
console.log(Anagram("aacc", "ccac")) //false
