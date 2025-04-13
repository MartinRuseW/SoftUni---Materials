function footballKit(input) {
    let shirtPrice = Number(input[0]);
    let priceNeeded = Number(input[1]);

    let shortsPrice = shirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let shoePrice = (shirtPrice + shortsPrice) * 2;
    let totalPrice = shirtPrice + shortsPrice + socksPrice + shoePrice;
    
    let subTotal = totalPrice * 0.85;
    let moreNeeded = priceNeeded - subTotal;

    if (subTotal >= priceNeeded) {
        console.log(`Yes, he will earn the world-cup replica ball!`)
        console.log(`His sum is ${subTotal.toFixed(2)} lv.`)
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`)
        console.log(`He needs ${moreNeeded.toFixed(2)} lv. more.`)
    }
}
footballKit(["25", "100"])