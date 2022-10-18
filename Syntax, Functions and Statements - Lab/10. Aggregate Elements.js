function solve (numbers) {
    console.log(aggregate(numbers,0, (x, y) => x + y));
    console.log(aggregate(numbers,0, (x, y) => x + 1 / x));
    console.log(aggregate(numbers, "", (x, y) => x + y));

    function aggregate(numbers,initVal, func) {
        let result = initVal;

        for (let i = 0; i < numbers.length; i++) {
          result += func(result, numbers[i]);  
        }
        console.log(result);
    }
}