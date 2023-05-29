#include <stdio.h>
#include <stdbool.h> // Header-file for boolean data-type.

bool checkLeapYear(int year); // Declaring function.

int main()
{
    // Taking input from the user
    printf("Enter the year: ");
    int year;
    scanf("%d", &year);
    printf("\n");
    bool result = checkLeapYear(year); // Calling function.
    if (result)
    {
        printf("%d is a leap year.\n", year);
    }
    else
    {
        printf("%d is not a leap year.\n", year);
    }
    return 0;
}

// Function to check if the year is leap year or not.
bool checkLeapYear(int year)
{
    if (year % 4 == 0)
    {
        if (year % 100 == 0)
        {
            if (year % 400 == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return true;
        }
    }
    else
    {
        return false;
    }
}