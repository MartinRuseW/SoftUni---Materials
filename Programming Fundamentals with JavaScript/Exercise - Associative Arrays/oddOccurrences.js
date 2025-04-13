function oddOccurrences(words) {

    let resultObject = {};
    let allWords = words
    .split(' ')
    .map(w => w.toLowerCase());

    let allWordsLength = allWords.length;

    for (let index = 0; index < allWordsLength; index++) {
        if (!resultObject.hasOwnProperty(allWords[index])) {
            resultObject[allWords[index]] = [];
        }
        resultObject[allWords[index]].push(index);
    }

    let sorted = Object.entries(resultObject).sort((a, b) => a[1][0] - b[1][0]);
    let result = '';

    for (const el of sorted) {
        if (el[1].length % 2 !== 0) {
            result += `${el[0]} `;
        }
    }
    console.log(result);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')