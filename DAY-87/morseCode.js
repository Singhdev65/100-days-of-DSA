function MorseRepresentations(words) {
  const morseCodeMap = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  const transformations = new Set();

  for (const word of words) {
    let morseRepresentation = "";
    for (const char of word) {
      morseRepresentation += morseCodeMap[char];
    }
    transformations.add(morseRepresentation);
  }

  return transformations.size;
}

console.log(MorseRepresentations(["gin", "zen", "gig", "msg"])); // 2
console.log(MorseRepresentations(["a"])); // 1
