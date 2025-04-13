function cake(input) {

    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let cake = width * lenght;
    let index = 2;
    let command = input[index];
    index++;
    let pieces = 0;

    while(command !== 'STOP') {
        pieces = Number(command);
        cake -= pieces;

        if(cake < 0){
            console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`)
            break;
        }

        command = input[index];
        index++;
    }

    if (cake >= 0) {
        console.log(`${Math.abs(cake)} pieces are left.`)
    }
}
cake(["10","10","20","20","20","20","21"])