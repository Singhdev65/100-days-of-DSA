function romanToInt(s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  const integers = s.split("").map(char => romanValues[char])

  let total = 0
  let i = 0

  while (i < integers.length) {
    if (integers[i] < integers[i + 1]) {
      total += integers[i + 1] - integers[i]
      i += 2
    } else {
      total += integers[i]
      i++
    }
  }

  return total
}

console.log(romanToInt("III")) // 3
console.log(romanToInt("LVIII")) //58
console.log(romanToInt("MCMXCIV")) //1994
