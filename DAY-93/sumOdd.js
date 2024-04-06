function sumOddLengthSubarrays(arr) {
  let result = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let leftCount = i;
    let rightCount = n - i - 1;
    let totalSubarrays = (leftCount + 1) * (rightCount + 1);

    let leftOdd = Math.floor((leftCount + 1) / 2);
    let rightOdd = Math.floor((rightCount + 1) / 2);

    let leftEven = Math.ceil((leftCount + 1) / 2);
    let rightEven = Math.ceil((rightCount + 1) / 2);

    result += arr[i] * (leftOdd * rightOdd + leftEven * rightEven);
  }

  return result;
}

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); // 58
console.log(sumOddLengthSubarrays([1, 2])); // 3
console.log(sumOddLengthSubarrays([10, 11, 12])); // 66
