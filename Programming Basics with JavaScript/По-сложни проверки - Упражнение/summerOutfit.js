function summerOutfit(input) {

    let degrees = Number(input[0]);
    let time = input[1];

    let outfit;
    let shoes;

    if (degrees >= 10 && degrees <= 18) {
        if (time === 'Morning') {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers'
        } else if (time === 'Afternoon') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (time === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }

    } else if (degrees <= 24) {
        if (time === 'Morning') {
            outfit = 'Shirt';
            shoes = 'Moccasins'
        } else if (time === 'Afternoon') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (time === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    } else if (degrees >= 25) {
        if (time === 'Morning') {
            outfit = 'T-Shirt';
            shoes = 'Sandals'
        } else if (time === 'Afternoon') {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        } else if (time === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}
summerOutfit(["16", "Morning"]);
summerOutfit(["22", "Afternoon"]);
summerOutfit(["28", "Evening"]);