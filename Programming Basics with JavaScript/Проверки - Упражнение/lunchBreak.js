function lunchBreak(input) {

    let name = (input[0]);
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime * 1 / 8;
    let restTime = breakTime * 1 / 4;
    
    let timeLeft = breakTime - lunchTime - restTime;

    let different = Math.ceil(Math.abs(timeLeft - episodeTime));

    if (timeLeft >= episodeTime) {
        console.log(`You have enough time to watch ${name} and left with ${different} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${different} more minutes.`)
    }
}
lunchBreak(["Game of Thrones","60","96"])