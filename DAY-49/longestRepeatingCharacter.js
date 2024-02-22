function longestSubstring(s, k) {
  let maxCount = 0
  let maxUnique = 0
  const count = new Array(26).fill(0)

  for (let start = 0, end = 0; end < s.length; end++) {
    maxUnique = Math.max(
      maxUnique,
      ++count[s.charCodeAt(end) - "A".charCodeAt(0)]
    )

    while (end - start + 1 - maxUnique > k) {
      count[s.charCodeAt(start) - "A".charCodeAt(0)]--
      start++
    }

    maxCount = Math.max(maxCount, end - start + 1)
  }

  return maxCount
}

console.log(longestSubstring("ABAB", 2)) //  4
console.log(longestSubstring("AABABBA", 1)) //  4
