function maxDividerOfTwoNumbers(number1, number2) {
    let maxDivider = undefined;
    for (let i = 0; i <= Math.max(number1, number2); i++) {
        if (number1 % i == 0 && number2 % i == 0) {
            maxDivider = i;
        }
    }
    console.log(maxDivider);
}

maxDividerOfTwoNumbers(72, 36);