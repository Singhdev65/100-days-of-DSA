function getNumericKeypadSequence(sentence) {
  const keypad = {
    A: "2",
    B: "22",
    C: "222",
    D: "3",
    E: "33",
    F: "333",
    G: "4",
    H: "44",
    I: "444",
    J: "5",
    K: "55",
    L: "555",
    M: "6",
    N: "66",
    O: "666",
    P: "7",
    Q: "77",
    R: "777",
    S: "7777",
    T: "8",
    U: "88",
    V: "888",
    W: "9",
    X: "99",
    Y: "999",
    Z: "9999",
    " ": "0"
  }

  let sequence = ""
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i].toUpperCase()
    if (keypad[char]) {
      sequence += keypad[char]
    }
  }
  return sequence
}

console.log(getNumericKeypadSequence("GEEKSFORGEEKS")) // 4333355777733366677743333557777
console.log(getNumericKeypadSequence("HELLO WORLD")) // 4433555555666096667775553
