function finalCompetition(input) {

    let dancer = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let wonMoney = 0;

    switch (place) {
        case 'Bulgaria': wonMoney = dancer * points; 
        if(season === 'summer') {
            wonMoney = wonMoney - (wonMoney * 5 / 100);
        } else if (season === 'winter'){
            wonMoney = wonMoney - (wonMoney * 8 / 100);
        }break;
        case 'Abroad': wonMoney = (dancer * points) * 1.5;
        if (season === 'summer') {
            wonMoney = wonMoney - (wonMoney * 10 / 100);
        } else if (season === 'winter'){
            wonMoney = wonMoney - (wonMoney * 15 / 100);
        }break;
    }
    
    let moneyForCharity = wonMoney * 0.75;
    let remainigMoney = wonMoney - moneyForCharity;
    let moneyForDancer = remainigMoney / dancer;

    console.log(`Charity - ${moneyForCharity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyForDancer.toFixed(2)}`)
}
finalCompetition(["25","98","winter","Bulgaria"])