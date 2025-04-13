function companyUsers(array) {

    let result = {};

    for (const line of array) {
        let [companyName, ids] = line.split(' -> ');
        
        if (!result.hasOwnProperty(companyName)) {
            result[companyName] = [];
        }

        result[companyName].push(ids);
    }

    let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (const element of sorted) {
        let companyName = element[0];
        let allIDs = element[1];

        console.log(companyName);


        let uniqueIDs = new Set(allIDs);
        for (const element of uniqueIDs) {
            console.log(`-- ${element}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'])