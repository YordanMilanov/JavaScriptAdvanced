function calcRadius (radius) {
    let radiusType = typeof radius;
   if (radiusType != 'number') {
    console.log(`We can not calculate the circle area, 
    because we receive a ${radiusType}.`);
   } else {
    let area = Math.PI * radius * radius
    console.log(area.toFixed(2));
   }
}

calcRadius(5);