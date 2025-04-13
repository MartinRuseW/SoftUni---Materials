function vacation(input) {

    let vacationPrice = Number(input[0]);
    let budget = Number(input[1]);
    let index = 2;
    let command = input[index];
    let totalDays = 0;
    let spendDays = 0;

    while(budget < vacationPrice) {
        totalDays++;
        index++;

        if(command === 'spend'){
            spendDays++;

            if(spendDays === 5) {
                console.log(`You can't save the money.`);
                console.log(`${totalDays}`);
                break;
            }

            let moneyToSpend = Number(input[index]);
            budget -= moneyToSpend;
            if(budget < 0) {
                budget = 0;
            }
        } else if (command === 'save') {
            spendDays = 0;
            let moneyToSave = Number(input[index]);
            budget += moneyToSave
        }
        index++;
        command = input[index];

        if(budget >= vacationPrice){
            console.log(`You saved the money for ${totalDays} days.`)
        }
    }
}
vacation(["2000","1000","spend","1200","save","2000"])