function convert(string) {
    let person = JSON.parse(string);

    for (const key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`)
    }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}')