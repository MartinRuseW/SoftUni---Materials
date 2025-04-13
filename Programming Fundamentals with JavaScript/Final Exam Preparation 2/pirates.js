function solve(array) {

    let resultObject = {};
    let line = array.shift();

    while (line !== 'Sail') {
        let [city, population, gold] = line.split('||');
        population = Number(population);
        gold = Number(gold);

        if (resultObject.hasOwnProperty(city)) {
            resultObject[city].population += population;
            resultObject[city].gold += gold;
        } else {
            resultObject[city] = {population, gold};
        }
        line = array.shift();
    }

    let tokens = array.shift();

    while (tokens !== 'End') {
        let [command, ...data] = tokens.split('=>');

        if (command === 'Plunder') {
            let city = data[0];
            let population = Number(data[1]);
            let gold = Number(data[2]);

            if (resultObject.hasOwnProperty(city)) {
                let currentPopulation = resultObject[city].population;
                let currentGold = resultObject[city].gold;
                currentPopulation -= population;
                currentGold -= gold;
                resultObject[city].population = currentPopulation;
                resultObject[city].gold = currentGold;
                console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);

                if (currentPopulation <= 0 || currentGold <= 0) {
                    delete resultObject[city];
                    console.log(`${city} has been wiped off the map!`);
                }
            }
        } else if (command === 'Prosper') {
            let city = data[0]
            let gold = Number(data[1]);
            let currentGold = resultObject[city].gold;

            if (resultObject.hasOwnProperty(city)) {
                if (gold < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    console.log(`${gold} gold added to the city treasury. ${city} now has ${currentGold + gold} gold.`);
                    currentGold += gold;
                    resultObject[city].gold = currentGold;
                }
            }
        }
        tokens = array.shift();
    }

    let count = Object.keys(resultObject);

    if (count.length !== 0) {
        console.log(`Ahoy, Captain! There are ${count.length} wealthy settlements to go to:`);

        for (const city in resultObject) {
            console.log(`${city} -> Population: ${resultObject[city].population} citizens, Gold: ${resultObject[city].gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}
solve(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])