function partyTime(array) {

    let vipList = [];
    let regularList = [];

    let currentGuest = array.shift();

    while (currentGuest !== 'PARTY') {
        isVip = !isNaN(currentGuest[0]);

        if (isVip) {
            vipList.push(currentGuest);
        } else {
            regularList.push(currentGuest);
        }

        currentGuest = array.shift();
    }

    let allGuests = vipList.concat(regularList);

    for (const guest of array) {
        allGuests.splice(allGuests.indexOf(guest), 1);
    }

    console.log(allGuests.length);

    for (const guest of allGuests) {
        console.log(`${guest}`);
    }
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'])