function longestPrefixSuffix(s) {
  const n = s.length
  let len = 0
  let i = 1
  let lpsLength = 0

  while (i < n) {
    if (s[i] === s[len]) {
      len++
      lpsLength = len
      i++
    } else {
      if (len !== 0) {
        len = 0
      } else {
        lpsLength = 0
        i++
      }
    }
  }

  return lpsLength
}

console.log(longestPrefixSuffix("abab")) //2
console.log(longestPrefixSuffix("aaaa")) //3
