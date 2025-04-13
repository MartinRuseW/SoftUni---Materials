function minerTask(array) {

    let collection = {};

    for (let index = 0; index < array.length; index+=2) {
        let resource = array[index];
        let quantity = Number(array[index + 1]);

        if (!collection.hasOwnProperty(resource)) {
            collection[resource] = 0;collection[resource] += quantity;
        } else {
            collection[resource] += quantity;
        }
    }

    for (const resource in collection) {
        console.log(`${resource} -> ${collection[resource]}`);
    }
}
minerTask(['Gold', '155', 'Silver', '10', 'Copper', '17'])
    