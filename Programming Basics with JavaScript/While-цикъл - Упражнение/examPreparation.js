function examPreparation(input) {

    let index = 0;
    let countNegativeGrade = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let counter = 0;
    let sumGrade = 0;
    let problemsCounter = 0;

    let name = "";
    let isNeedABreak = false;

    while (command !== 'Enough') {
        problemsCounter++;
        name = command;
        let grade = Number(input[index]);
        index++;

        if (grade <= 4) {
            counter++;
        }
        
        if (counter >= countNegativeGrade) {
            isNeedABreak = true;
            console.log(`You need a break, ${countNegativeGrade} poor grades.`);
            break;
        }
        sumGrade += grade;
        command = input[index];
        index++;
    }

        if (!isNeedABreak) {
            console.log(`Average score: ${(sumGrade / problemsCounter).toFixed(2)}`);
            console.log(`Number of problems: ${problemsCounter}`);
            console.log(`Last problem: ${name}`);
        }
}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])