function reverse(arr) {
  const _arr = []
  for (let i = 0; i <= arr.length - 1; i++) {
    _arr.unshift(arr[i])
  }
  return _arr
}

console.log(reverse([1, 2, 3, 4, 5])) //[5,4,3,2,1]
