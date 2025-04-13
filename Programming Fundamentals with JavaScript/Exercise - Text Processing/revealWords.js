function revealWords(string, text) {

    let words = string.split(', ');
    text = ` ${text} `;

    words.forEach(word => {
        let match = ` ${'*'.repeat(word.length)} `;
        text = text.replace(match, ` ${word} `)
    });

    console.log(text);
}
revealWords('great', 'softuni is ***** place for learning new programming languages')