function faultyKeyboard(s) {
  let arr = [];
  for (let char of s) {
    if (char === "i") {
      arr.reverse();
    } else {
      arr.push(char);
    }
  }
  return arr.join("");
}

console.log(faultyKeyboard("string")); // "rtsng"
console.log(faultyKeyboard("poiinter")); // "ponter"
