function oldBooks(input) {

    let favouriteBook = input[0];

    let index = 1;
    let isFound = false;

    let nextBook = input[index];
    index++;
    while(nextBook !== 'No More Books') {
        if(nextBook === favouriteBook) {
            isFound = true;
            break;
        }
        nextBook = input[index]
        index++;
    }

    if(isFound === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 2} books.`)
    } else {
        console.log(`You checked ${index - 2} books and found it.`)
    }
}
oldBooks(["Troy","Stronger","Life Style","Troy"])