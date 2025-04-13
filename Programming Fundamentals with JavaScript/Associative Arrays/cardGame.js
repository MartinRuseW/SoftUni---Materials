function cardGame(array) {

    let power = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };

    let type = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }

    let result = {};
    let players = {};

    for (const line of array) {
        let [namePlayer, gameCards] = line.split(': ');
        let cards = gameCards.split(', ');

        if (!players.hasOwnProperty(namePlayer)) {
            players[namePlayer] = cards;
        } else {
            let currentCard = cards + ',' + players[namePlayer];
            players[namePlayer] = currentCard;
        }
    }

    for (const element in players) {
        
        let sum = 0;
        let name = element;
        let card = players[element].split(',');
        let set = new Set(card);
        let cardArray = Array.from(set);

        for (const card of cardArray) {
            if (card.length === 2) {
                let [cardType, cardPower] = card.split('');
                sum += Number(type[cardType]) * Number(power[cardPower]);
            } else {
                let [cardType, other, cardPower] = card.split('');
                cardType = cardType + other;
                sum += Number(type[cardType]) * Number(power[cardPower]);
            }
        }

        if (!result.hasOwnProperty(name)) {
            result[name] = sum;
        } else {
            let currentSum = result[name] + sum;
            result[name] = currentSum;
        }
    }

    let resultArray = Object.entries(result);

    for (const key of resultArray) {
        console.log(`${key[0]}: ${key[1]}`);
    }
    
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'])