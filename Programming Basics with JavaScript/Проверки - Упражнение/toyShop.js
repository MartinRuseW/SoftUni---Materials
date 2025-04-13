function toyShop(input) {

    let trip = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);

    let count = puzzle + doll + bear + minion + truck;

    let puzzlePrice = puzzle * 2.60;
    let dollPrice = doll * 3;
    let bearPrice = bear * 4.10;
    let minionPrice = minion * 8.20;
    let truckPrice = truck * 2;

    let moneyForAllToys = puzzlePrice + dollPrice + bearPrice + minionPrice + truckPrice; 

    if (count >= 50) {
        moneyForAllToys = moneyForAllToys * 0.75;
    }

    let moneyAfterRent = moneyForAllToys * 0.90;

    if (moneyAfterRent >= trip) {
        console.log(`Yes! ${(moneyAfterRent - trip).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(trip - moneyAfterRent).toFixed(2)} lv needed.`)
    }
}
toyShop(["40.8","20","25","30","50","10"])