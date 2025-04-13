function sumFirstAndLastArrayElements(numbers) {

    let firstArray = numbers[0];
    let lastArray = numbers[numbers.length - 1];
    let sum = firstArray + lastArray;

    console.log(sum)
}
sumFirstAndLastArrayElements([20, 30, 40])