function fruit(type, weight, price) {
    let weightInKg = weight / 1000;
    let totalMoney = price * weightInKg;
    console.log(`I need $${totalMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`);
}

fruit('apple', 1563, 2.35);