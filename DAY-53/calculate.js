function calculate(s) {
  let num = 0
  let arr = []
  let sign = "+"

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(parseInt(s[i]))) {
      num = num * 10 + parseInt(s[i])
    }
    if (isNaN(parseInt(s[i])) || i === s.length - 1) {
      if (sign === "+") {
        arr.push(num)
      } else if (sign === "-") {
        arr.push(-num)
      } else if (sign === "*") {
        arr.push(arr.pop() * num)
      } else if (sign === "/") {
        arr.push(parseInt(arr.pop() / num))
      }
      sign = s[i]
      num = 0
    }
  }

  let result = 0
  while (arr.length > 0) {
    result += arr.pop()
  }
  return result
}

console.log(calculate("3+2*2")) // 7
console.log(calculate("3/2")) // 1
console.log(calculate("3+5/2")) // 5
