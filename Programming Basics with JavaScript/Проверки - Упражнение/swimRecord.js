function swimRecord(input) {

    let record = Number(input[0]);
    let metres = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let totalSecs = metres * timeForMeter;
    let delay = Math.floor(metres /15) * 12.5;

    let finalTime = totalSecs + delay;

    if (finalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(finalTime - record).toFixed(2)} seconds slower.`)
    }
}
swimRecord(["10464","1500","20"])