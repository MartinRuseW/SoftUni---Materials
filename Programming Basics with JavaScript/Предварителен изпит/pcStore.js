function pcStore(input) {

    let cpu = Number(input[0]);
    let gpu = Number(input[1]);
    let ram = Number(input[2]);
    let ramCount = Number(input[3]);
    let discount = Number(input[4]);

    let cpuPrice = cpu * 1.57;
    let gpuPrice = gpu * 1.57;
    let ramPrice = (ram * ramCount) * 1.57;

    let cpuPriceAfterDiscount = cpuPrice - (cpuPrice * discount);
    let gpuPriceAfterDiscount = gpuPrice - (gpuPrice * discount);

    let sum = ramPrice + gpuPriceAfterDiscount + cpuPriceAfterDiscount;

    console.log(`Money needed - ${sum.toFixed(2)} leva.`);
}
pcStore(["500", "200", "80", "2", "0.05"])