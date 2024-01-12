function duplicateString(s) {
  let obj = {}
  for (let char of s) {
    if (obj[char]) {
      obj[char]++
    } else {
      obj[char] = 1
    }
  }
  for (let x in obj) {
    if (obj[x] > 1) {
      continue
    } else {
      delete obj[x]
    }
  }
  return obj
}

console.log(duplicateString("geeksofgeeks"))
