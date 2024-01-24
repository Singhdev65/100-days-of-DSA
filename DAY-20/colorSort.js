function sortColor(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

console.log(sortColor([2,0,2,1,1,0])); // [0,0,1,1,2,2]
console.log(sortColor([2,0,1])); //[0,1,2]
