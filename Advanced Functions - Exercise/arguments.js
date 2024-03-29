function solve(a, b, ...theOtherArguments) {
    const params = Array.from(arguments);

    const types = {};

    for (const arg of params) {
        const type = typeof arg;
        console.log(`${type}: ${arg}`)

        if(types[type] == undefined) {
            types[type] = 0;
        }
        types[type]++;
    }

    const result = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (let [type, count] of result) {
        console.log(`${type} = ${count}`);
    }
}

solve(1, 2, 3, 4);