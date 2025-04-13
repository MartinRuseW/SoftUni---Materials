function createStorage(array) {

    let storage = new Map();

    for (const line of array) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (storage.has(product)) {
            quantity += storage.get(product);
        }
        storage.set(product, quantity)  
    }

    for (const [product, quantity] of storage) {
        console.log(`${product} -> ${quantity}`);
    }
}
createStorage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'])