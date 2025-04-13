function meetings(array) {

    let meetObject = {};

    for (const line of array) {
        let [day, person] = line.split(' ');

        if (!meetObject.hasOwnProperty(day)) {
            meetObject[day] = person;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    
    for (const day in meetObject) {
        console.log(`${day} -> ${meetObject[day]}`);
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)