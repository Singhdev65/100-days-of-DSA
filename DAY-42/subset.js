function isSubset(a1, a2) {
  n = a1.length
  m = a2.length
  const freqMap = {}
  for (let i = 0; i < n; i++) {
    if (freqMap[a1[i]]) {
      freqMap[a1[i]]++
    } else {
      freqMap[a1[i]] = 1
    }
  }

  for (let i = 0; i < m; i++) {
    if (!freqMap[a2[i]] || freqMap[a2[i]] === 0) {
      return false
    }
    freqMap[a2[i]]--
  }

  return true
}

console.log(isSubset([11, 7, 1, 13, 21, 3, 7, 3], [11, 3, 7, 1, 7])) //true
console.log(isSubset([1, 2, 3, 4, 4, 5, 6], [1, 2, 4])) //true
console.log(isSubset([10, 5, 2, 23, 19], [19, 5, 3])) //false
