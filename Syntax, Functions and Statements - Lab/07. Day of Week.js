function DayOfWeek(DayAsString) {

    let result = undefined;

    switch (DayAsString) {
        case `Monday`:
            result = 1;
            break;
        case `Thusday`:
            result = 2;
            break;
        case `Wednesday`:
            result = 3;
            break;
        case `Thursday`:
            result = 4;
            break;
        case `Friday`:
            result = 5;
            break;
        case `Saturday`:
            result = 6;
            break;
        case `Sunday`:
            result = 7;
            break;
        default:
            result = "error";
            break;
    }

    console.log(result);
}

DayOfWeek(`Friday`);
