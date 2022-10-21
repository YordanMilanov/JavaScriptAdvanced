function solve(array) {
    let result = array.map(Number).filter((n, i) => i % 2 !== 0).map(n => n * 2).reverse();
    console.log(result.join(" "));
}

solve([10, 15, 20, 25]);