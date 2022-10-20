 function validityChecker (x1,y1,x2,y2) {
     
     
    let rectSideATwoPoints= undefined; 
    let rectSideBTwoPoints = undefined;
    let rectSideCTwoPoints = undefined;

    //sides of the Rectangle x1y1 and 0,0
    if (x1 < 0 && x2 > 0 || x1 > 0 && x2 < 0) {
        rectSideATwoPoints = Math.abs(x1) + 0;
    } else {
        rectSideATwoPoints = Math.abs(Math.abs(x1) - 0);
    }

    if (y1 < 0 && y2 > 0 || y1 > 0 && y2 < 0) {
        rectSideBTwoPoints = Math.abs(y1) + 0;
    } else {
        rectSideBTwoPoints = Math.abs(Math.abs(y1) - 0);
    }
    rectSideCTwoPoints = Math.sqrt(Math.pow(rectSideATwoPoints, 2) + Math.pow(rectSideBTwoPoints, 2));

     if (rectSideCTwoPoints === Math.round(rectSideCTwoPoints)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
     } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
     }

     
    //sides of the Rectangle Between x2y2 and 0,0
    if (x1 < 0 && x2 > 0 || x1 > 0 && x2 < 0) {
        rectSideATwoPoints = 0 + Math.abs(x2);
    } else {
        rectSideATwoPoints = Math.abs(0 - Math.abs(x2));
    }

    if (y1 < 0 && y2 > 0 || y1 > 0 && y2 < 0) {
        rectSideBTwoPoints = Math.abs(y2) + 0;
    } else {
        rectSideBTwoPoints = Math.abs(Math.abs(y2) - 0);
    }
    rectSideCTwoPoints = Math.sqrt(Math.pow(rectSideATwoPoints, 2) + Math.pow(rectSideBTwoPoints, 2));

     if (rectSideCTwoPoints === Math.round(rectSideCTwoPoints)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
     } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
     }

    //sides of the Rectangle Between The Two Points
    if (x1 < 0 && x2 > 0 || x1 > 0 && x2 < 0) {
        rectSideATwoPoints = Math.abs(x1) + Math.abs(x2);
    } else {
        rectSideATwoPoints = Math.abs(Math.abs(x1) - Math.abs(x2));
    }

    if (y1 < 0 && y2 > 0 || y1 > 0 && y2 < 0) {
        rectSideBTwoPoints = Math.abs(y1) + Math.abs(y2);
    } else {
        rectSideBTwoPoints = Math.abs(Math.abs(y1) - Math.abs(y2));
    }
    rectSideCTwoPoints = Math.sqrt(Math.pow(rectSideATwoPoints, 2) + Math.pow(rectSideBTwoPoints, 2));

     if (rectSideCTwoPoints === Math.round(rectSideCTwoPoints)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
     } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
     }
 };



 validityChecker(2, 1, 1, 1);