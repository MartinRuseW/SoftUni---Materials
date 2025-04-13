function activationKeys(array) {

    let activationKey = array.shift();
    let line = array.shift();

    while (line !== 'Generate') {

        let [command, ...data] = line.split('>>>');

        if (command === 'Slice') {

            let startIndex = Number(data[0]);
            let endIndex = Number(data[1]);
            let string = activationKey.substring(startIndex, endIndex);
            activationKey = activationKey.replace(string, '');
            console.log(activationKey);

        } else if (command === 'Flip') {

            let upperOrLower = data[0];
            let startIndex = Number(data[1]);
            let endIndex = Number(data[2]);
            let replacedString = activationKey.substring(startIndex, endIndex);

            if (upperOrLower === 'Upper') {
                activationKey = activationKey.replace(replacedString, replacedString.toUpperCase())
                console.log(activationKey);
            } else if (upperOrLower === 'Lower') {
                activationKey = activationKey.replace(replacedString, replacedString.toLowerCase())
                console.log(activationKey);
            }

        } else if (command === 'Contains') {

            let subString = data[0];

            if (activationKey.includes(subString)) {
                console.log(`${activationKey} contains ${subString}`);
            } else {
                console.log('Substring not found!');
            }

        }

        line = array.shift();

    }
    console.log(`Your activation key is: ${activationKey}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz", "Slice>>>2>>>6", "Flip>>>Upper>>>3>>>14", "Flip>>>Lower>>>5>>>7", "Contains>>>def", "Contains>>>deF", "Generate"])