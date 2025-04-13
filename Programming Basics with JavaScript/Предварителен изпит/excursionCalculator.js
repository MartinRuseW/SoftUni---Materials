function excursionCalculator(input) {
    let people = Number(input[0]);
    let season = input[1];

    let totalCost = 0;

    switch (season) {
        case "spring":
            if (people <= 5) {
                totalCost = people * 50;
            } else {
                totalCost = people * 48;
            }
            break;
        case "summer":
            if (people <= 5) {
                totalCost = people * 48.5;
            } else {
                totalCost = people * 45;
            }
            break;
        case "autumn":
            if (people <= 5) {
                totalCost = people * 60;
            } else {
                totalCost = people * 49.5;
            }
            break;
        default:
            if (people <= 5) {
                totalCost = people * 86;
            } else {
                totalCost = people * 85;
            }
            break;
    }
    if (season === "summer") {
        totalCost *= 0.85;
    } else if (season === "winter") {
        totalCost *= 1.08;
    }
    console.log(`${totalCost.toFixed(2)} leva.`);
}