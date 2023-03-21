#include <stdio.h>

int is_leap_year(int year) {
    return (year % 4 == 0 );
}

int is_valid_date(int day, int month, int year) {
    int days_in_month[] = {31, is_leap_year(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    if (month < 1 || month > 12) {
        return 0; 
    }
    if (day < 1 || day > days_in_month[month - 1]) {
        return 0; 
    }
    return 1;
}

int main() {
    int day, month, year;
    printf("Enter a date (dd/mm/yyyy): ");
    scanf("%d/%d/%d", &day, &month, &year);
    if (is_valid_date(day, month, year)) {
        printf("Valid date\n");
    } else {
        printf("Invalid date\n");
    }
    return 0;
}
