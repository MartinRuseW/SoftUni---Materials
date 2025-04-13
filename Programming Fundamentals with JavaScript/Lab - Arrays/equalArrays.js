function equalArrays(firstArray, secondArray) {

    const lengthFirstArray = firstArray.length;
    const lengthSecondArray = secondArray.length;
    const len = lengthFirstArray >= lengthSecondArray ? lengthSecondArray : lengthFirstArray;

    let sum = 0;

    for (let i = 0; i < len; i++) {
        if (firstArray[i] === secondArray[i]) {
            sum += parseInt(firstArray[i]);
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(['10','20','30'], ['10','20','30'])


function solve(arr1, arr2) {
    let sum = 0;
    for (let i in arr1) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
        sum += arr1[i] - 0; //ASCII hack
    }
  
    console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(['10','20','30'], ['10','20','30'])


function equalArrays(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        return;
      }
   
        sum += Number(arr1[i]);
    }
   
    console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(['10','20','30'], ['10','20','30'])
