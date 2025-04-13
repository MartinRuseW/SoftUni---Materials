function shopping(input) {

    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videocardsPrice = videocards * 250;
    let processorsPrice = processors * (videocardsPrice * 0.35);
    let ramPrice = ram * (videocardsPrice * 0.10);

    let sum = videocardsPrice + processorsPrice + ramPrice;

    if (videocards > processors) {
        sum = sum * 0.85;
    }
        
    if (budget >= sum) {
        console.log(`You have ${(budget - sum).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`)
    }
}
shopping(["900","2","1","3"])