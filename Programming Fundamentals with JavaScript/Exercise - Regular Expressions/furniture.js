function solve(input) {

    let index = 0;
    let totalMoney = 0;
    let pattern = /[>]{2}(?<furnitureName>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]*[\d]+)!(?<quantity>\d+)/g;

    console.log('Bought furniture:');

    while (input[index] !== 'Purchase') {
        let productRow = input[index];
        let validProduct = pattern.exec(productRow);

        while (validProduct !== null) {
            let productName = validProduct.groups['furnitureName'];
            console.log(productName);

            let productPrice = validProduct.groups['price'];
            let productQuantity = validProduct.groups['quantity'];

            totalMoney += productPrice * productQuantity;

            validProduct = pattern.exec(productRow);
        }
        index++;
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
solve(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])