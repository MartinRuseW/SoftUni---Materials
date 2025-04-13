function solve(startNumber, endNumber) {

    let sum = 0;
    let output = '';

    for (let currentNumber = startNumber; currentNumber <= endNumber; currentNumber++) {
        sum += currentNumber;
        output += `${currentNumber} `;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
solve(5, 10)