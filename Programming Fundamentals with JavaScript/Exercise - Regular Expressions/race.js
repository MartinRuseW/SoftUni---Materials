function race(input) {

    let racers = input.shift();
    let namePattern = /[A-Za-z]+/g;
    let distancePattern = /\d+/g;
    let raceObject = {};

    let line = input.shift();

    while (line !== 'end of race') {
        let currentRacer = line.match(namePattern).join('');
        let currentDistance = line.match(distancePattern).join('');
        
        if (racers.includes(currentRacer)) {
            let distance = 0;

            for (const digit of currentDistance) {
                distance += Number(digit);
            }
            
            if (!raceObject.hasOwnProperty(currentRacer)) {
                raceObject[currentRacer] = distance;
            } else {
                raceObject[currentRacer] += distance;
            }
        }
        line = input.shift();
    } 

    let sortedRacers = Object.entries(raceObject).sort((a, b) => b[1] - a[1]);

    let firstRacer = sortedRacers[0][0];
    let secondRacer = sortedRacers[1][0];
    let thirdRacer = sortedRacers[2][0];

    console.log(`1st place: ${firstRacer}`);
    console.log(`2nd place: ${secondRacer}`);
    console.log(`3rd place: ${thirdRacer}`);

}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)