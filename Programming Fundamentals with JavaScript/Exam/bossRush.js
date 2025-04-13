function BossRush(array) {
    
    let pattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/gm;
    let bosses = {};
    let number = Number(array.shift());
    for (let i = 0 ; i<number; i++){
        let match = pattern.exec(array[i])
        if (match){
            let strength = match.groups.boss.length;
            let armor = match.groups.title.length;
            let name =  match.groups.boss;
            let title =  match.groups.title;
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armor: ${armor}`);
        }
        else {
            console.log('Access denied!');
        }
        match = pattern.exec(array[i])

    }
}

BossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#'])