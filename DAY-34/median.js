function median(arr) {
  arr.sort((a, b) => a - b)
  console.log(arr)
  const n = arr.length
  if (n % 2 === 0) {
    const mid = Math.floor(n / 2)
    return (arr[mid - 1] + arr[mid]) / 2
  } else {
   
    return arr[Math.floor(n / 2)]
  }
}

console.log(median([90, 100, 78, 89, 67])) //89
console.log(median([57, 67, 30, 79])) //62
