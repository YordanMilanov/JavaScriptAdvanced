function solve(arr, start, end) {
    //early exit -> if the arr param is not array
    if(Array.isArray(arr) == false) {
return NaN;
    }
    //if start index is less than 0 make it 0 - this is CLAMP in programming
    if(start<0) {
        start = 0;
    }

    if(end > arr.length - 1) {
        end = arr.length - 1;
    }


    //happy path when everything is working normal
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }

    return sum;
}

console.log(solve([10, 20, 30, 40, 50, 60], 2, 4));
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve('text', 0, 2));