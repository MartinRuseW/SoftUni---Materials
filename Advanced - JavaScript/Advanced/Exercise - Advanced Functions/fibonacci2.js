function getFibonator() {

    let number = 1;
    let previousNumber = 0;

    function fib() {
        let fibNumber = number + previousNumber;
        number = previousNumber;
        previousNumber = fibNumber;

        return fibNumber;
    }

    return fib;
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
