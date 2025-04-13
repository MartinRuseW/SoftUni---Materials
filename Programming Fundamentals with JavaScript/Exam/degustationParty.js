function degustationParty(array){

    let line = array.shift().split('-');
    let command = line.shift();
    let guestsObject = {};
    let unliked = 0;

    while (command !== 'Stop'){
        switch (command){
            case 'Like': {
                let name = line.shift();
                let meal = line.shift();
                if (guestsObject[name]){
                    if (guestsObject[name].likedMeals.includes(meal)){

                    }
                    else {
                        guestsObject[name].likedMeals.push(meal)
                    }
                }
                else {
                    guestsObject[name] = {
                        likedMeals: [],
                    };
                    guestsObject[name].likedMeals.push(meal)
                }
                break;
            }
            case 'Dislike': {
                let name = line.shift();
                let meal = line.shift();
                if (guestsObject[name]){
                    if (guestsObject[name].likedMeals.includes(meal)){
                        let index = guestsObject[name].likedMeals.indexOf(meal);
                        delete guestsObject[name].likedMeals[index];
                        console.log(`${name} doesn't like the ${meal}.`)
                        unliked ++;
                    }
                    else {
                        console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                    }
                }
                else {
                    console.log(`${name} is not at the party.`);
                }
            }
        }
        line = array.shift().split('-');
        command = line.shift();
    }
    let entries = Object.entries(guestsObject);

    entries.forEach(entry => {
        console.log(`${entry[0]}: ${entry[1].likedMeals.join(', ')}`)
    });
    
    console.log(`Unliked meals: ${unliked}`);
}
degustationParty(["Like-Krisi-shrimps",
"Like-Krisi-soup",
"Like-Penelope-dessert",
"Like-Misho-salad",
"Stop"])