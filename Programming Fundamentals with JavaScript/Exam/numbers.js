function solve(commands) {

    let array = commands
        .shift()
        .split(' ')
        .map(Number);
    for (let i = 0; i < commands.length; i++) { // въртим по броя на командите
        let [command, firstNum, secondNum] = commands[i].split(' '); // взимаме съответната команда, число и индекс. П.С. Първо бих взела само командата и само, когато тя е insert ще взимам secondNum(който реално е индекса)
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);


        switch (command) {
            case "Add":
                add(firstNum); // подаваме параметър
                break;
            case "Remove":
                remove(firstNum); // подаваме параметър
                break;
            case "Replace":
                replace(secondNum);
                break;
            case "Collapse":
                collapse(firstNum);
                break;
            case "Finish":
                break;
        }
    }
    function add(el) {
        array.push(el)
    }
    function remove(num) {
        array.splice(array.findIndex(num => num === 9), 1);
    }
    function replace(num, secondNum) {
        array.splice(1, 0, 10);
    }
    
        
    
    console.log(array.join(' '));
}
solve(["5 9 70 -56 9 9",
"Replace 9 10",
"Remove 9",
"Finish"])
solve()