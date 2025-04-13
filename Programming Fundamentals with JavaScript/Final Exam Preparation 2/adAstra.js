function adAstra(array) {

    let pattern = /([#|])(?<food>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let totalCalories = 0;
    let regex = pattern.exec(array);
    let foodInfo = [];

    while (regex !== null) {

        let food = regex.groups.food;
        let date = regex.groups.date;
        let calories = regex.groups.calories;
        foodInfo.push({item: food, date: date, calories: calories});
        totalCalories += Number(calories);

        regex = pattern.exec(array);
    }

    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    
    for (let index = 0; index < foodInfo.length; index++) {
        console.log(`Item: ${foodInfo[index].item}, Best before: ${foodInfo[index].date}, Nutrition: ${foodInfo[index].calories}`);
    }
}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])