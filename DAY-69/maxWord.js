function maxWordsInSentence(sentences) {
    let maxWords = 0;

    for (let i = 0; i < sentences.length; i++) {
        const words = sentences[i].split(' ');
        maxWords = Math.max(maxWords, words.length);
    }

    return maxWords;
}

console.log(maxWordsInSentence(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])); // 6
console.log(maxWordsInSentence(["please wait", "continue to fight", "continue to win"])); // 3