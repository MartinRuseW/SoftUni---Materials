function formatGrade(grade) {

    let gradeWord = '';
    if (grade < 3.00) {
        gradeWord = 'Fail';
        grade = 2;
    } else if (grade >= 3.00 && grade < 3.50) {
        gradeWord = 'Poor';
    } else if (grade >= 3.50 && grade < 4.50) {
        gradeWord = 'Good';
    } else if (grade >= 4.50 && grade < 5.50) {
        gradeWord = 'Very good';
    } else if (grade >= 5.50) {
        gradeWord = 'Excellent';
    }

    if (gradeWord == 'Fail') {
        console.log(`${gradeWord} (${grade})`);
    } else {
        console.log(`${gradeWord} (${grade.toFixed(2)})`)
    }
}
formatGrade(2.99)