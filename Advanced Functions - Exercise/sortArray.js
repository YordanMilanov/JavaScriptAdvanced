function sortArray(arr, type) {
    if(type == 'asc') {
        arr.sort((a, b) => a - b);
    } else {
        arr.sort((a, b) => b - a);
    }

    return arr;
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));