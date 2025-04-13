function schoolGrades(array) {

    let students = {};

    for (const line of array) {
        let [student, ...data] = line.split(' ');

        if (students[student]) {
            for (let index = 0; index < data.length; index++) {
                students[student].push(data[index])
            }
        } else {
            students[student] = data;
        }
    }

    let sorted = Object.entries(students).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [student, grades] of sorted) {
        let sumGrades = 0;

        for (let index = 0; index < grades.length; index++) {
            sumGrades += Number(grades[index]);
        }

        let averageGrade = sumGrades / grades.length;

        console.log(`${student}: ${averageGrade.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)