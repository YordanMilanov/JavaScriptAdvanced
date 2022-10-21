 function solve (arrayOfPies, startPie, endPie) {
    let firstIndex = arrayOfPies.indexOf(startPie);
    let lastIndex = arrayOfPies.lastIndexOf(endPie);
    return arrayOfPies.slice(firstIndex, lastIndex + 1);
 }