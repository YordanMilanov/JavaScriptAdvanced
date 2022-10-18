function sameNumbers (number) {
    let areTheSame = true;

    let sumOfDigits = 0;
    let numberAsString = number.toString();

    //sameOrNot
    for (let i = 0; i < numberAsString.length - 1; i++) {
        let currentChar = numberAsString.charAt(i);
        let nextChar = numberAsString.charAt(i + 1);
        if (currentChar !== nextChar) {
            areTheSame = false;
            break;
        }
    }
    //sumOfDigits
    for (let i = 0; i < numberAsString.length; i++) {
        let currentChar = numberAsString.charAt(i);
        let currentNumber = parseInt(currentChar);
        sumOfDigits += currentNumber;
    }
    console.log(areTheSame);
    console.log(sumOfDigits);
}

sameNumbers(22322);