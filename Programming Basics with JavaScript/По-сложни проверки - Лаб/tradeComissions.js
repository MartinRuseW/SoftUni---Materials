function tradeComissions(input) {

    let city = input[0];
    let sales = Number(input[1]);
    let comission = 0;
    let result = sales;

    if (sales >= 0 && sales <= 500) {

        switch (city) {
            case 'Sofia': result = result * 0.050;
                console.log(result.toFixed(2)); break;
            case 'Varna': result = result * 0.045;
                console.log(result.toFixed(2)); break;
            case 'Plovdiv': result = result * 0.055;
                console.log(result.toFixed(2)); break;
            default:
                console.log('error'); break;
        }
    } else if (sales > 500 && sales <= 1000) {

        switch (city) {
            case 'Sofia': result = result * 0.070;
                console.log(result.toFixed(2)); break;
            case 'Varna': result = result * 0.075;
                console.log(result.toFixed(2)); break;
            case 'Plovdiv': result = result * 0.080;
                console.log(result.toFixed(2)); break;
            default:
                console.log('error'); break;
        }
    } else if (sales > 1000 && sales <= 10000) {

        switch (city) {
            case 'Sofia': result = result * 0.080;
                console.log(result.toFixed(2)); break;
            case 'Varna': result = result * 0.10;
                console.log(result.toFixed(2)); break;
            case 'Plovdiv': result = result * 0.12;
                console.log(result.toFixed(2)); break;
            default:
                console.log('error'); break;
        }
    } else if (sales > 10000) {

        switch (city) {
            case 'Sofia': result = result * 0.12;
                console.log(result.toFixed(2)); break;
            case 'Varna': result = result * 0.13;
                console.log(result.toFixed(2)); break;
            case 'Plovdiv': result = result * 0.145;
                console.log(result.toFixed(2)); break;
            default:
                console.log('error'); break;
        }

    } else {
        console.log('error');
    }
}
tradeComissions(["Sofia","1500"])