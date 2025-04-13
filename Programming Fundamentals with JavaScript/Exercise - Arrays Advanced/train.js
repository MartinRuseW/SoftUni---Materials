function train(array) {

    let passengers = array
    .shift()
    .split(' ')
    .map(Number);

    let maxCapacity = Number(array.shift());

    for (let i = 0; i < array.length; i++) {
        let currentRow = array[i].split(' ');
        
        if (currentRow[0] === 'Add') {
            let newWagonPassengers = Number(currentRow[1]);
            passengers.push(newWagonPassengers);
        } else {
            for (let j = 0; j < passengers.length; j++) {
                let passengersInCurrentWagon = passengers[j];
                if (passengersInCurrentWagon + Number(currentRow[0]) <= maxCapacity) {
                    passengers[j] += Number(currentRow[0]);
                    break;
                }
            }
        }
    }
    console.log(passengers.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])