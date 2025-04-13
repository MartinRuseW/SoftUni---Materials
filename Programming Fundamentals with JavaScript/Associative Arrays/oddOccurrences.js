function oddOccurrences(array) {

    let resultObject = {};
    let allWords = array.split(' ').map(w => w.toLowerCase());

    for (let index = 0; index < allWords.length; index++) {
        if (!resultObject.hasOwnProperty(allWords[index])) {
            resultObject[allWords[index]] = [];
        }
        resultObject[allWords[index]].push(index);
    }

    let sorted = Object.entries(resultObject).sort((a, b) => a[1][0] - b[1][0]);
    let result = '';

    for (const element of sorted) {
        if (element[1].length % 2 !== 0) {
            result += `${element[0]} `;
        }
    }
    console.log(result);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')