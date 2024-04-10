function canBeMadeEqual(s) {
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    const charCount = {};
    const sCopy = s.slice();
    sCopy.splice(i, 1);
    sCopy.forEach((char) => {
      charCount[char] = (charCount[char] || 0) + 1;
    });
    if (new Set(Object.values(charCount)).size === 1) return true;
  }
  return false;
}

console.log(canBeMadeEqual("abcc")); // true
console.log(canBeMadeEqual("aazz")); // false
