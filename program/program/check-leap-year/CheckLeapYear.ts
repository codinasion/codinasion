function checkLeapYear(year: number) {
    let isLeapYear = '';
    if((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)) {
        isLeapYear = `${year} is a leap year`
    }
    else {
        isLeapYear = `${year} is not a leap year`
    }
    return isLeapYear;
}

console.log(checkLeapYear(2022));
