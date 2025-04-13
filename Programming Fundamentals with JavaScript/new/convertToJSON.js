function convert(firstName, lastName, hairColor) {

    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }

    console.log(JSON.stringify(person))
}
convert('George', 'Jones', 'Brown')