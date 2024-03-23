#include <stdio.h>
int isLeapYear(int year) {
    // A leap year is divisible by 4 but not by 100, or divisible by 400
    return ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));
}

int daysInMonth(int month, int year) {
    // Array to store the number of days in each month
    int days[] = {31, 28 + isLeapYear(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    
    return days[month - 1];
}

// Function to check if the input month is valid (between 1 and 12)
int isMonthValid(int month)
{
    int ret=0;
    // Check if month is between 1 and 12 (inclusive)
    if (month >= 1 && month <= 12) {
        // If so, set ret to 1, indicating the month is valid
        ret = 1;
    }

    return ret;
}

// Function to check if the input day is valid for the given month and year
int isDayValid(int day, int month, int year)
{
    int ret = 0;
    // Check if day is greater than or equal to 1 and less than or equal to the number of days in the given month and year
    if(day >= 1 && day <= daysInMonth(month, year)) {
        // If so, set ret to 1, indicating the day is valid
        ret = 1;
    }

    return ret;
}

// Function to convert standard date format to Julian date format
int standardToJulian(int day, int month, int year) {
    int julianDate = 0;
    
    // Add days of months before current month
    for(int i = 1; i < month; i++) 
    {
        julianDate += daysInMonth(i,year);
    }
    
    // Add current day
    julianDate += day;
    
    // Combine the year and julianDate to get the Julian date format
    return (year * 1000) + julianDate;
}

// Function to convert Julian date format to standard date format
int julianToStandard(int julianDate, int *day, int *month, int *year) {
    int valid = 1;
    *year = julianDate / 1000;
    int days = julianDate % 1000;
    
   // Check if the number of days exceeds 365
    if (days > 365) {
        valid = 0;
        // If days equals 366, check if it's a leap year
        if (days == 366 && isLeapYear(*year)) {
            // If it's a leap year, mark it as valid
            valid = 1; 
        }
    }

    if(valid) {
        // Calculate month and day from remaining days
        int i = 1;
        while (days > daysInMonth(i,*year)) {
            days -= daysInMonth(i,*year);
            i++;
        }
        *month = i;
        *day = days;
    }
    return valid;
}

int main() {
    int choice;
    printf("Choose conversion option:\n");
    printf("1. Standard date format to Julian date format\n");
    printf("2. Julian date format to Standard date format\n");
    scanf("%d", &choice);

    if (choice == 1) {
        int day, month, year;
        printf("Enter day, month, and year (in format dd mm yyyy): ");
        scanf("%d %d %d", &day, &month, &year);
        if (isMonthValid(month) && isDayValid(day,month,year)) {
            int julianDate = standardToJulian(day, month, year);
            printf("Julian date: %d\n", julianDate);
        }
        else{
            printf("Invalid date\n");
        }

    } else if (choice == 2) {
        int julianDate, day, month, year, valid;
        printf("Enter Julian date: ");
        scanf("%d", &julianDate);
        valid = julianToStandard(julianDate, &day, &month, &year);
        if (valid && isMonthValid(month) && isDayValid(day,month,year)) {
            printf("Standard date: %02d-%02d-%d\n", day, month, year);
        }
        else {
            printf("Invalid date\n");
        }

    } else {
        printf("Invalid choice\n");
    }

    return 0;
}