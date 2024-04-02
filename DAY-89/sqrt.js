function Sqrt(x) {
  if (x === 0 || x === 1) return x;
  let result = 1;

  while (result * result <= x) {
    result++;
  }

  return result - 1;
}

console.log(Sqrt(4)); // 2
console.log(Sqrt(8)); // 2
