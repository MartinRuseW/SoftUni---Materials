function commonElements(firstArray, secondArray){

    for (let firstArrayIndex = 0; firstArrayIndex < firstArray.length; firstArrayIndex++) {
        for (let secondArrayIndex = 0; secondArrayIndex < secondArray.length; secondArrayIndex++) {
            if (firstArray[firstArrayIndex] === secondArray[secondArrayIndex]) {
                console.log(firstArray[firstArrayIndex]);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])