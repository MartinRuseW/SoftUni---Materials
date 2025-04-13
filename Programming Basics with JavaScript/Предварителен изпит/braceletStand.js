function braceletStand(input) {

    let moneyForDay = Number(input[0]);
    let moneyFromSales = Number(input[1]);
    let costs = Number(input[2]);
    let giftPrice = Number(input[3]);

    let pinMoney = moneyForDay * 5;
    let earnedMoney = moneyFromSales * 5;

    let sum = pinMoney + earnedMoney;

    let sumAfterCosts = sum - costs;

    if (sum >= giftPrice) {
        console.log(`Profit: ${sumAfterCosts.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(giftPrice - sumAfterCosts).toFixed(2)} BGN.`);
    }
}
braceletStand(["5.12", "32.05", "15", "150"])
braceletStand(["15.20", "200.00", "7.30", "1500.12"])
