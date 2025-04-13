function printAddress(input) {

    let addressBook = {};

    for (const line of input) {
        let [name, address] = line.split(':');

        addressBook[name] = address;
    }

    let addressBookArray = Object.entries(addressBook);

    addressBookArray.sort(([a], [b]) => a.localeCompare(b));

    for (const entry of addressBookArray) {
        let name = entry[0];
        let address = entry[1];

        console.log(`${name} -> ${address}`);
    }
}
printAddress(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'])