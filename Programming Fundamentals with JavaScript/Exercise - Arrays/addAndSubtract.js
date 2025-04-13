function addAndSubtract(array) {

    let resultArray = [];
    let arraySum = 0;
    let resultArraySum = 0
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {

        let currentNumber = array[i];

        let odd = (currentNumber - i);
        let even = (currentNumber + i);

        if (currentNumber % 2 === 0) {
            resultArray.push(even);
        } else {
            resultArray.push(odd)
        }

        arraySum += currentNumber;
        resultArraySum += resultArray[i];
    }
    console.log(resultArray);
    console.log(arraySum);
    console.log(resultArraySum)
}
addAndSubtract([5, 15, 23, 56, 35])