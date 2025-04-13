function palindromIntegers(numberArray) {

    let numberArrayLength = numberArray.length;

    for (let i = 0; i < numberArrayLength; i++) {
        let numberAsString = numberArray[i].toString();
        let reversedString = numberAsString.split('').reverse().join('');

        if (numberAsString === reversedString) {
            console.log(true);
        } else {
            console.log(false)
        }
    }
}
palindromIntegers([123,323,421,121])