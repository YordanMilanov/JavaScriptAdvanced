function calculate(num1, num2, operator) {
    let result = undefined;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
        break;
        case '*':
            result = num1 * num2;
        break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
        break;
        case '**':
            result = num1 ** num2;
        break;
        default:
            break;
    }
    console.log(`${result}`);
}

calculate(2, 5, "**");