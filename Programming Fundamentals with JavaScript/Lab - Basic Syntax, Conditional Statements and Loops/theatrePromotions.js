function ticketSales(typeOfDay, age) {

    let price = 0;

    switch (typeOfDay) {
        case 'Weekday':
            if ((0 <= age && age <= 18) || (age > 64 && age <= 122)) {
                price = 12;
            } else if (age > 18 && age <= 64) {
                price = 18;
            }
            break;
        case 'Weekend':
            if ((0 <= age && age <= 18) || (age > 64 && age <= 122)) {
                price = 15;
            } else if (age > 18 && age <= 64) {
                price = 20;
            }
            break;
        case 'Holiday':
            if (0 <= age && age <= 18) {
                price = 5;
            } else if (age > 18 && age <= 64) {
                price = 12;
            } else if (age > 64 && age <= 122) {
                price = 10;
            }
            break;
    }

    if (price != 0) {
        console.log(price + '$');
    } else {
        console.log('Error!');
    }
}
ticketSales('Weekday', 42)