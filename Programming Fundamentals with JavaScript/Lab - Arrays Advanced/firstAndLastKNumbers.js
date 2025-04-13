function firstAndLastKNumbers(array) {

    let count = array.shift();
    
    let firstK = array.slice(0, count);
    let lastK = array.slice(array.length - count)
    

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}
firstAndLastKNumbers([3, 6, 7, 8, 9])
