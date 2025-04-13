function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);

    let boatRentPrice = 0;

    switch (season) {
        case 'Spring': boatRentPrice = 3000; break;
        case 'Summer': boatRentPrice = 4200; break;
        case 'Autumn': boatRentPrice = 4200; break;
        case 'Winter': boatRentPrice = 2600; break;
    }

    if (fishermans <= 6) {
        boatRentPrice = boatRentPrice * 0.9;
    } else if (fishermans >= 7 && fishermans <= 11) {
        boatRentPrice = boatRentPrice * 0.85;
    } else if (fishermans >= 12) {
        boatRentPrice = boatRentPrice * 0.75;
    }

    if (fishermans % 2 === 0 && season !== 'Autumn') {
        boatRentPrice =boatRentPrice * 0.95;
    }

    if (budget >= boatRentPrice) {
        console.log(`Yes! You have ${(budget - boatRentPrice).toFixed(2)} leva left.`)
    } else if (budget <= boatRentPrice) {
        console.log(`Not enough money! You need ${(boatRentPrice - budget).toFixed(2)} leva.`)
    }
}
fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600","Autumn","6"]);
fishingBoat(["2000","Winter","13"]);
