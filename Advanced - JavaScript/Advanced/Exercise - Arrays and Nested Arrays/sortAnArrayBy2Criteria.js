function solve(array) {

    let sorted = array.sort((a, b) => a.localeCompare(b));
    let result = sorted.sort((a, b) => a.length - b.length);
    
    for (const element of result) {
        console.log(element);
    }
}
solve(['alpha', 
'beta', 
'gamma']
)