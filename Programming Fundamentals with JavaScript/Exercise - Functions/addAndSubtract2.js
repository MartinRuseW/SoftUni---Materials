function addAndSubtract(num1, num2, num3) {

    function add(a, b) {
        let sumOfTwoNumbers = a +b;
        return sumOfTwoNumbers;
    }

    let sum  = add(num1, num2);

    function subtract(sumOfTwoNumbers, num3) {
        return sumOfTwoNumbers - num3;
    }

    let result = subtract(sum, num3);

    console.log(result);
}
addAndSubtract(23, 6, 10);