function faultyKeyboard(s) {
  let result = "";
  let currentString = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "i") {
      result += currentString.split("").reverse().join("");
      currentString = "";
    } else {
      currentString += s[i];
    }
  }

  result += currentString.split("").reverse().join("");

  return result;
}

console.log(faultyKeyboard("string")); // "rtsng"
console.log(faultyKeyboard("poiinter")); // "ponter"
