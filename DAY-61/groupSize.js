function hasGroupsSizeX(deck) {
    const cardCount = {};

    for (let card of deck) {
        cardCount[card] = (cardCount[card] || 0) + 1;
    }
    const findMinCount = counts => {
        let minCount = Number.MAX_SAFE_INTEGER;
        for (let count of counts) {
            minCount = Math.min(minCount, count);
        }
        return minCount;
    };

    const counts = Object.values(cardCount);

    const minCount = findMinCount(counts);

    for (let count of counts) {
        if (count % minCount !== 0) {
            return false;
        }
    }

    return true;
}

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])); // true
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])); //false