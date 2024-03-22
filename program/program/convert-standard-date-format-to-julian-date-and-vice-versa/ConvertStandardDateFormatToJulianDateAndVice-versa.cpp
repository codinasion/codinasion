#include <iostream>
#include <sstream>
#include <iomanip>
class DateConverter {
public:
    static int standardDateToJulianDate(int year, int month, int day) {
        int julianDate = day;
        
        // Add days from previous months
        for (int i = 1; i < month; ++i) {
            julianDate += daysInMonth(i, year);
        }

        // Add days from previous years
        for (int i = 1; i < year; ++i) {
            julianDate += daysInYear(i);
        }

        return julianDate;
    }

    static void julianDateToStandardDate(int julianDate, int& year, int& month, int& day) {
        int remainingDays = julianDate;
        year = 1;

        // Subtract days from previous years
        while (remainingDays > daysInYear(year)) {
            remainingDays -= daysInYear(year);
            ++year;
        }

        // Subtract days from previous months
        month = 1;
        while (remainingDays > daysInMonth(month, year)) {
            remainingDays -= daysInMonth(month, year);
            ++month;
        }

        day = remainingDays;
    }

private:
    static int daysInMonth(int month, int year) {
        static const int daysInMonth[] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        if (month == 2 && isLeapYear(year)) {
            return 29;
        }
        return daysInMonth[month];
    }

    static int daysInYear(int year) {
        return isLeapYear(year) ? 366 : 365;
    }

    static bool isLeapYear(int year) {
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    }
};

int main() {
    int choice;
    std::cout << "Choose conversion:\n";
    std::cout << "1. Standard Date to Julian Date\n";
    std::cout << "2. Julian Date to Standard Date\n";
    std::cin >> choice;

    if (choice == 1) {
        int year, month, day;
        std::cout << "Enter standard date (YYYY MM DD): ";
        std::cin >> year >> month >> day;
        int julianDate = DateConverter::standardDateToJulianDate(year, month, day);
        std::cout << "Julian Date: " << year << std::setw(3) << std::setfill('0') << julianDate << std::endl;
    } else if (choice == 2) {
        int julianDate, year, month, day;
        std::cout << "Enter Julian Date (YYYYDDD): ";
        std::cin >> year >> julianDate;
        DateConverter::julianDateToStandardDate(julianDate, year, month, day);
        std::cout << "Standard Date: " << year << " " << month << " " << day << std::endl;
    } else {
        std::cout << "Invalid choice\n";
    }

    return 0;
}
