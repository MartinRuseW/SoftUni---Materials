function bonusScore(input) {
    let score = Number(input[0]);
    let bonus = 0.0
    if (score <= 100) {
        bonus = 5;
    } else if (score < 1000) {
        bonus = score * 20 / 100 ;
    } else {
        bonus = score * 10 / 100 ;
    }
    if (score % 2 === 0) {
        bonus = bonus + 1;
    } else if (score % 10 === 5) {
        bonus = bonus + 2;
    }
    console.log(bonus);
    console.log(score + bonus)
}
bonusScore(["175"])