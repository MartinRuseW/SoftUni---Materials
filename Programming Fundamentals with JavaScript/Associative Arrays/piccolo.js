function piccolo(array) {

    let parkingList = new Map();

    for (const line of array) {

        let [command, carNumber] = line.split(', ');
        
        if (command === 'IN') {
            parkingList.set(carNumber);
        } else if (command === 'OUT') {
            parkingList.delete(carNumber);
        }
    }

    let sorted = Array.from(parkingList).sort((a, b) => a[0].localeCompare(b[0]));

    if (sorted.length === 0) {
        console.log('Parking Lot is Empty');
    }
    
    for (const carNumber of sorted) {
        console.log(`${carNumber[0]}`);
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])