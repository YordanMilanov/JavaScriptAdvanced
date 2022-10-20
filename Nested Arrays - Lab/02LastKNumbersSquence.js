//n - length
//k - count of last numbers we want to add

function lastK(n, k) {
    let repeats = k;
    let currentSum = 0;
    let arrayToCreate = [1];

    if (arrayToCreate.length < repeats) {

        for (let i = 0; i < arrayToCreate.length; i++) {

            for (let j = i; j > -repeats - i; j--) {
                if (j >= 0) {
                    currentSum += arrayToCreate[j];
                }
            };

            arrayToCreate[i + 1] = currentSum;
            currentSum = 0;
            console.log(arrayToCreate);

            if (arrayToCreate.length < repeats) {
                break;
            };
        };

    } else {
        for (let i = arrayToCreate.length - repeats; i < arrayToCreate.length; i++) {
            currentSum += arrayToCreate[i];
        };
        arrayToCreate[i + 1] = currentSum;
        currentSum = 0;
        console.log(arrayToCreate);
    };

};

lastK(6, 3);