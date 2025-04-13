function smallestTwoNumbers(array) {

    let numbers = array.sort((a, b) => {
        return a - b;
    })

    let sortedNumbers = numbers.slice(0, 2)
    console.log(sortedNumbers.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5])