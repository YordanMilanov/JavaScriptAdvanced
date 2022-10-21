//n - length
//k - count of last numbers we want to add
//TODO
function lastK(n, k) {
    const arrayLength = n;
    const repeats = k;
    let array = [1];
    let currentSum = 0;
    for (let i = 0; i < n - 1; i++) {

        for (let j = i; j > i - k; j--) {
            if (typeof array[j] !== "number") {
                continue;
            }
        currentSum += array[j]
        }
     array[i + 1] = currentSum;   
     currentSum = 0;
    }

    return(array);
}

lastK(8, 2);