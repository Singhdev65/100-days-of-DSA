function addStrings(num1, num2) {
  num1 = num1.split("")
  num2 = num2.split("")
  let carry = "0"
  let arr = []

  while (num1.length || num2.length) {
    let elm1 = num1.pop() ?? 0
    let elm2 = num2.pop() ?? 0
    let sum = String(+elm1 + +elm2 + +carry)
    carry = "0"
    if (sum >= 10) {
      let [carry1, carry2] = sum.split("")
      carry = carry1
      sum = carry2
    }
    arr.unshift(sum)
  }
  if (+carry > 0) {
    arr.unshift(carry)
  }
  return arr.join("")
}

console.log(addStrings("11", "123")); //134
