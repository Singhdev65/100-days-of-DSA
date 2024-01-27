function mergeArray(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1.pop()
  }
  for (let j = 0; j < n; j++) {
    nums1.push(nums2[j])
  }
  return nums1.sort((a, b) => a - b)
}

console.log(mergeArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) //[1,2,2,3,5,6]
console.log(mergeArray([1], 1, [], 0)) //[1]
console.log(mergeArray([0], 0, [1], 1)) //[1]
