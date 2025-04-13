function addressBook(array) {

    let addressBookObject = {};

    for (const line of array) {
        let [person, address] = line.split(':');
        
        addressBookObject[person] = address;
    }

    let sorted = Object.entries(addressBookObject).sort((a, b) => a[0].localeCompare(b[0]));

    for (const person of sorted) {
        console.log(`${person[0]} -> ${person[1]}`);
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)