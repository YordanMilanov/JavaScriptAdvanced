function evenIndexElements (array) {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            console.log(array[i]);
        }
    }
}

evenIndexElements([0,1,2,3,4,5,6,7]);