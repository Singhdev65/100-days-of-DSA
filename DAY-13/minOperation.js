function minOperation(str) {
  let flag = 0
  let _str = ""

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] == str[i + 1]) {
      _str += str[i] == "0" ? "1" : "0"
      flag++
    } else {
      _str += str[i]
    }
  }

  console.log(_str)
  return flag
}

// console.log(minOperation("001")) // 1
console.log(minOperation("10100101011001111110")) // 10 // 10101010101010101010
