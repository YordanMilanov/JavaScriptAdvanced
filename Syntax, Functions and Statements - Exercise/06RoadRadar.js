function roadRadar (speed, location) {
    let isOverSpeed = false;
    let speedLimit = undefined;
    if (location === "motorway") {
        speedLimit = 130;
        if (speed > 130) {
            isOverSpeed = true;
        }
    } else if (location === "interstate") {
        speedLimit = 90;
        if (speed > 90) {
            isOverSpeed = true;
        }
    } else if (location === "city") {
        speedLimit = 50;
        if (speed > 50) {
            isOverSpeed = true;
        }
    } else if (location === "residential") {
        speedLimit = 20;
        if (speed > 20) {
            isOverSpeed = true;
        }
    }

    //In Limits
    if (!isOverSpeed) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }

    //Over Limits
    if (isOverSpeed) {
        let speedDifference = speed - speedLimit;
        let status = undefined;

        if (speedDifference <= 20) {
            status = "speeding";
        } else if (speedDifference <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }

        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

roadRadar(200, "motorway");