function charactersInRange(firstCharacter, secondCharacter) {

    let rangeStart = Math.min(firstCharacter.charCodeAt(), secondCharacter.charCodeAt());
    let rangeEnd = Math.max(firstCharacter.charCodeAt(), secondCharacter.charCodeAt());
    let resultString = '';

    for (let i = rangeStart + 1; i < rangeEnd; i++) {
        let singleChar = String.fromCharCode(i);

        if (i + 1 === rangeEnd) {
            resultString += `${singleChar}`;
        } else {
            resultString += `${singleChar} `;
        }
    }

    console.log(resultString);
}
let returnedValue = charactersInRange('a', 'd');