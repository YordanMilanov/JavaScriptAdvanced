function printLargestNumber(x, y, z) {
    let largestNumber = undefined;
    if (x >= y && x >= z) {
        largestNumber = x;
    } else if (y >= z && y >= x) {
        largestNumber = y;
    } else {
        largestNumber = z;
    }

    console.log(`The largest number is ${largestNumber}.`);
}

printLargestNumber(10, 20, 15);