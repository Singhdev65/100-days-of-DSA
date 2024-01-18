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
