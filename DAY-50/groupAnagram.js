function groupAnagrams(strs) {
  const groups = {}

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("")
    if (!groups[sortedStr]) {
      groups[sortedStr] = [str]
    } else {
      groups[sortedStr].push(str)
    }
  }

  return Object.values(groups)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) //[["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])) //[[""]]
console.log(groupAnagrams(["a"])) //[["a"]]
