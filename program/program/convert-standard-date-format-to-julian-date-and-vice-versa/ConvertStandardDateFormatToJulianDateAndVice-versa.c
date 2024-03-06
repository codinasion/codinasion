#include <stdio.h>
#include <stdlib.h>
#include <time.h>


int isLeapYear(int year) {
    return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
}


int toJulianDate(int year, int month, int day) {
    // Array to hold the number of days at the end of each month
    int monthDayTotals[] = { 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365 };
    
    // Adjust for leap year
    if (isLeapYear(year) && month > 2) {
        return year * 1000 + monthDayTotals[month - 1] + day + 1;
    } else {
        return year * 1000 + monthDayTotals[month - 1] + day;
    }
}


void fromJulianDate(int julianDate, int *year, int *month, int *day) {
    *year = julianDate / 1000;
    int days = julianDate % 1000;
    int monthDayTotals[] = { 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365 };
    
    if (isLeapYear(*year)) {
        for (int i = 1; i <= 12; i++) {
            if (days == 60 && i == 2) { // Special case for leap year Feb 29
                *month = 2;
                *day = 29;
                return;
            }
            if (days <= monthDayTotals[i] + (i > 2 ? 1 : 0)) {
                *month = i;
                *day = days - (monthDayTotals[i - 1] + (i > 2 ? 1 : 0));
                return;
            }
        }
    } else {
        for (int i = 1; i <= 12; i++) {
            if (days <= monthDayTotals[i]) {
                *month = i;
                *day = days - monthDayTotals[i - 1];
                return;
            }
        }
    }
}

int main() {

    int year, month, day;
    int julianDate;

    year = 2023;
    month = 6;
    day = 10;
    julianDate = toJulianDate(year, month, day);
    printf("Standard date: %d-%02d-%02d\n", year, month, day);
    printf("Julian date: %d\n", julianDate);

    // Convert from Julian date to standard date
    int convertedYear, convertedMonth, convertedDay;
    fromJulianDate(julianDate, &convertedYear, &convertedMonth, &convertedDay);
    printf("Converted back to standard date: %d-%02d-%02d\n", convertedYear, convertedMonth, convertedDay);

    return 0;
}
