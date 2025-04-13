function storage(array) {

    let storageObject = {};

    for (const line of array) {
        let tokens = line.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if (!storageObject.hasOwnProperty(product)) {
            storageObject[product] = quantity;
        } else {
            storageObject[product] += quantity;
        }
    }

    let storageArray = Object.entries(storageObject);

    for (const product of storageArray) {
        console.log(`${product[0]} -> ${product[1]}`);
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)