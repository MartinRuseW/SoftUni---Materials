function passwordValidator(password) {

    let digitCounter = 0;
    let passwordLength = password.length;
    let isSymbol = false;

    for (let i = 0; i < passwordLength; i++) {
        let charNumber = password[i].charCodeAt();
        let isDigit = charNumber >= 48 && charNumber <= 57;
        let isSmallLetter = charNumber >= 97 && charNumber <= 122;
        let isBigLetter = charNumber >= 65 && charNumber <= 90;
        
        if (isDigit) {
            digitCounter++;
        }

        if (!isDigit && !isSmallLetter && !isBigLetter) {
            isSymbol = true;
        }
    }

    if (passwordLength < 6 || passwordLength > 10) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (isSymbol) {
        console.log("Password must consist only of letters and digits");
    }

    if (digitCounter < 2) {
        console.log("Password must have at least 2 digits");
    }

    if (digitCounter >= 2 && !isSymbol && (passwordLength >= 6 || passwordLength <10)) {
        console.log("Password is valid");
    }
}
passwordValidator('logIn')