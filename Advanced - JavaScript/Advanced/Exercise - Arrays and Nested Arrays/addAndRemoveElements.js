function addAndRemoveElements(array) {
    let result = [];
    let number = 1;

    for (let index = 0; index < array.length; index++) {
        if (array[index] === 'add') {
            result.push(number);
        } else if (array[index] === 'remove') {
            result.pop();
        }
        number++;
    }

    if (result.length > 0) {
        for (const element of result) {
            console.log(element);
        }
    } else {
        console.log('Empty');
    }
}
addAndRemoveElements(['add', 
'add', 
'add', 
'add']
)
addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
)