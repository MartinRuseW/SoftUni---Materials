function passValidator(array) {

    let pass = array.shift();
    if (pass == null){
        return;
    }
    pass = pass.toString();
    
    let line = array.shift().split(' ');
    let command = line.shift();
    while (command !== 'Complete') {


        switch (command) {
            case 'Replace': {
                pass = pass.toString();pass
                let char = line.shift();
                let replacement = line.shift();
                let ascii = Number(char.charCodeAt()) + Number(replacement);
                let newChar = String.fromCharCode(ascii);
                let isValid = false
                for (let i = 0; i < pass.length; i++) {
                    if (pass[i] == char) {
                        pass = pass.replace(char, newChar);
                        isValid = true;
                    }

                }
                if (isValid) {
                    console.log(pass);
                }
                break;
            }
            case 'Make': {
                pass = pass.toString();
                let upperOrLower = line.shift();
                let index = Number(line.shift());pass
                let firstPart = pass.substring(0, index);
                let secondPart = pass.substring(index + 1);

                if (upperOrLower == 'Lower' && pass[index]) {
                    let newChar = pass[index].toLowerCase();
                    pass = firstPart + newChar + secondPart;
                    console.log(pass);
                }
                else if (upperOrLower = 'Upper' && pass[index]) {
                    let newChar = pass[index].toUpperCase();
                    pass = firstPart + newChar + secondPart;
                    console.log(pass);
                }
                break;
            }
            case 'Insert': {
                pass = pass.toString();
                let index = Number(line.shift());
                let char = line.shift();pass
                if (pass[index]) {
                    let firstPart = pass.substring(0, index);
                    let secondPart = pass.substring(index);
                    pass = firstPart + char + secondPart;
                    console.log(pass)
                }
                break;
            }
            case 'Validation': {
                pass = pass.toString();
                
                if (pass.length < 8) {
                    console.log('Password must be at least 8 characters long!');
                }
                for (let index = 0; index < pass.length; index++) {
                    let pattern = /\w/g;
                    let match = pass.match(pattern);
                    if (match){
                    if (match.length < pass.length) {pass
                        console.log('Password must consist only of letters, digits and _!');
                        break;
                    }
                }
                    if (!match){
                    console.log('Password must consist only of letters, digits and _!');
                    break;
                }

                }
                let isUpper = false;
                let isLower = false;
                let isDigit = false;
                for (let index = 0; index < pass.length; index++) {
                    if (pass[index].charCodeAt() >= 97 && pass[index].charCodeAt() <= 122) {
                        isLower = true;
                    }
                    if (pass[index].charCodeAt() >= 65 && pass[index].charCodeAt() <= 90) {
                        isUpper = true
                    }
                    if (pass[index].charCodeAt() >= 48 && pass[index].charCodeAt() <= 57) {
                        isDigit = true;
                    }
                }
                if (!isUpper) {
                    console.log('Password must consist at least one uppercase letter!');
                }
                if (!isLower) {
                    console.log('Password must consist at least one lowercase letter!');
                }
                if (!isDigit) {
                    console.log('Password must consist at least one digit!');
                }

            }
        }
        line = array.shift().split(' ');
        command = line.shift();
    }
}
passValidator(['invalidpassword*',
'Add 2 p',
'Replace i -50',
'Replace * 10',
'Make Upper 2',
'Validation',
'Complete'])