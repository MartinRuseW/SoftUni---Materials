function minNumber(input) {

    let index = 0;
    let command = input[index];
    index++;

    let smallNumber = Number.MAX_SAFE_INTEGER;

    while (command !== 'Stop') {
        let number = Number(command);

        if (smallNumber > number) {
            smallNumber = number;
        }
        command = input[index];
        index++;
    }
    console.log(smallNumber);
}
minNumber(["100","99","80","70","Stop"])