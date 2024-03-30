function PlusOne(digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);
    if (carry === 0) break;
  }

  if (carry > 0) {
    digits.unshift(carry);
  }
  return digits;
}

console.log(PlusOne([1, 2, 3])); // [1,2,4]
console.log(PlusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(PlusOne([9])); // [1,0]
