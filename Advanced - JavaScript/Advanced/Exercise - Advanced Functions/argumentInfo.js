function argumentInfo() {

    let info = {};

    for (const element of arguments) {
        
        if (!info[typeof element]) {
            info[typeof element] = 0;
        }

        info[typeof element]++;

        console.log(`${typeof element}: ${element}`);
    }

    Object.keys(info).sort((a, b) => info[b] - info[a]).forEach(element => {
        console.log(`${element} = ${info[element]}`);
    });
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })