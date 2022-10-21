function firstLast(inputArray) {
    let first = inputArray.shift();
    let last = inputArray.pop();

    console.log(Number(first) + Number(last));
}

firstLast(["1", "2","3"]);