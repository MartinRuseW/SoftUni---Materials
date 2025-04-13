function spliter(text) {

    let result = text[0];
    let lower = text.toLowerCase();

    for (index = 1; index < text.length; index++) {
        if (text[index] !== lower[index]) {
            result += ', ';
        }
        result += text[index];
    }
    console.log(result);
}
spliter('SplitMeIfYouCanHaHaYouCantOrYouCan')