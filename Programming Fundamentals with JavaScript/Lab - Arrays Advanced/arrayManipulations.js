function arrayManipulations(commands) {
    let array = commands
        .shift()
        .split(' ')
        .map(Number);
    for (let i = 0; i < commands.length; i++) { // въртим по броя на командите
        let [command, firstNum, secondNum] = commands[i].split(' '); // взимаме съответната команда, число и индекс. 
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);


        switch (command) {
            case "Add":
                array.push(firstNum)
                //add(firstNum); // подаваме параметър
                break;
            case "Remove":
                array = array.filter(el => el !== firstNum);
                //remove(firstNum); // подаваме параметър
                break;
            case "RemoveAt":
                array.splice(firstNum, 1);
                //removeAt(firstNum); //подаваме параметър
                break;
            case "Insert":
                array.splice(secondNum, 0, firstNum);
                //insert(firstNum, secondNum); // подаваме параметри
                break;
        }
    }
    // function add(el) {
    //     array.push(el);
    // }
    // function remove(num) {
    //     array = array.filter(el => el !== num);
    // }
    // function removeAt(index) {
    //     array.splice(index, 1);
    // }
    // function insert(num, index) {
    //     array.splice(index, 0, num);
    // }
    console.log(array.join(' '));
}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])