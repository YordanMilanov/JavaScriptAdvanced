function solve (array) {
    
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondaryIndex = array.length - 1;
    

    for (let i = 0; i < array.length; i++) {
        firstDiagonal += array[i][firstIndex];
        secondDiagonal += array[i][secondaryIndex];
        firstIndex ++;
        secondaryIndex --;

};
console.log (firstDiagonal + " " + secondDiagonal);
};

solve([[20, 40], [10, 60]]);
