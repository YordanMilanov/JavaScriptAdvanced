function solve (array) {
    array.sort((a, b) => a - b);
    let first = array.shift();
    let second = array.shift();

    console.log(first + " " + second);
};

solve([1 ,2 ,3 ,4 ,-5, 6]);