function houseParty(array) {

    let newArray = [];

    for (const element of array) {
        
        let command = element.split(' ');
        let name = command[0];

        if (command.length === 3) {
            if (newArray.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                newArray.push(name);
            }
        } else {
            if (!newArray.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = newArray.indexOf(name);
                newArray.splice(index, 1);
            }
        }
    }
    console.log(newArray.join('\n'))
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])