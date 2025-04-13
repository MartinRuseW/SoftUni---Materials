function replaceRepeatingChars(input) {

    let result = input[0];
    
    for (let index = 1; index < input.length; index++) {
        let currentLetter = input[index];
        let previousLetter = input[index - 1];

        if (previousLetter !== currentLetter) {
            result += currentLetter;
        }
    }

    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')