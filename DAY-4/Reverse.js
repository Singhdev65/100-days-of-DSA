function ReverseString(s) {
  let start = 0
  let end = s.length - 1
  while (start <= end) {
    [s[start], s[end]] = [s[end], s[start]]
    start++
    end--
  }
  return s;
}

console.log(ReverseString(["h", "e", "l", "l", "o"]))
