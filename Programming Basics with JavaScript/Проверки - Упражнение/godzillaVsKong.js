function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let stastistCount = Number(input[1]);
    let outfitPrice = Number(input[2]);

    let decor = budget * 0.1;
    let totalMoneyForOutfit = stastistCount * outfitPrice;

    if (stastistCount > 150) {
        totalMoneyForOutfit = totalMoneyForOutfit * 0.90;
    }

    let sum = decor + totalMoneyForOutfit;
    
    if (budget >= sum) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - sum).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(sum - budget).toFixed(2)} leva more.`)
    }
}
godzillaVsKong(["20000","120","55.5"])