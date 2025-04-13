function phoneBook(array) {
    
    let result = {};

    for (const line of array) {
        let [person, phoneNumber] = line.split(' ');
        
        result[person] = phoneNumber;
    }

    for (const person in result) {
        console.log(`${person} -> ${result[person]}`);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])