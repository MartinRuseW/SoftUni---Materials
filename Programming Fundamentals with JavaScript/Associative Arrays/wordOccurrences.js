function wordOccurrences(array) {

    let result = {};

    for (const word of array) {
        if (!result.hasOwnProperty(word)) {
            result[word] = 1;
        } else {
            result[word] += 1;
        }
    }

    let resultArray = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (const word of resultArray) {
        console.log(`${word[0]} -> ${word[1]} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])