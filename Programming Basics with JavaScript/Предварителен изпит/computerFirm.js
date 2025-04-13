function computerFirm(input) {
    let index = 0;
    let n = Number(input[index]);
    let selling = 0;
    let ratingCount = 0;
    let sumRating = 0;
    for (let i = ++index; i <= n; i++) {
        let text = input[index];
        let rating = text.charAt(2);
        if (rating === "2") {
            selling = selling + 0;
            ratingCount++;
            sumRating += Number(rating);
        } else if (rating === "3") {
            selling = selling + Number(text.charAt(0) + text.charAt(1)) * 0.5;
            ratingCount++;
            sumRating += Number(rating);
        } else if (rating === "4") {
            selling = selling + Number(text.charAt(0) + text.charAt(1)) * 0.7;
            ratingCount++;
            sumRating += Number(rating);
        } else if (rating === "5") {
            selling = selling + Number(text.charAt(0) + text.charAt(1)) * 0.85;
            ratingCount++;
            sumRating += Number(rating);
        } else if (rating === "6") {
            selling = selling + Number(text.charAt(0) + text.charAt(1)) * 1;
            ratingCount++;
            sumRating += Number(rating);
        }
        index++;
    }
    console.log(selling.toFixed(2));
    console.log((sumRating / ratingCount).toFixed(2));
}
computerFirm(["3","103","103","103"])