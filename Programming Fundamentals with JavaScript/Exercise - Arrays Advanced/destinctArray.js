function destinctArray(array) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!newArray.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray.join(' '));
}
destinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])