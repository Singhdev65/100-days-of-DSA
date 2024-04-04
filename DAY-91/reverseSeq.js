function ReverseSequence(str) {
  const reversedStr = str.split(" ").reverse().join(" ");
  return reversedStr;
}

console.log(ReverseSequence("the sky is blue")); //"blue is sky the"
console.log(ReverseSequence("hello world")); //"world hello"
console.log(ReverseSequence("a good example")); //"example good a"
