function stringSubstring(word, text) {

    let tokens = text.split(' ');
    
    for (const token of tokens) {
        if (token.toLowerCase() === word.toLowerCase()) {
            return console.log(word);
        }
    }

    console.log(`${word} not found!`);
}
stringSubstring('javascript', 'JavaScript is the best programming language')