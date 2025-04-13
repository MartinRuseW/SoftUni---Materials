function meetings(input) {

    let meet = {};

    for (const line of input) {
        let [day, name] = line.split(' ');

        if (meet.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meet[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const key in meet) {
        console.log(`${key} -> ${meet[key]}`);
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])