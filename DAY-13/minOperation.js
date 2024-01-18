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
