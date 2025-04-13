function companyUsers(array) {

    let result = {};

    array.forEach(line => {
        let [companyName, personID] = line.split(' -> ');

        if(!result.hasOwnProperty(companyName)) {
            result[companyName] = [];
        }

        result[companyName].push(personID);
    });

    let sortedCompanies = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

    sortedCompanies.forEach(element => {
        let companyName = element[0];
        let allIDs = element[1];

        console.log(companyName);

        let uniqueIDs = new Set(allIDs);

        for (const id of uniqueIDs) {
            console.log(`-- ${id}`);
        }
    });
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'])