function evenIndexElements (array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            result += array[i];
        }
    }

    console.log(...result);
}

evenIndexElements([0,1,2,3,4,5,6,7]);