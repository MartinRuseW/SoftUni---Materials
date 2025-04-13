function solve(array) {

    let result = [];
    let currentNumber = array[0];
    result.push(currentNumber);

    for (let index = 1; index < array.length; index++) {
        if (currentNumber < array[index]) {
            currentNumber = array[index];
            result.push(currentNumber);
        }
    }

    return result;
}
function nonDecreasingSubset(numbers) {
    let currentMax = -Infinity;
    return numbers.filter(num => {
        if (num >= currentMax) {
            currentMax = num;
            return true;
        }
        return false;
    });
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));