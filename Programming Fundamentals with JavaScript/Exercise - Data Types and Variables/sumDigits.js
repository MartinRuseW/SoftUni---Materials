function sumDigits(number) {

    number = number.toString();
    let sum = 0;

    for (let i = 0; i < number.length; i++) {

        let currentDigit = Number(number[i]);
        sum += currentDigit;

    }
    console.log(sum);
}
sumDigits(543)