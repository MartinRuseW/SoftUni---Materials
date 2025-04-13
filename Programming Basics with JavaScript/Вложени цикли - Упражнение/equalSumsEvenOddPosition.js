function equalSumsEvenOddPosition(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let printline = '';

    for (let i = firstNumber; i <= secondNumber; i++) {

        let currentNumber = '' + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let l = 0; l <= currentNumber.length; l++) {
            let currentDigit = Number(currentNumber.charAt(l));
            if (l % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum === evenSum) {
            printline += ` ${i}`
        }
    }
    console.log(printline);
}
equalSumsEvenOddPosition(["100000", "100050"])