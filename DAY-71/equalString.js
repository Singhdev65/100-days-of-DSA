function equalString(word1, word2) {
    return word1.join('') === word2.join('');
}

console.log(equalString(["ab", "c"], ["a", "bc"])) // true
console.log(equalString(["a", "cb"], ["ab", "c"])) // false