function areaOfFigures(input) {
    let figure = (input[0]);
    if (figure === "square") {
        let num = Number(input[1]);
        let result = num * num;
        console.log(result.toFixed(3))
    } else if (figure === "rectangle") {
        let num1 = Number(input[1]);
        let num2 = Number(input[2]);
        let result = num1 * num2;
        console.log(result.toFixed(3));
    } else if (figure === "circle") {
        let r = Number(input[1]);
        let result = r * r * Math.PI;
        console.log(result.toFixed(3));
    } else {
        let a = Number(input[1]);
        let h = Number(input[2]);
        let result = a * h / 2
        console.log(result.toFixed(3));
    }
}
areaOfFigures(["triangle", "4.5", "20"])
