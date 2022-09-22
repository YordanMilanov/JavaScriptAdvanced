function printRectange (x) {
    let x1 = x;
    let lineString = "";
    if (x == undefined) {
        x = 5;
    }
    for (let index = 0; index < x1; index++) {
        for (let index = 0; index < x1; index++) {
            lineString += "* ";
        }
        lineString += `\n`;
    }
} 

printRectange();