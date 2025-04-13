function huntGame(array) {
    let days = Number(array.shift());
    let players = Number(array.shift());
    let energy = Number(array.shift());
    let waterPerPersonForOneDay = Number(array.shift());
    let foodPerPersonForOneDay = Number(array.shift());
    let totalWater = days * players * waterPerPersonForOneDay;
    let totalFood = days * players * foodPerPersonForOneDay;
    let wastedEnegry = 0;

    for (let i = 1; i <= days; i++) {
        wastedEnegry = array.shift();
        energy -= wastedEnegry;
        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }
        else {
            if (i % 2 == 0 && i % 3 == 0) {
                totalWater *= 0.7;
                totalFood -= totalFood / players;
                energy *= 1.05;
                energy *= 1.1;



            }
            else if (i % 2 == 0) {
                totalWater *= 0.7;
                energy *= 1.05;
            }
            else if (i % 3 == 0) {
                totalFood -= totalFood / players;
                energy *= 1.1;
            }


        }
    }
    console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`)
}
huntGame(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"])