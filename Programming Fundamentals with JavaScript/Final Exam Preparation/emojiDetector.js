function emojiDetector(text) {
    let regex1 = /(?<emoticon>(:{2}|\*{2})[A-Z][a-z]{2,}\2)/g;
    let regex2 = /(?<num>\d)/g;

    let matchEmojis = regex1.exec(text);
    let digits = text[0].match(regex2);
    let validEmoji = [];
    let emojiCounter = 0;
    let sumDigits = 1;

    digits.forEach(element => {
        sumDigits *= Number(element);
    });

    while (matchEmojis !== null) {
        emojiCounter++;
        let sumEmojis = 0;
        let emoji = matchEmojis.groups.emoticon;
        let splitEmoji = emoji.split('');

        for (let index = 1; index < splitEmoji.length; index++) {
            let currentChar = splitEmoji[index].charCodeAt();

            if (currentChar >= 65 && currentChar <= 90 || currentChar >= 97 && currentChar <= 122) {
                sumEmojis += currentChar;
            }
        }

        if (sumEmojis > sumDigits) {
            validEmoji.push(emoji);
        }

        matchEmojis = regex1.exec(text);
    }

    console.log(`Cool threshold: ${sumDigits}`);
    console.log(`${emojiCounter} emojis found in the text. The cool ones are:`);
    console.log(validEmoji.join('\n'));
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])