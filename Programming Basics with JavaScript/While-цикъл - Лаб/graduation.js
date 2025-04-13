function graduation(input) {

    let index = 0;
    let name = input[index];
    index++;

    let badGrade = 0;
    let sumGrade =0;
    let command = 1;
    let isExcluded = false;

    while(command <= 12) {
        let grade = Number(input[index]);
        index++;

        if(grade < 4.00){
            badGrade++;

            if(badGrade > 1){
                isExcluded = true;
                break;
            }
            continue;
        }
        sumGrade += grade;
        command++;
    }

    if(!isExcluded) {

    let avrGrade = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${avrGrade.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${command} grade`)
    }
}
graduation(["Gosho", "5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"])