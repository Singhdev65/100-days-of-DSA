function isValidToken(token) {
    const punctuation = ['.', '!', ','];
    const isLowercaseLetter = (char) => char >= 'a' && char <= 'z';
    const isPunctuation = (char) => punctuation.includes(char);
    const isHyphen = (char) => char === '-';

    if (!token.length) return false;

    let hyphenCount = 0;
    let punctuationCount = 0;

    for (let i = 0; i < token.length; i++) {
        const char = token[i];
        if (!isLowercaseLetter(char) && !isPunctuation(char) && !isHyphen(char)) {
            return false;
        }
        if (char === '-') {
            hyphenCount++;
            if (hyphenCount > 1) return false;
            if (i === 0 || i === token.length - 1 || !isLowercaseLetter(token[i - 1]) || !isLowercaseLetter(token[i + 1])) {
                return false;
            }
        }
        if (isPunctuation(char)) {
            punctuationCount++;
            if (punctuationCount > 1 || i !== token.length - 1) return false;
        }
    }

    return true;
}

function countValidWords(sentence) {
    const tokens = sentence.split(/\s+/);
    let count = 0;
    for (let token of tokens) {
        if (isValidToken(token)) {
            count++;
        }
    }
    return count;
}

console.log(countValidWords("cat and  dog")); // 3
console.log(countValidWords("!this  1-s b8d!")); // 0
console.log(countValidWords("alice and  bob are playing stone-game10")); // 5
