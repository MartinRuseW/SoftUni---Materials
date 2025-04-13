function minerTask(array) {

    let result = {};

    for (let index = 0; index < array.length; index+=2) {
        let resource = array[index];
        let quantity = Number(array[index + 1]);

        if (!result.hasOwnProperty(resource)) {
            result[resource] = 0;
            result[resource] += quantity;
        } else {
            result[resource] += quantity;
        }
    }

    let resultArray = Object.entries(result);

    for (const resource of resultArray) {
        console.log(`${resource[0]} -> ${resource[1]}`);
    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'])