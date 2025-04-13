function maxNumber(input) {

    let index = 0;
    let command = input[index];
    index++;

    let bigNumber = Number.MIN_SAFE_INTEGER;

    while (command !== 'Stop') {
        let number = Number(command);

        if (bigNumber < number) {
            bigNumber = number;
        }
        command = input[index];
        index++;
    }
    console.log(bigNumber);
}
maxNumber(["100","99","80","70","Stop"])