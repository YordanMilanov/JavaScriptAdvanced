function DaysOfMonth(month, year) {

    let leapYear = false;
    let daysOfMonth = 0;
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        leapYear = true;
    }

    switch (month) {
        case 1:
            daysOfMonth = 31;
            break;
        case 2:
            if (leapYear) {
                daysOfMonth = 29;
            } else {
                daysOfMonth = 28;
            }
            break;
        case 3:
            daysOfMonth = 31;
            break;
        case 4:
            daysOfMonth = 30;
            break;
        case 5:
            daysOfMonth = 31;
            break;
        case 6:
            daysOfMonth = 30;
            break;
        case 7:
            daysOfMonth = 31;
            break;
        case 8:
            daysOfMonth = 31;
            break;
        case 9:
            daysOfMonth = 30;
            break;
        case 10:
            daysOfMonth = 31;
            break;
        case 11:
            daysOfMonth = 30;
            break;
        case 12:
            daysOfMonth = 31;
            break;
        default:
            break;
    }
    console.log(daysOfMonth);
    return;
}