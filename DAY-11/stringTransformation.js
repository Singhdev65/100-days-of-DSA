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
