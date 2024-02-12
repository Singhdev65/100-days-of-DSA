function getIndex(arr, target) {
  return arr.indexOf(target)
}

console.log(getIndex([4,5,6,7,0,1,2], 0)) // 4
console.log(getIndex([4,5,6,7,0,1,2], 3)) // -1
console.log(getIndex([1], 0)) // -1
