function sumFirstAndLast(array) {

    let firstNumber = Number(array.shift());
    let lastNumber = Number(array.pop());

    let sum = firstNumber + lastNumber;

    console.log(sum);
}
sumFirstAndLast(['20', '30', '40'])