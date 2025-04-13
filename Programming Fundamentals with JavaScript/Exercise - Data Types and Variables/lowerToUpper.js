function lowerToUpper(char) {

    let asciiValue = char.charCodeAt();

    if (asciiValue >= 65 && asciiValue <= 90) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}
lowerToUpper('L')