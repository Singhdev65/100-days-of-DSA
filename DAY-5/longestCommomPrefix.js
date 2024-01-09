function longestCommonPrefix(arr) {
  if (!arr.length) return ""
  let longestPrefix = ""
  for (let i = 0; i < arr[0].length; i++) {
    if (arr[0] == "") return ""
    if (arr.every(str => str[i] === arr[0][i])) {
      longestPrefix += arr[0][i]
    } else break
  }
  return longestPrefix
}

console.log(longestCommonPrefix(["string", "strings", "tring"]))
