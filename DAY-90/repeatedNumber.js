function repeatedNumber(nums) {
  const obj = {};

  nums.forEach((elm) => {
    if (obj[elm]) {
      obj[elm]++;
    } else {
      obj[elm] = 1;
    }
  });

  for (char in obj) {
    if (obj[char] === 1) return char;
  }

  return false;
}

console.log(repeatedNumber([2, 2, 1])); // 1
console.log(repeatedNumber([4, 1, 2, 1, 2])); //4
console.log(repeatedNumber([1])); // 1
