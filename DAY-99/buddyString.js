function BuddyString(s, goal) {
  if (s.length !== goal.length) return false;

  if (s === goal) {
    const obj = {};
    for (let i = 0; i < s.length; i++) {
      if (obj[s[i]]) {
        return true;
      } else {
        obj[s[i]] = 1;
      }
    }
    return false;
  }

  let diffCount = 0;
  let indexArr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diffCount++;
      indexArr.push(i);
    }
  }

  return (
    diffCount === 2 &&
    s[indexArr[0]] === goal[indexArr[1]] &&
    s[indexArr[1]] === goal[indexArr[0]]
  );
}

console.log(BuddyString("ab", "ba")); // true
console.log(BuddyString("ab", "ab")); // false
console.log(BuddyString("aa", "aa")); // true
