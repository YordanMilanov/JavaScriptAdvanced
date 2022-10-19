function cookingByNumbers(number, ...commands) {
    let currentNumber = Number(number);

    commands.forEach(element => {
        switch (element) {
            case "chop":
                currentNumber = currentNumber / 2;
                console.log(currentNumber);
                break;
            case "dice":
                currentNumber = Math.sqrt(currentNumber);
                console.log(currentNumber);
                break;
            case "spice":
                currentNumber += 1;
                console.log(currentNumber);
                break;
                case "bake":
                currentNumber = currentNumber * 3;
                console.log(currentNumber);
                break;
            case "fillet":
                currentNumber = currentNumber * 0.8;
                console.log(currentNumber);
                break;
        }
    });
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
