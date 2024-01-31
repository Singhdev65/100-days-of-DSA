// function fibonacci(n) {
//   if (n <= 1) {
//     return n
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2)
//   }
// }

function fibonacci(n) {
  if (n <= 1) {
    return n
  }

  let fibArr = [0, 1]

  for (let i = 2; i <= n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
  }
  return fibArr[n]
}

console.log(fibonacci(2)) // 1
console.log(fibonacci(3)) // 2
console.log(fibonacci(4)) // 3
