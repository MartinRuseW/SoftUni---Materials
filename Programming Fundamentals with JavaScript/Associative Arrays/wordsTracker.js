function wordTracker(array) {

    let result = {};
    let words = array.shift().split(' ');

    for (const word of words) {
        result[word] = 0;
    }

    for (const word of array) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }

    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (const word of sorted) {
        console.log(`${word[0]} - ${word[1]}`);
    }
}
wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])